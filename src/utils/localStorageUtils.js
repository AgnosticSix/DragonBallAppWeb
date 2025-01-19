const STORAGE_KEY = "myAppData";

// Función para obtener datos simulados
export const getData = () => {
  const data = localStorage.getItem(STORAGE_KEY);
  return JSON.parse(data);
};

// Función para guardar datos simulados
export const saveData = (newData) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(newData));
};

// Función para inicializar datos en el almacenamiento local
export const initializeData = (data) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
};

// Función para agregar un nuevo registro de personaje
export const addCharacter = (character) => {
  const currentData = getData();
  const updatedData = {
    ...currentData,
    characters: [...currentData.characters, character],
  };
  saveData(updatedData);
  return updatedData;
};

// Función para agregar un nuevo registro de planeta
export const addPlanet = (planet) => {
  const currentData = getData();
  const updatedData = {
    ...currentData,
    planets: [...currentData.planets, planet],
  };
  saveData(updatedData);
  return updatedData;
};

// Función para eliminar un registro de personaje por ID
export const deleteCharacter = (id) => {
  const currentData = getData();
  const updatedData = {
    ...currentData,
    characters: currentData.characters.filter((item) => item.id !== id),
  };
  saveData(updatedData);
  return updatedData;
};

// Función para eliminar un registro de planeta por ID
export const deletePlanet = (id) => {
  const currentData = getData();
  const updatedData = {
    ...currentData,
    planets: currentData.planets.filter((item) => item.id !== id),
  };
  saveData(updatedData);
  return updatedData;
};

// Función para actualizar un registro de personaje existente
export const updateCharacter = (updatedCharacter) => {
  const currentData = getData();
  const updatedCharacters = currentData.characters.map((character) =>
    character.id === updatedCharacter.id ? updatedCharacter : character
  );
  const updatedData = { ...currentData, characters: updatedCharacters };
  saveData(updatedData);
  return updatedData;
};

// Función para actualizar un registro de planeta existente
export const updatePlanet = (updatedPlanet) => {
  const currentData = getData();
  const updatedPlanets = currentData.planets.map((planet) =>
    planet.id === updatedPlanet.id ? updatedPlanet : planet
  );
  const updatedData = { ...currentData, planets: updatedPlanets };
  saveData(updatedData);
  return updatedData;
};