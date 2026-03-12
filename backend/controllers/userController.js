import User from "../models/User.js"

// Get All Users
export const getUsers = async (req, res) => {
  try {

    const users = await User.find()

    res.json(users)

  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

// Search Users By Skill
export const searchUsers = async (req, res) => {
  try {

    const { skill } = req.query

    const users = await User.find({
      skillsTeach: { $regex: skill, $options: "i" }
    })

    res.json(users)

  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

// Get User Profile
export const getUserProfile = async (req, res) => {
  try {

    const user = await User.findById(req.params.id)

    if (!user) {
      return res.status(404).json({ message: "User not found" })
    }

    res.json(user)

  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}