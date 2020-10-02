export const setItem = (key: string, data: any) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const removeItem = (key: string) => {
  localStorage.removeItem(key);
};

export const getItem = (key: string) => {
  try {
    return JSON.parse(localStorage.getItem(key) as string);
  } catch (e) {
    return null;
  }
};
