const { default: axios } = require("axios");

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";

const requests = {
  get: (url, params) => axios.get(url, { params }).then((resp) => resp.data)
};

const Users = {
  getUsers: () => requests.get("/users"),
  getUserDetails: (id) => requests.get(`/users/${id}`)
};

const Albums = {
  getAlbums: () => requests.get("/albums"),
  getAlbumDetails: (id) => requests.get(`/albums/${id}`)
};

const Posts = {
  getPosts: () => requests.get("/posts"),
  getPostDetails: (id) => requests.get(`/posts/${id}`)
};

const api = {
  Users,
  Albums,
  Posts
};
export default api;
