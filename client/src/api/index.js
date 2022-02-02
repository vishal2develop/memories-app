import axios from "axios";

// For dev
// const API = axios.create({ baseURL: "http://localhost:5000" });

// For Live
const API = axios.create({ baseURL: "https://memkoz.herokuapp.com" });

API.interceptors.request.use((req) => {
  // send authorization header to backend -
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;
});

// const url = "https://memkoz.herokuapp.com/posts";

export const fetchPosts = () => API.get("/posts");

export const createPost = (newPost) => API.post("/posts", newPost);
export const updatePost = (id, updatedPost) =>
  API.patch(`/posts/${id}`, updatedPost);

export const deletePost = (id) => API.delete(`/posts/${id}`);

export const likePost = (id) => API.patch(`/posts/${id}/likePost`);

// Auth APIs
export const signIn = (formData) => API.post("/user/signin", formData);
export const signUp = (formData) => API.post("/user/signup", formData);
