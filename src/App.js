import "./App.scss"
import { Routes, Route } from "react-router-dom"
import { Layout } from "./components/Layout"
import { Home } from "./components/Home"
import { About } from "./components/About"

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
    </Routes>
  )
}
