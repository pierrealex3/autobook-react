import { NavLink } from "react-router-dom";

export default function TopShelf () {
    return (
        <nav>
        <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/mockuser">Mock User</NavLink>
            </li>
        </ul>
        </nav>

    );

};