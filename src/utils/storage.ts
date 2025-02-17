export function addStorage(key: string, value: string) {
  localStorage.setItem(key, value);
}

export function deleteItem(key: string) {
  localStorage.removeItem(key);
}

export function getAllStorage() {
  const items = Object.keys(localStorage).map((key) => ({
    key,
    value: localStorage.getItem(key) || "",
  }));
  return items;
}
