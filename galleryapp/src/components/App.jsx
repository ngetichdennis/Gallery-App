import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import {useEffect,useState} from "react"
// import SearchBar from "./SearchBar";
import SignUp from "./SignUp";
import GalleryCollection from "./GalleryCollection";
// import AddForm from "./AddForm";
import NavBar from "./NavBar";
import Home from "./Home";
import ThemeToggle from "./ThemeToggle";


function App(){
    ///gallery contains the images
    const [gallery,setGallery] = useState([]);
    
    useEffect(() => {
        fetch(" http://localhost:3000/Gallery")
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            setGallery(data)
        });
        
    },[])

    return(
        <ChakraProvider>
        <Router>
        <div>
            <h1 className="AppTitle"><strong>Pixel Hive</strong></h1>
            <ThemeToggle />
            <NavBar gallery={gallery}/>
            <Routes>
               <Route exact path="/" element={<Home key={"home"}/>}/>
            {/* <Route path="/search" element={<SearchBar/>}/> */}
            <Route path="/signup" element={ <SignUp key={"signup"} />}/>
            {/* <Route path='/form' element={<AddForm onAddImage ={handleAddImages} />}/> */}
            <Route path="/gallery" element={ <GalleryCollection gallery={gallery} key={"gallery"}/>} />
            </Routes>
        </div>
        </Router>
        </ChakraProvider>

    )


}
export default App;