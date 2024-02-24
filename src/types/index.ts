import { Coords } from "google-map-react";

export interface IPlace {
  photo: { images: { large: { width: string; url: string; height: string } } };
  name: string;
  rating: string;
  num_reviews: string;
  price_level: string;
  price: string;
  ranking: string;
  address: string;
  phone: string;
  web_url: string;
  website: string;
  cuisine: { key: string; name: string }[];
  //   awards?: {}[];
}

export interface ICoordinates {
  lat: number;
  lng: number;
}

export interface IBounds {
  ne: Coords;
  sw: Coords;
}
