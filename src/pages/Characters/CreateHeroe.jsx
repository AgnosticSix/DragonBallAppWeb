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
    // Extraer los planetas únicos del almacenamiento local
    setPlanets(initialData.planets);
  }, []); // Add an empty dependency array to ensure this runs only once

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

    // Agregar el nuevo héroe al almacenamiento local
    // addCharacter({
    //   id: heroe.id,
    //   name: heroe.name,
    //   ki: heroe.ki,
    //   maxKi: heroe.maxKi,
    //   race: heroe.race,
    //   gender: heroe.gender,
    //   description: heroe.description,
    //   image: 'https://picsum.photos/seed/picsum/200/300',
    //   affiliation: heroe.affiliation,
    //   deletedAt: heroe.deletedAt,
    //   originPlanet: {
    //     name: heroe.originPlanet.name,
    //     description: heroe.originPlanet.description,
    //     image: heroe.originPlanet.image
    //   },
    //   transformations: heroe.transformations
    // });

    showToast();
    //alert('Héroe creado exitosamente. Revisa la consola para ver el JSON actualizado.');
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
    <div className="container-create-heroe">
      <h2>Crear Héroe</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <Label htmlFor="name" name="Name: ">
            <Input id="name" name="name" type="text" onChange={handleChange} />
          </Label>
        </div>
        <div>
          <Label htmlFor="ki" name="Ki: ">
            <Input id="ki" name="ki" type="text" onChange={handleChange} />
          </Label>
        </div>
        <div>
          <Label htmlFor="maxKi" name="Max Ki: ">
            <Input
              id="maxKi"
              name="maxKi"
              type="text"
              onChange={handleChange}
            />
          </Label>
        </div>
        <div>
          <Label htmlFor="race" name="Race: ">
            <Input id="race" name="race" type="text" onChange={handleChange} />
          </Label>
        </div>
        <div>
          <Label htmlFor="gender" name="Gender: ">
            <Input
              id="gender"
              name="gender"
              type="text"
              onChange={handleChange}
            />
          </Label>
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <TextArea
            name="description"
            readOnly={false}
            rows={5}
            cols={30}
          ></TextArea>
        </div>
        <div>
          <Label htmlFor="affiliation" name="Affiliation: ">
            <Input
              id="affiliation"
              name="affiliation"
              type="text"
              onChange={handleChange}
            />
          </Label>
        </div>
        <div>
          <Label htmlFor="originPlanet" name="Origin Planet: ">
            <DropdownCustom
              value={heroe.originPlanet.name}
              options={planets.map((planet) => ({
                name: planet.name
              })) || []}
              optionLabel="name"
              placeholder="Select a planet"
              onChange={handlePlanetChange}
            />
          </Label>

          {/* <select
            name="originPlanet.name"
            value={heroe.originPlanet.name}
            onChange={handlePlanetChange}
          >
            <option value="">Selecciona un planeta</option>
            {planets.map((planet) => (
              <option key={planet.name} value={planet.name}>
                {planet.name}
              </option>
            ))}
          </select> */}
        </div>
        <div>
          <label htmlFor="originPlanetDescription">
            Origin Planet Description:
          </label>
          <TextArea
            name="originPlanet.description"
            value={heroe.originPlanet.description}
            onChange={handlePlanetChange}
            readOnly={true}
            rows={5}
            cols={30}
          ></TextArea>
        </div>
        <div>
          <Label htmlFor="originPlanetImage" name="Origin Planet Image: ">
            <Input
              id="originPlanetImage"
              name="originPlanetImage"
              type="text"
              value={heroe.originPlanet.image}
              onChange={handlePlanetChange}
            />
          </Label>
        </div>
        <ToastCustom ref={toastRef} position="top-right" />
        <ButtonCustom type="submit" label="Submit" />
      </form>
    </div>
  );
};
