export function favIndex(favorites, location) {
  return favorites.findIndex((loc) => loc.name === location.name
    && loc.country === location.country
    && loc.region === location.region);
}

export function browser_supports_webp() {
  const canvas = document.createElement('canvas');

  let result = false;

  if (!!(canvas.getContext && canvas.getContext('2d')))
  {
    // was able or not to get WebP representation
    result = canvas.toDataURL('image/webp').indexOf('data:image/webp') == 0;
  }

  canvas.remove();

  return result;
}
