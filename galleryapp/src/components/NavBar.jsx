import { NavLink } from "react-router-dom";

function NavBar(){
  
  return (
    <nav className="NavBar">
    <NavLink  to="/" activeclassname="active" className="Nav">Home</NavLink>
    <NavLink to="/signup" activeclassname="active" className="Nav">Sign up</NavLink>
    <NavLink to="/gallery" activeclassname="active" className="Nav">Gallery</NavLink>
    {/* <NavLink to="/search" activeClassName="active" className="Nav">Search</NavLink> */}
    {/* <NavLink to="/form" activeClassName="active" className="Nav">Add Image</NavLink> */}
</nav>
  );
};

export default NavBar;