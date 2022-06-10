import "./NavBar.css"
import { NavLink } from "react-router-dom"

export default function NavBar({user}) {
  return (
    <div className="flex-container">
      <NavLink className="flex-item" to="/movies">
        <button className="btn fourth">Movies</button>
      </NavLink>
      <h1>Welcome {user}</h1>
      <NavLink className="flex-item" to="/actors">
        <button className="btn fourth">Actors</button>
      </NavLink>
    </div>
  )
}