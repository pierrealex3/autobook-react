import { NavLink } from "react-router-dom";

const TopShelf = () => {
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

export default TopShelf;