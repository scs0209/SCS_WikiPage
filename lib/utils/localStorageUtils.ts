import { Item } from "../interface";

export function saveToLocalStorage(items: Item[]) {
  localStorage.setItem("items", JSON.stringify(items));
}

export function loadFromLocalStorage() {
  const savedItems = localStorage.getItem("items");
  if (savedItems) {
    return JSON.parse(savedItems);
  }
  return null;
}
