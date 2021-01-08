import { favIndex } from '../Helpers/helpers';
export function getFavoritesFromStore() {
  if (!localStorage.getItem('favorites')) {
    return [];
  }

  return JSON.parse(localStorage.getItem('favorites'));
}

export function storeToFavorites(location) {
  const favorites = getFavoritesFromStore();

  favorites.push(location);

  localStorage.setItem('favorites', JSON.stringify(favorites));
}

export function removeFromFavorites(location) {
  let favorites = getFavoritesFromStore();
  const ind = favIndex(favorites, location);

  if (ind >= 0) {
    favorites = [...favorites.slice(0, ind), ...favorites.slice(ind + 1)];
  }

  localStorage.setItem('favorites', JSON.stringify(favorites));
}