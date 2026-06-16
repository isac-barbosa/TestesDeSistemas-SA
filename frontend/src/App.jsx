import { BrowserRouter, Routes, Route } from "react-router-dom"

import Login from "./pages/Login.jsx"
import Home from "./pages/Home.jsx"
import Register from "./pages/Register.jsx"

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Login />} />

        <Route path="/cadastro" element={<Register />} />

        <Route path="/home" element={<Home/>} />

      </Routes>

    </BrowserRouter>

  )

}

export default App