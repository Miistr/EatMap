import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import "./components/SelectBox.css";
import "./components/SearchBox.css";
import MapContainer from "./components/Map";

export default class App extends React.Component {
  state = {
    type: "Shawarma",
    lat: 52.0989494,
    lng: 23.762183
  };
  onChange = type => {
    this.setState({ type: type.value, lat: 52.0989494, lng: 23.762183 });
  };

  getCordinates = (latitude, longitude) => {
    this.setState({
      lat: latitude,
      lng: longitude
    });
  };

  render() {
    return (
      <div className="components">
        <Navbar getCordinates={this.getCordinates} />
        <div className="main">
          <MainContent onChange={this.onChange} />
          <div id="map" className="main-map">
            <MapContainer
              type={this.state.type}
              lat={this.state.lat}
              lng={this.state.lng}
            />
          </div>
        </div>
      </div>
    );
  }
}
