import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { getMessages, sendMessage } from "../services/api"

function Chat() {

  const { id } = useParams()

  const senderId = localStorage.getItem("userId")

  const [messages, setMessages] = useState([])
  const [text, setText] = useState("")

  // Load previous messages
  useEffect(() => {

    const fetchMessages = async () => {

      try {

        const res = await getMessages(senderId, id)

        setMessages(res.data)

      } catch (error) {
        console.log(error)
      }

    }

    fetchMessages()

  }, [id])

  // Send message
  const handleSend = async () => {

    if (!text) return

    try {

      const data = {
        senderId,
        receiverId: id,
        text
      }

      const res = await sendMessage(data)

      setMessages([...messages, res.data])
      setText("")

    } catch (error) {
      console.log(error)
    }

  }

  return (

    <div className="p-5">

      <h1 className="text-xl font-bold">Chat</h1>

      {/* Chat Box */}
      <div className="border h-96 mt-4 p-3 overflow-y-auto">

        {messages.map((msg, index)=>(
          
          <div
            key={index}
            className={`mb-2 ${
              msg.senderId === senderId
              ? "text-right"
              : "text-left"
            }`}
          >

            <span className="bg-gray-200 px-3 py-1 rounded inline-block">
              {msg.text}
            </span>

          </div>

        ))}

      </div>

      {/* Message Input */}
      <div className="flex gap-2 mt-3">

        <input
          className="border w-full p-2"
          placeholder="Type message..."
          value={text}
          onChange={(e)=>setText(e.target.value)}
        />

        <button
          onClick={handleSend}
          className="bg-blue-500 text-white px-4 rounded"
        >
          Send
        </button>

      </div>

    </div>

  )
}

export default Chat