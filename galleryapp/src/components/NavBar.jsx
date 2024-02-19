import { NavLink } from "react-router-dom";
import {Button} from "@chakra-ui/react"

function NavBar(){
  
  return (
  
    <nav className="NavBar">
    <NavLink  to="/" activeclassname="active" className="Nav" ><Button bg={"#F08080"}>Home</Button></NavLink>
    <NavLink to="/signup" activeclassname="active" className="Nav"><Button bg={"#F08080"}>Sign up</Button></NavLink>
    <NavLink to="/gallery" activeclassname="active" className="Nav"><Button bg={"#F08080"}>Gallery</Button></NavLink>
</nav>
  );
};

export default NavBar;