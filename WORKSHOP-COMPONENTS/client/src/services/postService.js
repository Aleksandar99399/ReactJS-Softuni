import api from "./api";

export const getAll = () => {
  fetch(api.posts)
    .then((res) => res.json())
    .catch((err) => console.log("Handle error: " + err));
};
