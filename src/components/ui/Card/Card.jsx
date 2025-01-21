import PropTypes from "prop-types";
import "./card.css";
export const Card = ({ name, ki, race, image, description, isCharacter}) => {
  return (
    isCharacter ?
    <div className="card">
      <img src={image} alt={name} className="card__image-container_character"/>
      <div className="card__content">
        <p className="card__title">{name}</p>
        <p className="card__subtitle">{race}</p>
        <p className="card__description">
          Ki: {ki}
        </p>
        <p className="card__description">
            {description}
        </p>
      </div>
    </div> :
    <div className="card">
      <img src={image} alt={name} className="card__image-container_character"/>
      <div className="card__content">
        <p className="card__title">{name}</p>
        <p className="card__description">{description}</p>
      </div>
    </div>
  );
};

Card.propTypes = {
    name: PropTypes.string,
    ki: PropTypes.string,
    race: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
    isCharacter: PropTypes.bool,
  };