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

  render(){ 
    return (
      <div className="App">
        <h1>Airlines App</h1>
        <AirlineForm />
        <AirlineContainer airlines={this.state.airlines} />
      </div>
    );
  }
}

export default App;
