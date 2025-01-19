import { useState, useEffect } from 'react';
import { getData, updateCharacter, deleteCharacter } from '../../utils/localStorageUtils';

export const UpdateHeroe = () => {
  const initialData = getData();
  const [selectedHeroe, setSelectedHeroe] = useState(null);
  const [heroe, setHeroe] = useState({
    id: '',
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
    setPlanets(initialData.planets);
  }, []);

  const handleHeroeChange = (e) => {
    const selectedHeroe = initialData.characters.find(character => character.id === parseInt(e.target.value));
    setSelectedHeroe(selectedHeroe);
    setHeroe(selectedHeroe);
  };

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

    // Actualizar el héroe en el almacenamiento local
    const updatedData = updateCharacter(heroe);

    // Mostrar el JSON actualizado en la consola
    console.log('JSON actualizado (almacenamiento local):', updatedData);
    alert('Héroe actualizado exitosamente. Revisa la consola para ver el JSON actualizado.');
  };

  const handleDelete = () => {
    // Eliminar el héroe del almacenamiento local
    const updatedData = deleteCharacter(heroe.id);

    // Mostrar el JSON actualizado en la consola
    console.log('JSON actualizado (almacenamiento local):', updatedData);
    alert('Héroe eliminado exitosamente. Revisa la consola para ver el JSON actualizado.');
  };

  return (
    <div>
      <h2>Actualizar Héroe</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Selecciona un Héroe:</label>
          <select onChange={handleHeroeChange}>
            <option value="">Selecciona un héroe</option>
            {initialData.characters.map(character => (
              <option key={character.id} value={character.id}>{character.name}</option>
            ))}
          </select>
        </div>
        {selectedHeroe && (
          <>
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
            <button type="submit">Actualizar Héroe</button>
            <button type="button" onClick={handleDelete}>Eliminar Héroe</button>
          </>
        )}
      </form>
    </div>
  );
};