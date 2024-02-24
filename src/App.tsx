import { useEffect, useState } from "react";
import { Header, Map, List } from "./components";

import { fetchPlaces } from "./utils";
import { IBounds, ICoordinates } from "./types";
import "./App.scss";

const App = () => {
  const [places, setPlaces] = useState([]);
  //prettier-ignore
  const [coordinates, setCoordinates] = useState<ICoordinates>({} as ICoordinates);
  const [bounds, setBounds] = useState<IBounds | null>(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  useEffect(() => {
    fetchPlaces(bounds!).then((data) => setPlaces(data));
  }, [bounds]);

  return (
    <div className="mainWrapper">
      <Header />
      <div className="body">
        <List places={places} />
        <Map
          coordinates={coordinates}
          setBounds={setBounds}
          setCoordinates={setCoordinates}
        />
      </div>
    </div>
  );
};

export default App;
