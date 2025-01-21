import { useState, useEffect, useRef } from 'react';
import { getData, addCharacter } from '../../utils/localStorageUtils';
import { Input } from '../../components/ui/Input/Input';
import { ButtonCustom } from '../../components/ui/Button/Button';
import { ToastCustom } from '../../components/ui/Toast/Toast';

export const CreateHeroe = () => {
  const initialData = getData();
  const [heroe, setHeroe] = useState({
    id: initialData.characters.length + 1,
    name: '',
    ki: '',
    maxKi: '',
    race: '',
    gender: '',
    description: '',
    image: '',
    affiliation: '',
    deletedAt: null,
    originPlanet: {
      name: '',
      description: '',
      image: ''
    },
    transformations: []
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
      [name]: value
    });
  };

  const handlePlanetChange = (e) => {
    const selectedPlanet = planets.find(planet => planet.name === e.target.value);
    setHeroe({
      ...heroe,
      originPlanet: selectedPlanet
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
      severity: 'success',
      summary: 'Success!',
      detail: 'Hero created successfully',
      life: 3000
    });
  }
  
  return (
    <div className="container-create-heroe">
      <h2>Crear Héroe</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <Input name="name" type="text" placeholder="Name" value={heroe.name} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor='ki'>Ki:</label>
          <Input name="ki" type="text" placeholder="Ki" value={heroe.ki} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor='maxKi'>Max Ki:</label>
          <Input name="maxKi" type="text" placeholder="Max Ki" value={heroe.maxKi} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor='race'>Race:</label>
          <Input name="race" type="text" placeholder="Race" value={heroe.race} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor='gender'>Gender:</label>
          <Input name="gender" type="text" placeholder="Gender" value={heroe.gender} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor='description'>Description:</label>
          <textarea name="description" value={heroe.description} onChange={handleChange}></textarea>
        </div>
        <div>
          <label htmlFor='affiliation'>Affiliation:</label>
          <Input name="affiliation" type="text" placeholder="Affiliation" value={heroe.affiliation} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor='originPlanet'>Origin Planet:</label>
          <select name="originPlanet.name" value={heroe.originPlanet.name} onChange={handlePlanetChange}>
            <option value="">Selecciona un planeta</option>
            {planets.map(planet => (
              <option key={planet.name} value={planet.name}>{planet.name}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor='originPlanetDescription'>Origin Planet Description:</label>
          <textarea name="originPlanet.description" value={heroe.originPlanet.description} readOnly></textarea>
        </div>
        <div>
          <label htmlFor='originPlanetImage'>Origin Planet Image:</label>
          <Input name="originPlanet.image" type="text" placeholder="Origin Planet Image" value={heroe.originPlanet.image} onChange={handleChange} />
        </div>
        <ToastCustom ref={toastRef} position='top-right' />
        <ButtonCustom type="submit" label="Submit" />
      </form>
    </div>
  );
};