import { Header, Map, List, PlaceDetails } from "./components";

import "./App.scss";

const App = () => {
  return (
    <div className="mainWrapper">
      <Header />
      <div className="body">
        <List />
        <Map />
      </div>
    </div>
  );
};

export default App;
