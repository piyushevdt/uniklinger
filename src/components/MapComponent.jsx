import React from "react";
import GoogleMapReact from 'google-map-react';
import Pin from "../assets/images/marker.svg";

const Marker = ({ text }) => (
    <div style={{
      position: 'absolute',
      transform: 'translate(-50%, -100%)',
      width: '30px',
      height: '30px',
    }}>
      <img
        src={Pin}
        alt="Pin"
        style={{ width: '100%', height: '100%',filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.5))' }}
      />
      <div style={{
        position: 'absolute',
        bottom: '-15px',
        left: '50%',
        transform: 'translateX(-50%)',
        backgroundColor: 'white',
        padding: '5px',
        borderRadius: '5px',
        textAlign: 'center',
        fontSize: '14px'
      }}>
        {text}
      </div>
    </div>
  );
export default function MapComponent(props){
  console.log('component props',props);
  const defaultProps = props.lat === undefined ? {
    center: {
      lat: 19.156513,
      lng: 74.699833
    },
    zoom: 14
  }: { center: {
    lat: props.lat,
    lng: props.long
  },
  zoom: 14};
  

  return (
    // Important! Always set the container height explicitly
    <div key={props.lat} style={{ height: '400px', width: '100%',boxShadow:'0px 4px 36px 0px #452A3B17',padding:10}}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyD6bQlhWUlaJckF6JoGGJY9hn8dsSQIrwc" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
      <Marker  lat={props.lat} lng={props.long} />

      </GoogleMapReact>
    </div>
  );
}