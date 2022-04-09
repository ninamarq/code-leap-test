export function deletePost(id: number | undefined) {
  const URL = `https://dev.codeleap.co.uk/careers/${id}/`;
  const requestOptions = {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id }),
  };
  fetch(URL, requestOptions)
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
