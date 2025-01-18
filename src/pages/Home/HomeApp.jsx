import { CardCharacter } from "../../components/ui/CardCharacter";
import { CardPlanet } from "../../components/ui/CardPlanet";
//import ReactCardFlip from "react-card-flip";
import { useFetch } from "../../components/hooks/useFetch";
import { Loader } from "../../components/ui/Loader/Loader";

export const HomeApp = () => {
  const { data, isLoading } = useFetch("/src/api/data.json");
  //const [planet, setPlanet] = useFetch("/src/api/data.json");
  
  return (
    isLoading ? 
    <Loader /> :
    <div className="home">
      <h1>Characters</h1>
      <ul>
          {data?.characters?.map((character) => (
            <CardCharacter
              key={character.id}
              name={character.name}
              ki={character.ki}
              race={character.race}
              image={character.image}
            />
          ))}
      </ul>
      <h1>Planets</h1>
      <ul>
        {data?.planets?.map((planet) => (
          <CardPlanet key={planet.id} name={planet.name} image={planet.image} />
        ))}
      </ul>
    </div>
  );
};
