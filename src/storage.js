export const GetItem = (key, defaultValue) => {
  let value = localStorage.getItem(key);
  if (value) {
    value = JSON.parse(value);
    return value;
  }
  return defaultValue;
};

export const SetItem = (key, value) => {
  value = JSON.stringify(value);
  localStorage.setItem(key, value);
  return value;
};

export const RemoveItem = (key) => {
  localStorage.removeItem(key);
};
// Session storage
export const GetSessionItem = (key, defaultValue) => {
  let value = sessionStorage.getItem(key);
  if (value) {
    value = JSON.parse(value);
    return value;
  }
  return defaultValue;
};

export const SetSessionItem = (key, value) => {
  value = JSON.stringify(value);
  sessionStorage.setItem(key, value);
  return value;
};

export const RemoveSessionItem = (key) => {
  sessionStorage.removeItem(key);
};

export const clearAll = () => {
  localStorage.clear();
  window.location.reload();
};
