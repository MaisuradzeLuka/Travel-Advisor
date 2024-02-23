import GoogleMapReact from "google-map-react";
import "./Map.scss";

const Map = () => {
  const coordinates = {
    lat: 0,
    lng: 0,
  };

  const bootstrapURLKey = import.meta.env.VITE_bootstrapURLKeys;

  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: bootstrapURLKey }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        // options={''}
        // onChange={''}
        // onChildClick={''}
      />
    </div>
  );
};

export default Map;
