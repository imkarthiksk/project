import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { registerUser } from "../services/api"

function Register() {

  const navigate = useNavigate()

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [skillsTeach, setSkillsTeach] = useState("")
  const [skillsLearn, setSkillsLearn] = useState("")

  const handleRegister = async () => {

    try {

      const data = {
        name,
        email,
        password,
        skillsTeach: skillsTeach
          .split(",")
          .map(skill => skill.trim()),

        skillsLearn: skillsLearn
          .split(",")
          .map(skill => skill.trim())
      }

      await registerUser(data)

      alert("Registration successful")

      navigate("/login")

    } catch (error) {

      console.log(error)
      alert("Registration failed")

    }

  }

  return (

    <div className="flex items-center justify-center h-screen bg-gray-100">

      <div className="bg-white p-8 rounded shadow w-96">

        <h2 className="text-2xl mb-4">Register</h2>

        <input
          type="text"
          placeholder="Name"
          className="border w-full p-2 mb-3"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          className="border w-full p-2 mb-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="border w-full p-2 mb-3"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <input
          type="text"
          placeholder="Skills you teach (React,Node)"
          className="border w-full p-2 mb-3"
          value={skillsTeach}
          onChange={(e) => setSkillsTeach(e.target.value)}
        />

        <input
          type="text"
          placeholder="Skills you want to learn (Python,Java)"
          className="border w-full p-2 mb-3"
          value={skillsLearn}
          onChange={(e) => setSkillsLearn(e.target.value)}
        />

        <button
          onClick={handleRegister}
          className="bg-blue-500 text-white w-full p-2"
        >
          Register
        </button>

      </div>

    </div>
  )
}

export default Register