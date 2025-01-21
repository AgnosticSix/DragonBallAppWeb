import { useState, useEffect, useRef } from 'react';
import { getData, updatePlanet, deletePlanet } from '../../utils/localStorageUtils';
import { Input } from "../../components/ui/Input/Input";
import { ButtonCustom } from "../../components/ui/Button/Button";
import { ToastCustom } from "../../components/ui/Toast/Toast";
import { Label } from "../../components/ui/Label/Label";
import { TextArea } from "../../components/ui/TextArea/TextArea";
import { DropdownCustom } from "../../components/ui/Dropdown/Dropdown";
import { CheckboxCustom } from '../../components/ui/Checkbox/Checkbox';

export const UpdatePlanet = () => {
  const initialData = getData();
  const [selectedPlanet, setSelectedPlanet] = useState(null);
  const [planet, setPlanet] = useState({
    id: '',
    name: '',
    description: '',
    image: '',
    isDestroyed: false,
    deletedAt: null,
    characters: []
  });

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    setCharacters(initialData.characters);
  }, []);

  const handlePlanetChange = (e) => {
    const selectedPlanet = initialData.planets.find(planet => planet.id === parseInt(e.target.value));
    setSelectedPlanet(selectedPlanet);
    setPlanet(selectedPlanet);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPlanet({
      ...planet,
      [name]: value
    });
  };

  const handleCharacterChange = (e) => {
    const selectedCharacters = Array.from(e.target.selectedOptions, option => option.value);
    setPlanet({
      ...planet,
      characters: selectedCharacters.map(id => characters.find(character => character.id === parseInt(id)))
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    updatePlanet(planet);

    showToast();
  };

  const toast = useRef(null);

  const showToast = () => {
    toast.current.show({
      severity: 'success',
      summary: 'Success!',
      detail: 'Planet updated successfully',
      life: 3000
    });
  };

  const handleDelete = () => {
    deletePlanet(planet.id);

    alert('Planeta eliminado exitosamente. Revisa la consola para ver el JSON actualizado.');
  };

  return (
    <div className="containerform">
      <h2>Update Planet</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <Label htmlFor="planet" text="Select a Planet: ">
            <DropdownCustom value={selectedPlanet?.name} options={initialData?.planets?.map((planet) => ({
              name: planet.name,
              value: planet.id
            }))} optionLabel="name" placeholder="Select a planet" onChange={handlePlanetChange} />
          </Label>
        </div>
        {selectedPlanet && (
          <>
            <div className="form-group">
              <Label htmlFor="name" text="Name: ">
                <Input id="name" name="name" value={planet.name} onChange={handleChange} />
              </Label>
            </div>
            <div className="form-group">
              <Label htmlFor="description" text="Description: ">
                <TextArea name="description" value={planet.description} onChange={handleChange} />
              </Label>
            </div>
            <div className="form-group">
              <Label htmlFor="isDestroyed" text="Is it destroyed?: ">
                <CheckboxCustom checked={planet.isDestroyed} onChange={(e) => setPlanet({ ...planet, isDestroyed: e.target.checked })} />
              </Label>
            </div>
            <ToastCustom ref={toast} />
            <ButtonCustom type="submit" label="Update Planet" onClick={handleSubmit} text="Update Planet" />
          </>
        )}
      </form>
    </div>
  );
};