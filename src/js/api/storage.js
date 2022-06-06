export const addToStorage = (key, value) => {
    try {
      const serializedState = JSON.stringify(value);
      localStorage.setItem(key, serializedState);
    } catch (error) {
      console.error("Set state error: ", error.message);
    }
  };
  
  export const getFromStorage = key => {
    try {
      const serializedState = localStorage.getItem(key);
      return serializedState === null ? undefined : JSON.parse(serializedState);
    } catch (error) {
      console.error("Get state error: ", error.message);
    }
  };
  
  export const removeFromStorage = key => {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error("Remove state error: ", error.message);
    }
  };
 