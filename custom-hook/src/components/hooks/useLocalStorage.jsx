import { useState } from "react";
const useLocalStorage = (key) => {
  const localValue = localStorage.getItem(key);
  const [value, setValue] = useState(localValue);

  const updateValue = (newValue) => {
    localStorage.setItem(key, newValue);
    setValue(newValue);
  };
  return [updateValue, value];
};

export default useLocalStorage;
