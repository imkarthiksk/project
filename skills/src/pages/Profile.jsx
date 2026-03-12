import Navbar from "../components/Navbar"
import UserCard from "../components/UserCard"
import { useEffect, useState } from "react"
import { getUserProfile, getConnections } from "../services/api"

function Profile() {

  const [user, setUser] = useState(null)
  const [connections, setConnections] = useState([])

  const userId = localStorage.getItem("userId")

  useEffect(() => {

    const fetchData = async () => {

      try {

        const profileRes = await getUserProfile(userId)
        setUser(profileRes.data)

        const connRes = await getConnections(userId)

        const connectedUsers = connRes.data.map((conn) => {

          let otherUser

          if (conn.senderId._id === userId) {
            otherUser = conn.receiverId
          } else {
            otherUser = conn.senderId
          }

          return otherUser
        })

        setConnections(connectedUsers)

      } catch (error) {

        console.log(error)

      }

    }

    fetchData()

  }, [])

  if (!user) return <p className="text-center mt-10">Loading...</p>

  return (

    <div>

      <Navbar />

      {/* Profile */}
      <div className="flex justify-center mt-10">
        <UserCard user={user} />
      </div>

      {/* Connections */}
      <div className="mt-10 px-10">

        <h2 className="text-2xl font-bold mb-4">
          My Connections
        </h2>

        <div className="mt-10 px-10">

          <h2 className="text-2xl font-bold mb-4">
            My Connections
          </h2>

          <div className="grid grid-cols-3 gap-6">

            {connections.length === 0 ? (
              <p>No connections yet</p>
            ) : (
              connections.map((user) => (
                <UserCard key={user._id} user={user} />
              ))
            )}

          </div>

        </div>

      </div>

    </div>

  )
}

export default Profile