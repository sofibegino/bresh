import React, { Component } from 'react';
import { Map,Marker, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '80%',
  height: '500px',
  left:'10%',
};

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        onClick={ () => window.location.href =
              "https://www.google.com/maps/place/34%C2%B054'49.8%22S+54%C2%B052'39.0%22W/@-34.9138216,-54.8796807,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0xb66b1508c2d922ed!8m2!3d-34.913826!4d-54.877492"
          }
        style={mapStyles}
        initialCenter={
          {
            lat: -34.913826,
            lng: -54.877492
          }
        }
      ><Marker onClick={this.onMarkerClick}
      name={'Current location'} /></Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDgUEuqK2T6Ye_7eIctC2p02LCicXCEXeU'
})(MapContainer);