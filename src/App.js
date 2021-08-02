import React, { Component } from 'react';
import './App.css';
import AirlineContainer from './components/AirlineContainer';
import AirlineForm from './components/AirlineForm';
import AirlineFilter from './components/AirlineFilter';
import { patchAirline, postAirline, deleteAirline } from './helpers';
import SignUpForm from './components/SignUpForm';
import {Route, Switch} from 'react-router-dom';

const airlinesURL = "http://localhost:3000/airlines/"

class App extends Component {

  state = {
    airlines: [],
    user: {},
    alert: [],
    searchTerm: "",
  }

  filteredAirlines = () => this.state.airlines
    .filter(airline => airline.name && airline.rating)
    .filter(airline => {
      return airline.name
        .toLowerCase()
        .includes(this.state.searchTerm.toLowerCase())
    })

    updateSearchTerm = event => {
      this.setState({
        searchTerm: event.target.value,
      })
    }

  componentDidMount() {
    this.getAirlines()
  }

  getAirlines = () => {
    fetch(airlinesURL)
      .then(response => response.json())
      .then(airlines => this.setState({airlines:airlines}))
  }
  //the get airlines function reads better in App because setting state has to happen in App, and can't be in the helpers folder.  The fetch could be moved to helpers, but it makes more sense to keep it together with the setState.

  addAirline = (newAirline) => {
    this.setState({
      airlines: [...this.state.airlines, newAirline]
    })
    postAirline(newAirline)
  }

  updateAirline = (updatedAirline) => {
    let airlines = this.state.airlines.map(airline => airline.id === updatedAirline ? updatedAirline : airline)
    this.setState({ airlines })
    patchAirline(updatedAirline)
  }

  deleteAirline = (id) => {
    let filtered = this.state.airlines.filter(airline => airline.id !== id)
    this.setState({
      airlines: filtered
    })
    deleteAirline(id)
  }

  signUp = (user) => {
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify({user})
    })
    .then(response => response.json())
    .then(response => {
      if(response.errors){
        this.setState({alerts: response.errors})
      }
      else {
        this.setState({
          user: response.user,
          alerts: ["New User Created!"]
        })
      }
    })
  }

  render(){ 
    return (
      <div className="App">
        <h1>Airlines App</h1>
        <Switch>
          
        
        <Route path="/signup" render={(routerProps) => <SignUpForm signUp={this.signUp} alerts={this.state.alerts}/>} />
        <div className="input-search">
            <AirlineForm submitAction={this.addAirline}/>
            <AirlineFilter searchTerm={this.state.searchTerm} updateSearchTerm={this.updateSearchTerm}/>
          </div>
          <AirlineContainer updateAirline={this.updateAirline} deleteAirline={this.deleteAirline} airlines={this.filteredAirlines()} />
        </Switch>
      </div>
    );
  }
}

export default App;
