import { NavLink } from "react-router-dom";

function NavBar(){
  
  return (
    <nav className="NavBar">
    <NavLink exact to="/" activeClassName="active" className="Nav">Home</NavLink>
    <NavLink to="/signup" activeClassName="active" className="Nav">Sign up</NavLink>
    <NavLink to="/gallery" activeClassName="active" className="Nav">Gallery</NavLink>
    {/* <NavLink to="/search" activeClassName="active" className="Nav">Search</NavLink> */}
    <NavLink to="/form" activeClassName="active" className="Nav">Add Image</NavLink>
</nav>
  );
};

export default NavBar;