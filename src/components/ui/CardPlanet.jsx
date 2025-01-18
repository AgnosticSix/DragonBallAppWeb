import PropTypes from "prop-types";

export function CardPlanet({ name, image }) {
  return (
    <div className="cardPlanet" >
      <img src={image} alt={name} className="imgPlanet" />
      <h2>{name}</h2>
    </div>
  );
}

CardPlanet.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
};
