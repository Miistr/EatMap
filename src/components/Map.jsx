import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, google } from 'google-maps-react';
import MainContent from './MainContent';

export class MapContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Shawarma: [{ lat: 52.101496, lng: 23.655847 },
            { latitude: 52.074138, longitude: 23.670076 },
            { latitude: 52.097360, longitude: 23.694322 },
            { latitude: 52.090083, longitude: 23.694640 },
            { latitude: 52.087309, longitude: 23.696097 },
            { latitude: 52.085463, longitude: 23.694607 },
            { latitude: 52.076617, longitude: 23.717420 },
            { latitude: 52.106657, longitude: 23.759984 },
            { latitude: 52.103020, longitude: 23.762096 },
            { latitude: 52.102267, longitude: 23.750061 },
            { latitude: 52.099562, longitude: 23.759037 },
            { latitude: 52.075359, longitude: 23.755548 }],

            Pizza: [{ lat: 52.101494, lng: 23.655845 },
            { latitude: 52.120748, longitude: 23.691367 },
            { latitude: 52.095990, longitude: 23.690569 },
            { latitude: 52.095655, longitude: 23.690653 },
            { latitude: 52.094444, longitude: 23.689289 },
            { latitude: 52.091949, longitude: 23.693172 },
            { latitude: 52.090570, longitude: 23.693933 },
            { latitude: 52.089890, longitude: 23.694374 },
            { latitude: 52.088014, longitude: 23.688578 },
            { latitude: 52.086472, longitude: 23.683171 },
            { latitude: 52.085391, longitude: 23.693489 },
            { latitude: 52.080855, longitude: 23.745496 },
            { latitude: 52.078528, longitude: 23.740591 },
            { latitude: 52.065497, longitude: 23.727940 },
            { latitude: 52.064391, longitude: 23.730495 },
            { latitude: 52.099563, longitude: 23.759036 },
            { latitude: 52.109109, longitude: 23.772593 },
            { latitude: 52.112639, longitude: 23.777414 },
            { latitude: 52.103264, longitude: 23.786485 }],

            Burgers: [{ lat: 52.095877, lng: 23.690337 },
            { latitude: 52.076621, longitude: 23.717415 },
            { latitude: 52.080496, longitude: 23.741173 },
            { latitude: 52.090050, longitude: 23.694182 },
            { latitude: 52.085006, longitude: 23.693946 },
            { latitude: 52.087241, longitude: 23.702504 }],

            Pasta: [{ lat: 52.092344, lng: 23.691970 },
            { latitude: 52.064391, longitude: 23.730495 },
            { latitude: 52.094825, longitude: 23.691442 },
            { latitude: 52.091751, longitude: 23.689212 }],

            Pancakes: [{ lat: 52.083771, lng: 23.694268 },
            { latitude: 52.085276, longitude: 23.695112 },
            { latitude: 52.092093, longitude: 23.693648 },
            { latitude: 52.102243, longitude: 23.750046 },
            { latitude: 52.131831, longitude: 23.769276 }],

            Sushi: [{ lat: 52.097118, lng: 23.693400 },
            { latitude: 52.093245, longitude: 23.707669 },
            { latitude: 52.089576, longitude: 23.709933 },//sushi prime
            { latitude: 52.065230, longitude: 23.724953 },
            { latitude: 52.080856, longitude: 23.745502 },
            { latitude: 52.099563, longitude: 23.759038 },
            { latitude: 52.085008, longitude: 23.693944 }]
        }
    }

    displayMarkers = (type) => {
        return this.state[type].map((store, index) => {
            return <Marker key={index} id={index} position={{
                lat: store.latitude,
                lng: store.longitude
            }}
                onClick={() => console.log("You clicked me!", type)} />
        })
    }

    render() {
        return (
            <Map
                google={this.props.google}
                zoom={12}
                initialCenter={{ lat: 52.0989494, lng: 23.762183 }}
            >
                {this.displayMarkers(this.props.type)}
            </Map>

        );
    }
}
export default GoogleApiWrapper({
    apiKey: 'AIzaSyAa_GWOcToBBF5INTLmn6OkC4jap9Vqm5k'
})(MapContainer);