import { useFetch } from "../../components/hooks/useFetch";
import { Loader } from "../../components/ui/Loader/Loader";
import { Card } from "../../components/ui/Card/Card";
import { CarouselCustom } from "../../components/ui/Carousel/Carrousel";

export const HomeApp = () => {
  const { data, isLoading } = useFetch();

  const responsiveOptions = [
    {
      breakpoint: "2500px",
      numVisible: 4,
      numScroll: 1,
    },
    {
      breakpoint: "1920px",
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: "1400px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "1199px",
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: "767px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "575px",
      numVisible: 1,
      numScroll: 1,
    },
  ];

  const itemTemplateCharacters = (data) => {
    return (
      <Card
        name={data?.characters?.name}
        ki={data?.characters?.ki}
        race={data?.characters?.race}
        image={data?.characters?.image}
        description={data?.characters?.description}
        isCharacter={true}
      />
    );
  };

  const itemTemplatePlanets = (data) => {
    return (
      <Card
        key={data?.planets?.id}
        name={data?.planets?.name}
        image={data?.planets?.image}
        description={data?.planets?.description}
        isCharacter={false}
      />
    );
  };

  return isLoading ? (
    <Loader />
  ) : (
    <div className="home">
      <h1>Characters</h1>
      <CarouselCustom
        items={
          data?.characters.map((character) => ({ characters: character })) || []
        }
        itemTemplate={itemTemplateCharacters}
        responsiveOptions={responsiveOptions}
        circular={true}
        autoplayInterval={3000}
      />
      <h1>Planets</h1>
      <CarouselCustom
        items={data?.planets.map((planet) => ({ planets: planet })) || []}
        itemTemplate={itemTemplatePlanets}
        responsiveOptions={responsiveOptions}
        circular={true}
        autoplayInterval={3000}
      />
    </div>
  );
};
