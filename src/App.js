import "./App.scss"
import { Routes, Route } from "react-router-dom"
import { Layout } from "./components/Layout"
import { Home } from "./components/Home"

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route path="/" element={<Home/>}/>
    </Routes>
  )
}
