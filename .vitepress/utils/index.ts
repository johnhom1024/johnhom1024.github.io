export function decode(url: string) {
  try {
    return decodeURIComponent('' + url);
  } catch (error) {
    console.error(`Error decoding "${url}". Using orignial value`);
  }

  return '' + url;
}