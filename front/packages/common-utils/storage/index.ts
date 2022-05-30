export const setValue = <T>(key: string, value: T, local?: boolean) => {
  const stringify: string = JSON.stringify(value);
  if (local) {
    localStorage.setItem(key, stringify);
  } else {
    sessionStorage.setItem(key, stringify);
  }
};

export const getValue = <T>(key: string) => {
  const value = sessionStorage.getItem(key) ?? localStorage.getItem(key);
  if (value) {
    return JSON.parse(value) as T;
  }
  return undefined;
};

export const removeValue = (key: string, local?: boolean) => {
  if (local) {
    localStorage.removeItem(key);
  } else {
    sessionStorage.removeItem(key);
  }
};
