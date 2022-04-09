export function deletePost(id: number) {
  const URL = `https://dev.codeleap.co.uk/careers/${id}/`;
  const requestOptions = {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
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
