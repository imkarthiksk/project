import axios from "axios"

// Backend URL
const API = axios.create({
  baseURL: "http://localhost:5000/api"
})

// Add token automatically if exists
API.interceptors.request.use((req) => {

  const token = localStorage.getItem("token")

  if (token) {
    req.headers.Authorization = `Bearer ${token}`
  }

  return req
})

/* ---------------- AUTH ---------------- */

// Register
export const registerUser = (data) =>
  API.post("/auth/register", data)

// Login
export const loginUser = (data) =>
  API.post("/auth/login", data)


/* ---------------- USERS ---------------- */

// Get all users
export const getUsers = () =>
  API.get("/users")

// Search users by skill
export const searchUsers = (skill) =>
  API.get(`/users/search?skill=${skill}`)

// Get user profile
export const getUserProfile = (id) =>
  API.get(`/users/${id}`)


/* ---------------- CONNECTION ---------------- */

// Send connection request
export const sendConnection = (data) =>
  API.post("/connect/send", data)

// Accept connection
export const acceptConnection = (id) =>
  API.put(`/connect/accept/${id}`)

// Get connections
export const getConnections = (userId) =>
  API.get(`/connect/${userId}`)


/* ---------------- CHAT ---------------- */

// Send message
export const sendMessage = (data) =>
  API.post("/messages/send", data)

// Get chat messages
export const getMessages = (senderId, receiverId) =>
  API.get(`/messages?senderId=${senderId}&receiverId=${receiverId}`)