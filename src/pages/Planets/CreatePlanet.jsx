import { useState, useRef } from "react";
import { getData, addPlanet } from "../../utils/localStorageUtils";
import { Input } from "../../components/ui/Input/Input";
import { TextArea } from "../../components/ui/TextArea/TextArea";
import { ButtonCustom } from "../../components/ui/Button/Button";
import { CheckboxCustom } from "../../components/ui/Checkbox/Checkbox";
import { Label } from "../../components/ui/Label/Label";
import { ToastCustom } from "../../components/ui/Toast/Toast";

export const CreatePlanet = () => {
  const initialData = getData();
  const [planet, setPlanet] = useState({
    id: initialData.planets.length + 1,
    name: "",
    description: "",
    image: "",
    isDestroyed: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPlanet({
      ...planet,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Agregar el nuevo planeta al almacenamiento local
    addPlanet({
      id: planet.id,
      name: planet.name,
      description: planet.description,
      image: "https://picsum.photos/seed/picsum/200/300",
      isDestroyed: planet.isDestroyed,
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
    <div>
      <h2>Crear Planeta</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <Label htmlFor="namePlanet" text="Name: ">
            <Input
              id="namePlanet"
              type="text"
              name="namePlanet"
              value={planet.name}
              onChange={handleChange}
            />
          </Label>
        </div>
        <div>
          <Label htmlFor="description" text="Description: ">
            <TextArea
              name="description"
              value={planet.description}
              onChange={handleChange}
              isReadOnly={false}
              rows={5}
              cols={30}
            />
          </Label>
        </div>
        <div>
          <Label htmlFor="isDestroyed" text="Is it destroyed?: ">
            <CheckboxCustom
              isChecked={planet.isDestroyed}
              onChange={(e) =>
                setPlanet({ ...planet, isDestroyed: e.target.checked })
              }
            />
          </Label>
        </div>
        <ToastCustom ref={toastRef} position="top-right" />
        <ButtonCustom type="submit" label="Submit" />
      </form>
    </div>
  );
};
