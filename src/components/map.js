import React from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  useMap,
  LayerGroup
} from "react-leaflet";
import L from "leaflet";
import customMarker from "../images/icon-location.svg";
import styled from "styled-components";

const Div = styled.div`
  width: 100%;
  height: 65vh;
  position: absolute;
  bottom: 0;
  z-index: -1;
`;

const Maps = ({ latlng }) => {
  const custIcon = new L.icon({
    iconUrl: customMarker,
    iconSize: [30, 40],
    className: "leaflet-icon"
  });

  const NewMarker = () => {
    const map = useMap();
    map.flyTo(latlng, 9, 2);
    return null;
  };

  return (
    <Div className="leaflet-container">
      <MapContainer
        className="leaflet"
        center={[44.6786, 26.0124]}
        zoom={3}
        zoomControl={false}
      >
        {latlng && <NewMarker latlng={latlng} />}
        <TileLayer
          attribution='<a href="http://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank">&copy; <b>Jawg</b>Maps</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.jawg.io/jawg-terrain/{z}/{x}/{y}{r}.png?access-token=VeDdzcmsAkeVK73Kc92NNvvVMoZW1MwB9K42flSZ6tRG7LUh1etwuUNBoo0vZvPU"
        />
        {latlng && (
          <LayerGroup>
            <Marker position={latlng} icon={custIcon} />
          </LayerGroup>
        )}
      </MapContainer>
    </Div>
  );
};

export default Maps;
