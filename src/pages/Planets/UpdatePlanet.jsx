import { useState, useEffect } from 'react';
import { getData, updatePlanet, deletePlanet } from '../../utils/localStorageUtils';

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
    console.log(planet);

    // Actualizar el planeta en el almacenamiento local
    const updatedData = updatePlanet(planet);

    // Mostrar el JSON actualizado en la consola
    console.log('JSON actualizado (almacenamiento local):', updatedData);
    alert('Planeta actualizado exitosamente. Revisa la consola para ver el JSON actualizado.');
  };

  const handleDelete = () => {
    // Eliminar el planeta del almacenamiento local
    const updatedData = deletePlanet(planet.id);

    // Mostrar el JSON actualizado en la consola
    console.log('JSON actualizado (almacenamiento local):', updatedData);
    alert('Planeta eliminado exitosamente. Revisa la consola para ver el JSON actualizado.');
  };

  return (
    <div>
      <h2>Actualizar Planeta</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Selecciona un Planeta:</label>
          <select onChange={handlePlanetChange}>
            <option value="">Selecciona un planeta</option>
            {initialData.planets.map(planet => (
              <option key={planet.id} value={planet.id}>{planet.name}</option>
            ))}
          </select>
        </div>
        {selectedPlanet && (
          <>
            <div>
              <label>Nombre:</label>
              <input type="text" name="name" value={planet.name} onChange={handleChange} />
            </div>
            <div>
              <label>Descripción:</label>
              <textarea name="description" value={planet.description} onChange={handleChange}></textarea>
            </div>
            <div>
              <label>Imagen:</label>
              <input type="text" name="image" value={planet.image} onChange={handleChange} />
            </div>
            <div>
              <label>¿Está destruido?:</label>
              <input type="checkbox" name="isDestroyed" checked={planet.isDestroyed} onChange={(e) => setPlanet({ ...planet, isDestroyed: e.target.checked })} />
            </div>
            <div>
              <label>Personajes:</label>
              <select multiple={true} value={planet.characters.map(character => character.id)} onChange={handleCharacterChange}>
                {characters.map(character => (
                  <option key={character.id} value={character.id}>{character.name}</option>
                ))}
              </select>
            </div>
            <button type="submit">Actualizar Planeta</button>
            <button type="button" onClick={handleDelete}>Eliminar Planeta</button>
          </>
        )}
      </form>
    </div>
  );
};