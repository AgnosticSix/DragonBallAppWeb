import { useState, useEffect, useRef } from "react";
import {
  getData,
  updateCharacter,
  deleteCharacter,
} from "../../utils/localStorageUtils";
import { Input } from "../../components/ui/Input/Input";
import { ButtonCustom } from "../../components/ui/Button/Button";
import { ToastCustom } from "../../components/ui/Toast/Toast";
import { Label } from "../../components/ui/Label/Label";
import { TextArea } from "../../components/ui/TextArea/TextArea";
import { DropdownCustom } from "../../components/ui/Dropdown/Dropdown";

export const UpdateHeroe = () => {
  const initialData = getData();
  const [selectedHeroe, setSelectedHeroe] = useState(null);
  const [heroe, setHeroe] = useState({
    id: "",
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

  const handleHeroeChange = (e) => {
    const selectedHeroe = initialData.characters.find(
      (character) => character.id === parseInt(e.target.value)
    );
    setSelectedHeroe(selectedHeroe);
    setHeroe(selectedHeroe);
  };

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

    updateCharacter(heroe);

    showToastUpdated();
  };

  const toastRefUpdate = useRef(null);

  const showToastUpdated = () => {
    toastRefUpdate.current.show({
      severity: "success",
      summary: "Success!",
      detail: "Hero updated successfully",
      life: 3000,
    });
  };

  const handleDelete = () => {
    deleteCharacter(heroe.id);

    showToastDeleted();
  };

  const toastRefDelete = useRef(null);

  const showToastDeleted = () => {
    toastRefDelete.current.show({
      severity: "success",
      summary: "Success!",
      detail: "Hero deleted successfully",
      life: 3000,
    });
  };

  return (
    <div>
      <h2>Update Heroe</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <Label htmlFor="heroe" text="Select a Heroe: ">
            <DropdownCustom
              value={heroe.id}
              options={heroe?.map((character) => ({
                name: character.name,
                value: character.id,
              }))}
              optionLabel="name"
              placeholder="Select a Heroe"
              onChange={handleHeroeChange}
            />
          </Label>
        </div>
        {selectedHeroe && (
          <>
            <div>
              <Label htmlFor="name" text="Name: ">
                <Input
                  id="name"
                  name="name"
                  value={heroe.name}
                  onChange={handleChange}
                />
              </Label>
            </div>
            <div>
              <Label htmlFor="ki" text="Ki: ">
                <Input
                  id="ki"
                  name="ki"
                  value={heroe.ki}
                  onChange={handleChange}
                />
              </Label>
            </div>
            <div>
              <Label htmlFor="maxKi" text="Max Ki: ">
                <Input
                  id="maxKi"
                  name="maxKi"
                  value={heroe.maxKi}
                  onChange={handleChange}
                />
              </Label>
            </div>
            <div>
              <Label htmlFor="race" text="Race: ">
                <Input
                  id="race"
                  name="race"
                  value={heroe.race}
                  onChange={handleChange}
                />
              </Label>
            </div>
            <div>
              <Label htmlFor="gender" text="Gender: ">
                <Input
                  id="gender"
                  name="gender"
                  value={heroe.gender}
                  onChange={handleChange}
                />
              </Label>
            </div>
            <div>
              <Label htmlFor="description" text="Description: ">
                <TextArea
                  name="description"
                  isReadOnly={false}
                  value={heroe.description}
                  onChange={handleChange}
                  rows={5}
                  cols={30}
                />
              </Label>
            </div>
            <div>
              <Label htmlFor="afiiliation" text="Afiliation: ">
                <Input
                  id="affiliation"
                  name="affiliation"
                  value={heroe.affiliation}
                  onChange={handleChange}
                />
              </Label>
            </div>
            <div>
              <Label htmlFor="originPlanet" text="Origin Planet: ">
                <DropdownCustom
                  value={heroe.originPlanet.name}
                  options={planets.map((planet) => ({
                    name: planet.name,
                    value: planet.name,
                  }))}
                  optionLabel="name"
                  placeholder="Select a Planet"
                  onChange={handlePlanetChange}
                />
              </Label>
            </div>
            <div>
              <Label htmlFor="originPlanetDescription" text="Planet Description: ">
                <TextArea
                  name="originPlanet.description"
                  isReadOnly={true}
                  value={heroe.originPlanet.description}
                  onChange={handlePlanetChange}
                  rows={5}
                  cols={30}
                />
              </Label>
            </div>            
            <button type="submit">Actualizar Héroe</button>
            <button type="button" onClick={handleDelete}>
              Eliminar Héroe
            </button>
          </>
        )}
      </form>
    </div>
  );
};
