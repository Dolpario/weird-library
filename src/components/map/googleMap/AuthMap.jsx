import React from "react";
import GoogleMapReact from "google-map-react";
import { FaMapMarker } from "react-icons/fa";
import styled from "styled-components";
import PropTypes from 'prop-types';

const MarkerWrapper = styled.div`
    padding: 15px 10px,
    display: inline-flex,
    text-align: center,
    align-items: center,
    justify-content: center,
    border-radius: 100%,
    transform: translate(-50%, -50%),
`;


const Maker = ({size}) => {
  return (
    <MarkerWrapper>
      <FaMapMarker
        size={size}
        color="red"
      />
    </MarkerWrapper>)
};

export const AuthMap = ({ center, zoom, marker, size }) => {
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDUM_amLg5DJy0OW1zOgv2KAyOXw5e0fww" }}
        defaultCenter={center}
        defaultZoom={zoom}
        center={center}
        zoom={zoom}
      >
        <Maker
          lat={marker.lat}
          lng={marker.lng}
          size={size}
        />
      </GoogleMapReact>
    </div>
  );
}


AuthMap.propTypes = {
  marker: PropTypes.object,
  center: PropTypes.object,
  zoom: PropTypes.number,
  size: PropTypes.number,
};

AuthMap.defaultProps = {
  marker: {
    lat: 37.54609769177242,
    lng: 126.92200842331822,
  },
  center: {
    lat: 37.54609769177242,
    lng: 126.92200842331822,
  },
  zoom: 16,
  size: 10
};
