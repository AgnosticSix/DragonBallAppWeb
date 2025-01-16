import PropTypes from "prop-types";

export function CardCharacter({ name, ki, race, image }) {
  return (
    <div className="cardCharacter" >
      <img src={image} alt={name} className="imgCharacter" />
      <h2>{name}</h2>
      <p>Ki: {ki}</p>
      <p>Race: {race}</p>
    </div>
  );
}

CardCharacter.propTypes = {
  name: PropTypes.string,
  ki: PropTypes.string,
  race: PropTypes.string,
  image: PropTypes.string,
};
