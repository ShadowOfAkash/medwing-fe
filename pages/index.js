import React, {Component} from 'react';
import MapGL, {Marker, Popup, NavigationControl} from 'react-map-gl';

import ControlPanel from '../components/control-panel';
import CustomMarker from '../components/custom-marker';
import CustomMarkerInfo from '../components/custom-marker-info';

const TOKEN = 'pk.eyJ1IjoiZ2FuZGhhcnYiLCJhIjoiY2p4cGtpM2x5MGg3MjNjbnR0bW96a2tiMyJ9.NjHFzK86ulM0754DDZr-Yw'; // Set your mapbox token here

const fullscreenControlStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  padding: '10px'
};

const navStyle = {
  position: 'absolute',
  top: 36,
  left: 0,
  padding: '10px'
};

const markers = [
  {
    latitude: 52.527784, longitude: 13.403117, comment: 'Hello world', image: 'http://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Above_Gotham.jpg/240px-Above_Gotham.jpg'
  }
]

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        width: '100%',
        height: '100%',
        latitude: 52.520008,
        longitude: 13.404954,
        zoom: 5,
        bearing: 0,
        pitch: 0
      },
      isAddingMarker: false,
      marker: {
        latitude: 52.527784,
        longitude: 13.403117
      },
      popupInfo: null
    };
  }

  _addMarker = () => {
    console.log('came?')
    this.setState((prevState) => {
      return { isAddingMarker: !prevState.isAddingMarker }
    })
  }

  _onViewportChange = viewport => {
    this.setState({viewport});
  };

  _onMarkerDragEnd = event => {
    this.setState({
      marker: {
        longitude: event.lngLat[0],
        latitude: event.lngLat[1]
      }
    });
  };

  _renderMarker = (marker, draggable = false) => {
    return (
      <Marker draggable={draggable} onDragEnd={this._onMarkerDragEnd} longitude={marker.longitude} latitude={marker.latitude}>
        <CustomMarker size={20} onClick={() => !draggable && this.setState({ popupInfo: marker })} />
      </Marker>
    );
  };

  _renderPopup() {
    const {popupInfo} = this.state;

    return (
      popupInfo && (
        <Popup
          tipSize={5}
          anchor="top"
          longitude={popupInfo.longitude}
          latitude={popupInfo.latitude}
          closeOnClick={false}
          onClose={() => this.setState({popupInfo: null})}
        >
          <CustomMarkerInfo info={popupInfo} />
        </Popup>
      )
    );
  }

  render() {
    const {viewport, isAddingMarker, marker} = this.state;

    const temp = markers.map(marker => this._renderMarker(marker))

    return (
      <MapGL
        {...viewport}
        onViewportChange={this._onViewportChange}
        mapboxApiAccessToken={TOKEN}
      >
        {this._renderPopup()}
        {isAddingMarker && this._renderMarker(marker, true)}
        {!isAddingMarker && temp}
        <ControlPanel isAddingMarker={isAddingMarker} addMarker={this._addMarker} />
      </MapGL>
    );
  }
}