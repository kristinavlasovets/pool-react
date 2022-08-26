import { Sidebar } from "../Sidebar"
import { Outlet } from "../Outlet"
import "./index.scss"
import { Home } from "../Home"

export const Layout = () => {
  return (
    <div className="App">
      <Sidebar />
      <div className="page">
        <Home/>
        <Outlet />
      </div>
    </div>
  )
}
