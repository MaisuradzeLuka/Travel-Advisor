import { useState } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { IPlace } from "../../types";
import { PlaceDetails } from "..";
import "./List.scss";

const List = ({ places }: { places: IPlace[] }) => {
  const [type, setType] = useState("Restaurants");
  const [rating, setRating] = useState("Ratings");

  return (
    <aside className="leftSide">
      <h4>Restaurants, Hotels and Attractions around you</h4>
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small" variant="standard">
        <InputLabel id="type">Type</InputLabel>
        <Select
          id="type"
          value={type}
          label="type"
          onChange={(e) => setType(e.target.value)}
        >
          <MenuItem value={"Restaurants"}>Restaurants</MenuItem>
          <MenuItem value="Hotels">Hotels</MenuItem>
          <MenuItem value="Attractions">Atractions</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small" variant="standard">
        <InputLabel id="rating">Rating</InputLabel>
        <Select
          id="rating"
          value={rating}
          label="Rating"
          onChange={(e) => setRating(e.target.value)}
        >
          <MenuItem value="Ratings" disabled style={{ display: "none" }}>
            Ratings
          </MenuItem>
          <MenuItem value="1-3">1-3</MenuItem>
          <MenuItem value="3-4">3-4</MenuItem>
          <MenuItem value="4-5">4-5</MenuItem>
        </Select>
      </FormControl>
      <div className="leftSide__list">
        {places?.map((place, i) => (
          <PlaceDetails key={i} place={place} />
        ))}
      </div>
    </aside>
  );
};

export default List;
