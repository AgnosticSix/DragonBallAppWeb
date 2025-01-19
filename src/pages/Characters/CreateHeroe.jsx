import { useState, useEffect } from 'react';
import { getData, addCharacter } from '../../utils/localStorageUtils';

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
    console.log(heroe);

    // Agregar el nuevo héroe al almacenamiento local
    const updatedData = addCharacter({
      id: heroe.id,
      name: heroe.name,
      ki: heroe.ki,
      maxKi: heroe.maxKi,
      race: heroe.race,
      gender: heroe.gender,
      description: heroe.description,
      image: heroe.image,
      affiliation: heroe.affiliation,
      deletedAt: heroe.deletedAt,
      originPlanet: {
        name: heroe.originPlanet.name,
        description: heroe.originPlanet.description,
        image: heroe.originPlanet.image
      },
      transformations: heroe.transformations
    });

    // Mostrar el JSON actualizado en la consola
    console.log('JSON actualizado (almacenamiento local):', updatedData);
    alert('Héroe creado exitosamente. Revisa la consola para ver el JSON actualizado.');
  };
  
//TODO Modificar por componentes funcionales y setear la imagen por un placeholder
  return (
    <div>
      <h2>Crear Héroe</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input type="text" name="name" value={heroe.name} onChange={handleChange} />
        </div>
        <div>
          <label>Ki:</label>
          <input type="text" name="ki" value={heroe.ki} onChange={handleChange} />
        </div>
        <div>
          <label>Max Ki:</label>
          <input type="text" name="maxKi" value={heroe.maxKi} onChange={handleChange} />
        </div>
        <div>
          <label>Raza:</label>
          <input type="text" name="race" value={heroe.race} onChange={handleChange} />
        </div>
        <div>
          <label>Género:</label>
          <input type="text" name="gender" value={heroe.gender} onChange={handleChange} />
        </div>
        <div>
          <label>Descripción:</label>
          <textarea name="description" value={heroe.description} onChange={handleChange}></textarea>
        </div>
        <div>
          <label>Imagen:</label>
          <input type="text" name="image" value={heroe.image} onChange={handleChange} />
        </div>
        <div>
          <label>Afiliación:</label>
          <input type="text" name="affiliation" value={heroe.affiliation} onChange={handleChange} />
        </div>
        <div>
          <label>Planeta de Origen:</label>
          <select name="originPlanet.name" value={heroe.originPlanet.name} onChange={handlePlanetChange}>
            <option value="">Selecciona un planeta</option>
            {planets.map(planet => (
              <option key={planet.name} value={planet.name}>{planet.name}</option>
            ))}
          </select>
        </div>
        <div>
          <label>Descripción del Planeta:</label>
          <textarea name="originPlanet.description" value={heroe.originPlanet.description} readOnly></textarea>
        </div>
        <div>
          <label>Imagen del Planeta:</label>
          <input type="text" name="originPlanet.image" value={heroe.originPlanet.image} readOnly />
        </div>
        <button type="submit">Crear Héroe</button>
      </form>
    </div>
  );
};