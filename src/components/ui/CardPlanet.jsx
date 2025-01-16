import PropTypes from "prop-types";

export function CardPlanet({ key, name, image }) {
  return (
    <div className="cardPlanet" key={key} >
      <img src={image} alt={name} className="imgPlanet" />
      <h2>{name}</h2>
    </div>
  );
}

CardPlanet.propTypes = {
  key: PropTypes.number,
  name: PropTypes.string,
  image: PropTypes.string,
};
