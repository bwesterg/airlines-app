import React, { Component } from 'react';
import './App.css';
import AirlineContainer from './components/AirlineContainer';
import AirlineForm from './components/AirlineForm';
import AirlineFilter from './components/AirlineFilter';

const airlinesURL = "http://localhost:3000/airlines"

class App extends Component {

  state = {
    airlines: [],
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

  addAirline = (newAirline) => {
    this.setState({
      airlines: [...this.state.airlines, newAirline]
    })

    fetch(airlinesURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({airline: newAirline})
    })
  }

  updateAirline = (updatedAirline) => {
    let airlines = this.state.airlines.map(airline => airline.id === updatedAirline ? updatedAirline : airline)

    this.setState({ airlines })

    fetch(airlinesURL + "/" + updatedAirline.id, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({airline: updatedAirline})
    } )
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
        <div className="input-search">
          <AirlineForm submitAction={this.addAirline}/>
          <AirlineFilter searchTerm={this.state.searchTerm} updateSearchTerm={this.updateSearchTerm}/>
        </div>
        <AirlineContainer updateAirline={this.updateAirline} deleteAirline={this.deleteAirline} airlines={this.filteredAirlines()} />
      </div>
    );
  }
}

export default App;
