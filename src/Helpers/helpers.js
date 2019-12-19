export function favIndex(favorites, location) {
  return favorites.findIndex((loc) => loc.name === location.name
    && loc.country === location.country
    && loc.region === location.region);
}
