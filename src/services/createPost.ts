import IPosts from "../interfaces/IPosts";

export function createPost(post: IPosts) {
  const URL = "https://dev.codeleap.co.uk/careers/";
  const requestOptions = {
    method: "POST",
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
