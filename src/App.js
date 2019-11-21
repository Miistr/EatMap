import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';
import './components/selectbox.css';
import MapContainer from './components/Map'


export default class App extends React.Component {
  state = { type: "Shawarma" };

  onChange = (type) => {
    this.setState({ type: type.value });
  }

  render() {
    return (<div className="components">
      <Navbar />
      <div className='main'>
        <MainContent onChange={this.onChange} />
        <div id="map" className="main-map">
          <MapContainer type={this.state.type} />
        </div>
      </div>
    </div>
    );

  }

}

