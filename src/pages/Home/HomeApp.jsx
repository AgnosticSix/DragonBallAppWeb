import { useFetch } from "../../components/hooks/useFetch";
import { Loader } from "../../components/ui/Loader/Loader";
import { Card } from "../../components/ui/Card/Card";

export const HomeApp = () => {
  const { data, isLoading } = useFetch();

  return ( isLoading ? 
    <Loader /> 
    : 
    <div className="home">
      <h1>Characters</h1>
      <ul>
        {data?.characters?.map((character) => (
          <Card
            key={character.id}
            name={character.name}
            ki={character.ki}
            race={character.race}
            image={character.image}
            description={character.description}
            isCharacter={true}
          />
        ))}
      </ul>
      <h1>Planets</h1>
      <ul>
        {data?.planets?.map((planet) => (
          <Card
            key={planet.id}
            name={planet.name}
            image={planet.image}
            description={planet.description}
            isCharacter={false}
          />
        ))}
      </ul>
    </div>
  );
};
