import React from "react";
import ReactGA from "react-ga";
import dealData from "./data-nwa";
import LocationCard from "./components/LocationCard";

import Button from "@material-ui/core/Button";

import "./App.css";

function initializeAnalytics() {
  ReactGA.initialize("UA-171813998-1");
  ReactGA.pageview(window.location.pathname + window.location.search);
}

function dow() {
  var d = new Date();
  var weekday = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];

  return weekday[d.getDay()];
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      dayOfWeek: dow(),
    };
  }

  render() {
    initializeAnalytics();

    const locationComponents = dealData
      .sort((a, b) => (a.name > b.name ? 1 : -1))
      .filter(
        (place) =>
          place.specials[this.state.dayOfWeek].length > 0 ||
          place.happyHours.filter((hhOfDay) =>
            hhOfDay.dow.includes(this.state.dayOfWeek)
          ).length > 0
      )
      .map((location) => (
        <LocationCard
          dow={this.state.dayOfWeek}
          key={location.id}
          location={location}
        />
      ));

    return (
      <div className="App">
        <header className="App-header">
          <nav>
            <Button onClick={() => this.setState({ dayOfWeek: "sunday" })}>
              S
            </Button>
            <Button onClick={() => this.setState({ dayOfWeek: "monday" })}>
              M
            </Button>
            <Button onClick={() => this.setState({ dayOfWeek: "tuesday" })}>
              T
            </Button>
            <Button onClick={() => this.setState({ dayOfWeek: "wednesday" })}>
              W
            </Button>
            <Button onClick={() => this.setState({ dayOfWeek: "thursday" })}>
              T
            </Button>
            <Button onClick={() => this.setState({ dayOfWeek: "friday" })}>
              F
            </Button>
            <Button onClick={() => this.setState({ dayOfWeek: "saturday" })}>
              S
            </Button>
          </nav>
          <h1>{this.state.dayOfWeek}</h1>
        </header>
        <main className="container-masonry">{locationComponents}</main>
      </div>
    );
  }
}

export default App;
