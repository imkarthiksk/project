import { Link, useNavigate } from "react-router-dom"

function Navbar() {

  const navigate = useNavigate()

  const handleLogout = () => {

    localStorage.removeItem("token")
    localStorage.removeItem("userId")

    navigate("/login")

  }

  return (

    <div className="bg-blue-600 text-white p-4 flex justify-between items-center">

      <h1 className="text-xl font-bold">SkillSwap</h1>

      <div className="flex items-center space-x-4">

        <Link to="/">Home</Link>
        <Link to="/search">Search</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/connections">Requests</Link>
        <button
          onClick={handleLogout}
          className="bg-red-500 px-3 py-1 rounded hover:bg-red-600"
        >
          Logout
        </button>

      </div>

    </div>

  )
}

export default Navbar