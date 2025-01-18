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
  console.log("data", data);

  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
};

// Función para agregar un nuevo registro
export const addItem = (item) => {
  const currentData = getData();
  const updatedData = {
    ...currentData,
    characters: [...currentData.characters, item],
  };
  saveData(updatedData);
  return updatedData;
};

// Función para eliminar un registro por ID
export const deleteItem = (id) => {
  const currentData = getData();
  const updatedData = {
    ...currentData,
    characters: currentData.characters.filter((item) => item.id !== id),
  };
  saveData(updatedData);
  return updatedData;
};

// Función para actualizar un registro existente
export const updateItem = (updatedItem) => {
  const currentData = getData();
  const updatedCharacters = currentData.characters.map((character) =>
    character.id === updatedItem.id ? updatedItem : character
  );
  const updatedData = { ...currentData, characters: updatedCharacters };
  saveData(updatedData);
  return updatedData;
};
