import express from "express"
import { getUsers, searchUsers, getUserProfile } from "../controllers/userController.js"

const router = express.Router()

// Get all users
router.get("/", getUsers)

// Search users by skill
router.get("/search", searchUsers)

// Get single user profile
router.get("/:id", getUserProfile)

export default router