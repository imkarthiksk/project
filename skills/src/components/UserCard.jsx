import { Link } from "react-router-dom"
import { sendConnection } from "../services/api"

function UserCard({ user }) {

  const currentUserId = localStorage.getItem("userId")

  const handleConnect = async () => {

    try {

      const data = {
        senderId: currentUserId,
        receiverId: user._id
      }

      await sendConnection(data)

      alert("Connection request sent")

    } catch (error) {

      console.log(error)
      alert("Failed to send request")

    }

  }

  return (

    <div className="bg-white shadow-md rounded-xl p-6 w-80 border">

      {/* Profile Image */}
      <div className="flex justify-center">
        <img
          src={user.profilePic || "https://via.placeholder.com/100"}
          alt="profile"
          className="w-24 h-24 rounded-full"
        />
      </div>

      {/* User Name */}
      <h2 className="text-center text-xl font-bold mt-3">
        {user.name}
      </h2>

      {/* Skills Teach */}
      <div className="mt-4">
        <p className="font-semibold text-green-600">Skills I Teach</p>

        <div className="flex flex-wrap gap-2 mt-1">

          {user.skillsTeach?.map((skill, index) => (
            <span
              key={index}
              className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm"
            >
              {skill}
            </span>
          ))}

        </div>
      </div>

      {/* Skills Learn */}
      <div className="mt-4">
        <p className="font-semibold text-blue-600">Skills I Want To Learn</p>

        <div className="flex flex-wrap gap-2 mt-1">

          {user.skillsLearn?.map((skill, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-sm"
            >
              {skill}
            </span>
          ))}

        </div>
      </div>

      {/* Connect Button (Hide if same user) */}
      {currentUserId !== user._id && (

        <button
          onClick={handleConnect}
          className="mt-5 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Connect
        </button>

      )}

      {/* Chat Button */}
      {currentUserId !== user._id && (

        <Link
          to={`/chat/${user._id}`}
          className="block mt-3 w-full bg-green-500 text-white py-2 text-center rounded hover:bg-green-600"
        >
          Chat
        </Link>

      )}

    </div>

  )
}

export default UserCard