import React, { Component } from 'react';
import './App.css';
import AirlineContainer from './components/AirlineContainer';
import AirlineForm from './components/AirlineForm';

const airlinesURL = "http://localhost:3000/airlines"

class App extends Component {

  state = {
    airlines: []
  }

  componentDidMount() {
    this.getAirlines()
  }

  getAirlines = () => {
    fetch(airlinesURL)
      .then(response => response.json())
      .then(airlines => this.setState({airlines:airlines}))
  }

  addAirline = (newAirline) => {
    this.setState({
      airlines: [...this.state.airlines, newAirline]
    })

    fetch(airlinesURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newAirline)
    })
  }

  deleteAirline = (id) => {
    let filtered = this.state.airlines.filter(airline => airline.id !== id)
    this.setState({
      airlines: filtered
    })
    fetch(airlinesURL + "/" + id, { method: "DELETE" } )
  }

  render(){ 
    return (
      <div className="App">
        <h1>Airlines App</h1>
        <AirlineForm addAirline={this.addAirline}/>
        <AirlineContainer deleteAirline={this.deleteAirline} airlines={this.state.airlines} />
      </div>
    );
  }
}

export default App;
