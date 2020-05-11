import React from 'react';
import dealData from './data'
import LocationCard from './components/LocationCard';
import './App.css';

function dow() {
  var d = new Date();
  var weekday = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday"
  ];

  return weekday[d.getDay()];
}

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      dayOfWeek: dow()
    }
  }

  render () {
    const locationComponents = dealData
      .filter(place => 
        place.specials[this.state.dayOfWeek].length > 0 
        || 
        place.happyHours.filter(hhOfDay => hhOfDay.dow.includes(this.state.dayOfWeek)).length > 0)
      .map(location => 
        <LocationCard dow={this.state.dayOfWeek} key={location.id} location={location} />)

    return (
      <div className="App">
        <header className="App-header">
          <nav>
            <button onClick={() => this.setState({ dayOfWeek: 'sunday'})}>S</button>
            <button onClick={() => this.setState({ dayOfWeek: 'monday'})}>M</button>
            <button onClick={() => this.setState({ dayOfWeek: 'tuesday'})}>T</button>
            <button onClick={() => this.setState({ dayOfWeek: 'wednesday'})}>W</button>
            <button onClick={() => this.setState({ dayOfWeek: 'thursday'})}>T</button>
            <button onClick={() => this.setState({ dayOfWeek: 'friday'})}>F</button>
            <button onClick={() => this.setState({ dayOfWeek: 'saturday'})}>S</button>
          </nav>
          <h1>{this.state.dayOfWeek}</h1>
        </header>
        <main>
          {locationComponents}
        </main>
      </div>
    )
  }
}

export default App;
