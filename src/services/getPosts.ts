export function getPosts() {
  const URL = "https://dev.codeleap.co.uk/careers/";
  return fetch(URL)
    .then((response) => response.json())
    .then((data) => data.results);
}
