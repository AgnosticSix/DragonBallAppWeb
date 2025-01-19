import { useState, useEffect } from 'react';
import { getData, addPlanet } from '../../utils/localStorageUtils';

export const CreatePlanet = () => {
  const initialData = getData();
  const [planet, setPlanet] = useState({
    id: initialData.planets.length + 1,
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

    // Agregar el nuevo planeta al almacenamiento local
    const updatedData = addPlanet({
      id: planet.id,
      name: planet.name,
      description: planet.description,
      image: planet.image,
      isDestroyed: planet.isDestroyed,
      deletedAt: planet.deletedAt,
      characters: planet.characters
    });

    // Mostrar el JSON actualizado en la consola
    console.log('JSON actualizado (almacenamiento local):', updatedData);
    alert('Planeta creado exitosamente. Revisa la consola para ver el JSON actualizado.');
  };

  return (
    <div>
      <h2>Crear Planeta</h2>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Crear Planeta</button>
      </form>
    </div>
  );
};