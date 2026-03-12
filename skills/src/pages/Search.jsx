import Navbar from "../components/Navbar"
import UserCard from "../components/UserCard"
import { useState } from "react"
import { searchUsers } from "../services/api"

function Search() {

  const [skill, setSkill] = useState("")
  const [users, setUsers] = useState([])

  const handleSearch = async () => {

    try {

      const res = await searchUsers(skill)

      setUsers(res.data)

    } catch (error) {

      console.log(error)

    }

  }

  return (

    <div>

      <Navbar />

      <div className="p-6">

        <div className="flex gap-3 mb-5">

          <input
            placeholder="Search skill..."
            className="border p-2 w-full"
            value={skill}
            onChange={(e)=>setSkill(e.target.value)}
          />

          <button
            onClick={handleSearch}
            className="bg-blue-500 text-white px-4 rounded"
          >
            Search
          </button>

        </div>

        <div className="grid grid-cols-3 gap-5">

          {users.length > 0 ? (

            users.map((user)=>(
              <UserCard key={user._id} user={user}/>
            ))

          ) : (

            <p>No users found</p>

          )}

        </div>

      </div>

    </div>
  )
}

export default Search