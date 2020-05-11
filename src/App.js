import React from 'react';
import dealData from './data'
import LocationCard from './components/LocationCard';
import './App.css';

function App() {
  const locationComponents = dealData.map(location => <LocationCard key={location.id} location={location} />)

  return (
    <div className="App">
      <header className="App-header">
        {locationComponents}
      </header>
    </div>
  );
}

export default App;
