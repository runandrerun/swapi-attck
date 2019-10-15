export const fetchCharacters = async () => {
  const response = await fetch('/api/v1/characters');
  const body = await response.json();
  console.log("Inside fetch", body)
  if (response.status !== 200) {
    throw Error(body.message);
  }
  return body;
};

export const fetchCharacter = async (url) => {
  const response = await fetch(url);
  const body = await response.json();

  if (response.status !== 200) {
    throw Error(body.message);
  }
  return body;
};

export const fetchMovie = async (url) => {
  const response = await fetch(url);
  const body = await response.json();

  if (response.status !== 200) {
    throw Error(body.message);
  }
  return body;
};
