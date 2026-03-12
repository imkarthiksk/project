export const socketHandler = (io) => {

  io.on("connection", (socket) => {

    console.log("User connected:", socket.id)

    // join room
    socket.on("join_room", (roomId) => {
      socket.join(roomId)
    })

    // send message
    socket.on("send_message", (data) => {

      io.to(data.roomId).emit("receive_message", data)

    })

    // disconnect
    socket.on("disconnect", () => {
      console.log("User disconnected:", socket.id)
    })

  })

}