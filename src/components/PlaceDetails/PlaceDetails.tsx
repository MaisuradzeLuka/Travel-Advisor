import { IPlace } from "../../types";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import "./PlaceDetails.scss";

const PlaceDetails = ({ place }: { place: IPlace }) => {
  return (
    <article className="place">
      <img
        src={place.photo ? place.photo.images.large.url : ""}
        alt={place.name}
      />
      <div className="place__info">
        <h4>{place.name}</h4>
        <div className="place__info__wrapper">
          <span>Price</span>
          <span>{place.price}</span>
        </div>
        <div className="place__info__wrapper">
          <span>Ranking</span>
          <span>{place.ranking}</span>
        </div>
        {/* {place?.awards?.map((award, i) => (
          <div key={i}>
            <img src={award.images.small} alt={award.display_name} />
            <p>{award.display_name}</p>
          </div>
        ))} */}
        <div className="place__info__cuisine">
          {place?.cuisine?.map(({ name }, i) => (
            <span key={i}>{name}</span>
          ))}
        </div>
        {place?.address && (
          <div className="place__info__wrapper">
            <FaLocationDot />
            <p>{place.address}</p>
          </div>
        )}
        {place?.phone && (
          <div className="place__info__wrapper">
            <FaPhone />
            <p>{place.phone}</p>
          </div>
        )}
        <div className="place__info__links">
          {place.web_url && (
            <button>
              <a href={`${place?.web_url}`} target="_blank">
                Trip Advisor
              </a>
            </button>
          )}
          {place.website && (
            <button>
              <a href={`${place?.website}`} target="_blank">
                Website
              </a>
            </button>
          )}
        </div>
      </div>
    </article>
  );
};

export default PlaceDetails;
