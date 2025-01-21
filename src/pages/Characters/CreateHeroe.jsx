import { useState, useEffect, useRef } from "react";
import { getData, addCharacter } from "../../utils/localStorageUtils";
import { Input } from "../../components/ui/Input/Input";
import { ButtonCustom } from "../../components/ui/Button/Button";
import { ToastCustom } from "../../components/ui/Toast/Toast";
import { Label } from "../../components/ui/Label/Label";
import { TextArea } from "../../components/ui/TextArea/TextArea";
import { DropdownCustom } from "../../components/ui/Dropdown/Dropdown";

export const CreateHeroe = () => {
  const initialData = getData();
  const [heroe, setHeroe] = useState({
    id: initialData.characters.length + 1,
    name: "",
    ki: "",
    maxKi: "",
    race: "",
    gender: "",
    description: "",
    image: "",
    affiliation: "",
    deletedAt: null,
    originPlanet: {
      name: "",
      description: "",
      image: "",
    },
    transformations: [],
  });

  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    setPlanets(initialData.planets);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setHeroe({
      ...heroe,
      [name]: value,
    });
  };

  const handlePlanetChange = (e) => {
    const selectedPlanet = planets.find(
      (planet) => planet.name === e.target.value
    );
    setHeroe({
      ...heroe,
      originPlanet: selectedPlanet,
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();

    addCharacter({
      id: heroe.id,
      name: heroe.name,
      ki: heroe.ki,
      maxKi: heroe.maxKi,
      race: heroe.race,
      gender: heroe.gender,
      description: heroe.description,
      image: "https://picsum.photos/seed/picsum/200/300",
      affiliation: heroe.affiliation,
      deletedAt: heroe.deletedAt,
      originPlanet: {
        name: heroe.originPlanet.name,
        description: heroe.originPlanet.description,
        image: heroe.originPlanet.image,
      },
      transformations: heroe.transformations,
    });

    showToast();
  };

  const toastRef = useRef(null);

  const showToast = () => {
    toastRef.current.show({
      severity: "success",
      summary: "Success!",
      detail: "Hero created successfully",
      life: 3000,
    });
  };

  return (
    <div className="containerform">
      <h2>Crear Héroe</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <Label htmlFor="name" text="Name: ">
            <Input
              id="name"
              name="name"
              type="text"
              value={heroe.name}
              onChange={handleChange}
            />
          </Label>
        </div>
        <div className="form-group">
          <Label htmlFor="ki" text="Ki: ">
            <Input
              id="ki"
              name="ki"
              type="text"
              value={heroe.ki}
              onChange={handleChange}
            />
          </Label>
        </div>
        <div className="form-group">
          <Label htmlFor="maxKi" text="Max Ki: ">
            <Input
              id="maxKi"
              name="maxKi"
              type="text"
              value={heroe.maxKi}
              onChange={handleChange}
            />
          </Label>
        </div>
        <div className="form-group">
          <Label htmlFor="race" text="Race: ">
            <Input
              id="race"
              name="race"
              type="text"
              value={heroe.race}
              onChange={handleChange}
            />
          </Label>
        </div>
        <div className="form-group">
          <Label htmlFor="gender" text="Gender: ">
            <Input
              id="gender"
              name="gender"
              type="text"
              value={heroe.gender}
              onChange={handleChange}
            />
          </Label>
        </div>
        <div className="form-group">
          <Label htmlFor="description" text="Description: ">
            <TextArea
              name="description"
              isReadOnly={false}
              value={heroe.description}
              rows={5}
              cols={30}
              onChange={handleChange}
              />
          </Label>
        </div>
        <div className="form-group">
          <Label htmlFor="affiliation" text="Affiliation: ">
            <Input
              id="affiliation"
              name="affiliation"
              type="text"
              value={heroe.affiliation}
              onChange={handleChange}
            />
          </Label>
        </div>
        <div className="form-group">
          <Label htmlFor="originPlanet" text="Origin Planet: ">
            <DropdownCustom
              value={heroe.originPlanet.name}
              options={
                planets?.map((planet) => ({
                  name: planet.name,
                  value: planet.name,
                })) || []
              }
              optionLabel="name"
              placeholder="Select a planet"
              onChange={handlePlanetChange}
            />
          </Label>
        </div>
        <div className="form-group">
          <Label htmlFor="originPlanetDescription" text="Origin Planet Description: ">
            <TextArea
              name="originPlanetDescription"
              value={heroe.originPlanet.description}
              onChange={handlePlanetChange}
              isReadOnly={true}
              rows={5}
              cols={30}
            />
          </Label>
        </div>
        <div className="form-group">
          <Label htmlFor="originPlanetImage" text="Origin Planet Image: ">
            <Input
              id="originPlanetImage"
              name="originPlanetImage"
              type="text"
              value={heroe.originPlanet.image}
              onChange={handlePlanetChange}
              isReadOnly={true}
            />
          </Label>
        </div>
        <ToastCustom ref={toastRef} position="top-right" />
        <ButtonCustom type="submit" label="Submit" />
      </form>
    </div>
  );
};
