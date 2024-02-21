import { Header, Map, List, PlaceDetails } from "./components";

import "./App.scss";

const App = () => {
  return (
    <>
      <Header />
      <div className="body">
        <List />
        <Map />
      </div>
    </>
  );
};

export default App;
