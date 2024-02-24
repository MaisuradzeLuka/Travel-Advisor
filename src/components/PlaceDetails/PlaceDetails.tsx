import { IPlace } from "../../types";
import "./PlaceDetails.scss";

const PlaceDetails = ({ place }: { place: IPlace }) => {
  return (
    <article>
      <img
        src={place.photo ? place.photo.images.large.url : ""}
        alt={place.name}
      />
      <div>
        <h4>{place.name}</h4>
        <div>
          <span>Price</span>
          <span>{place.price}</span>
        </div>
        <div>
          <span>Ranking</span>
          <span>{place.ranking}</span>
        </div>
        {place?.awards?.map((award) => (
          <div>
            <img src={award.images.small} alt={award.display_name} />
            <p>{award.display_name}</p>
          </div>
        ))}
      </div>
    </article>
  );
};

export default PlaceDetails;
