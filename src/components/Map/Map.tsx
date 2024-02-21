import GoogleMapReact from "google-map-react";
import "./Map.scss";

const Map = () => {
  const coordinates = {
    lat: 0,
    lng: 0,
  };

  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAGH_jLIKaM9I3b-Mx4DkFPMoK2xq25v2g" }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        // options={''}
        // onChange={''}
        // onChildClick={''}
      ></GoogleMapReact>
    </div>
  );
};

export default Map;
