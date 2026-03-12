import { useEffect, useState } from "react"
import Navbar from "../components/Navbar"
import { getConnections, acceptConnection } from "../services/api"

function Connections() {

  const [requests, setRequests] = useState([])

  const userId = localStorage.getItem("userId")

  useEffect(() => {

    const fetchRequests = async () => {

      const res = await getConnections(userId)

      const pending = res.data.filter(
        (c) => c.receiverId._id === userId && c.status === "pending"
      )

      setRequests(pending)

    }

    fetchRequests()

  }, [])

  const handleAccept = async (id) => {

    await acceptConnection(id)

    setRequests(requests.filter((r) => r._id !== id))

  }

  return (

    <div>

      <Navbar />

      <div className="p-6">

        <h2 className="text-xl mb-4">Connection Requests</h2>

        {requests.map((req) => (

          <div
            key={req._id}
            className="border p-4 mb-3 flex justify-between"
          >

            <p>{req.senderId.name} wants to connect</p>

            <button
              onClick={() => handleAccept(req._id)}
              className="bg-green-500 text-white px-3 py-1 rounded"
            >
              Accept
            </button>

          </div>

        ))}

      </div>

    </div>

  )
}

export default Connections