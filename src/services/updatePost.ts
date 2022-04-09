import IPosts from "../interfaces/IPosts";

export function updatePost(post: IPosts, id: number | undefined) {
  const URL = `https://dev.codeleap.co.uk/careers/${id}/`;
  const requestOptions = {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(post),
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
