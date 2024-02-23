import { useState } from "react";
import "./List.scss";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const List = () => {
  const [type, setType] = useState("Restaurants");
  const [rating, setRating] = useState("Ratings");

  return (
    <aside className="list">
      <h4>Restaurants, Hotels and Attractions around you</h4>
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="type">Type</InputLabel>
        <Select
          id="type"
          value={type}
          label="type"
          onChange={(e) => setType(e.target.value)}
          autoWidth
        >
          <MenuItem value={"Restaurants"}>Restaurants</MenuItem>
          <MenuItem value="Hotels">Hotels</MenuItem>
          <MenuItem value="Attractions">Atractions</MenuItem>
        </Select>
      </FormControl>
      {/* <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="rating">Rating</InputLabel>
        <Select
          label="rating"
          id="rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        >
          <MenuItem value="1">1</MenuItem>
          <MenuItem value="2">2</MenuItem>
          <MenuItem value="3">3</MenuItem>
          <MenuItem value="4">4</MenuItem>
          <MenuItem value="5">5</MenuItem>
        </Select>
      </FormControl> */}
    </aside>
  );
};

export default List;
