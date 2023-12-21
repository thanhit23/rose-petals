import { useState } from 'react';

type UseLocalStorageReturnType<T> = [T, (newValue: T) => void, () => void];

const useLocalStorage = <T>(key: string, initialValue: T): UseLocalStorageReturnType<T> => {
  const storedValue = localStorage.getItem(key);
  const initial: T = storedValue ? JSON.parse(storedValue) : initialValue;

  const [value, setValue] = useState<T>(initial);

  const updateValue = (newValue: T) => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  const removeValue = () => {
    localStorage.removeItem(key);
    setValue(initialValue);
  };

  return [value, updateValue, removeValue];
};

export default useLocalStorage;
