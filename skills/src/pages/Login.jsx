import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { loginUser } from "../services/api"

function Login() {

  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = async () => {

    try {

      const res = await loginUser({
        email,
        password
      })

      localStorage.setItem("token", res.data.token)
      localStorage.setItem("userId", res.data.user._id)
      // redirect to home
      navigate("/")

    } catch (error) {

      alert("Login failed")

    }

  }

  return (

    <div className="flex items-center justify-center h-screen bg-gray-100">

      <div className="bg-white p-8 rounded shadow w-80">

        <h2 className="text-2xl mb-4">Login</h2>

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

        <button
          onClick={handleLogin}
          className="bg-blue-500 text-white w-full p-2"
        >
          Login
        </button>

        <p className="mt-3 text-sm">
          Don't have account?
          <Link to="/register" className="text-blue-500"> Register</Link>
        </p>

      </div>

    </div>
  )
}

export default Login