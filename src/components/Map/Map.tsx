import GoogleMapReact from "google-map-react";
import { Dispatch, SetStateAction } from "react";
import { IBounds, ICoordinates } from "../../types";
import "./Map.scss";

interface IMap {
  coordinates: ICoordinates | undefined;
  setCoordinates: Dispatch<SetStateAction<ICoordinates>>;
  setBounds: Dispatch<SetStateAction<IBounds | null>>;
}

const Map = ({ coordinates, setBounds, setCoordinates }: IMap) => {
  const bootstrapURLKey = import.meta.env.VITE_bootstrapURLKeys;

  const defaultCoordinates = { lat: 0, lng: 0 };

  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: bootstrapURLKey }}
        defaultCenter={defaultCoordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        // options={''}
        onChange={(e) => {
          setBounds({ ne: e.bounds.ne, sw: e.bounds.sw });
          setCoordinates(e.center);
        }}
        // onChildClick={''}
      />
    </div>
  );
};

export default Map;
