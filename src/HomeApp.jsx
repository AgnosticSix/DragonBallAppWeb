// import PropTypes from 'prop-types';

// export const HomeApp = ({ children }) => {
//     return (
//         <>
//             {children}
//         </>
//     );
// };

// HomeApp.propTypes = {
//     children: PropTypes.node,
// };

import { useState, useEffect } from "react";
import { CardCharacter } from "./components/ui/CardCharacter";
import { CardPlanet } from "./components/ui/CardPlanet";

export const HomeApp = () => {
  const [character, setCharacter] = useState([]);
  const [planet, setPlanet] = useState([]);
  const getCharacters = () => {
    fetch("/src/api/data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((character) => setCharacter(character.characters));
  };

  const getPlanets = () => {
    fetch("/src/api/data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((planet) => setPlanet(planet.planets));
  };

  useEffect(() => {
    getCharacters();
  }, []);

  useEffect(() => {
    getPlanets();
  }, []);

  return (
    <>
      <h1>Personajes</h1>
      <ul>
        {character.map((character) => (
          <CardCharacter
            key={character.id}
            name={character.name}
            ki={character.ki}
            race={character.race}
            image={character.image}
          />

          // <li key={character.id}>
          //   <h2>{character.name}</h2>
          //   <p>Ki: {character.ki}</p>
          //   <p>Race: {character.race}</p>
          //   <p>{character.description}</p>
          //   <img src={character.image} alt={character.name} />
          // </li>
        ))}
      </ul>
      <h1>Planetas</h1>
      <ul>
        {planet.map((planet) => (
          <CardPlanet key={planet.id} name={planet.name} image={planet.image} />
        ))}
      </ul>
    </>
  );
};
