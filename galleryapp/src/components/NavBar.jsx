import { NavLink } from "react-router-dom";
import {Button,Box} from "@chakra-ui/react"

function NavBar(){
  
  return (
  
    <nav className="NavBar">
      <Box display='flex'  marginLeft={{base:'200%', sm:'1%', md:'0%', lg:'-20%', xl:"1%"}} width={{ base: "85px", sm: "90px", md: "95px",lg:"100px",xl:"100px"}} height={{ base: "10px", sm: "15px", md: "20px",lg:"40px",xl:"40px"}}>
    <NavLink  to="/" activeclassname="active" className="Nav" ><Button bg={"#F08080"} >Home</Button></NavLink>
    <NavLink to="/signup" activeclassname="active" className="Nav"><Button bg={"#F08080"}>Sign up</Button></NavLink>
    <NavLink to="/gallery" activeclassname="active" className="Nav"><Button bg={"#F08080"}>Gallery</Button></NavLink>
    </Box>
</nav>
  );
};

export default NavBar;