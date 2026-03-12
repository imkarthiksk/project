import { BrowserRouter, Routes, Route } from "react-router-dom"

import Login from "./pages/Login"
import Register from "./pages/Register"
import Home from "./pages/Home"
import Search from "./pages/Search"
import Profile from "./pages/Profile"
import Chat from "./pages/Chat"
import Connections from "./pages/Connections"


function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/chat/:id" element={<Chat />} />
        <Route path="/connections" element={<Connections />} />
        <Route path="/chat/:id" element={<Chat />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App