import { IBounds } from "../types";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_X_RapidAPI_Key,
    "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
  },
};

export const fetchPlaces = async ({ sw, ne }: IBounds) => {
  console.log(sw, ne);

  const url = `https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary?bl_latitude=${sw.lat}&tr_latitude=${ne.lat}&bl_longitude=${sw.lng}&tr_longitude=${ne.lng}&restaurant_tagcategory_standalone=10591&restaurant_tagcategory=10591&limit=30&currency=USD&open_now=false&lunit=km&lang=en_US`;

  try {
    const response = await fetch(url, options);
    const result = await response.json();

    return result.data;
  } catch (error) {
    throw new Error(`Something went wrong: ${error}`);
  }
};
