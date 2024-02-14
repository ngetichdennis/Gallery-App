import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import {useEffect,useState} from "react"
import SearchBar from "./SearchBar";
import SignUp from "./SignUp";
import GalleryCollection from "./GalleryCollection";
import AddForm from "./AddForm";
import NavBar from "./NavBar";
import Home from "./Home";

function App(){
    ///gallery contains the images
    const [gallery,setGallery] = useState([]);
    const [images,setImages]= useState([]);
    //handle adding new images to the state
    function handleAddImages(images){
        //new images declaration
        const imagesAdded={...images}
        //adding new state to the existing state
        setImages([...images,imagesAdded]);
    }
    
    useEffect(() => {
        fetch(" http://localhost:3000/Gallery")
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            setGallery(data)
        });
        
    },[])

    return(
        <Router>
        <div>
            <h1>PixelHive</h1>
            <NavBar gallery={gallery}/>
            <Routes>
               <Route exact path="/" element={<Home/>}/>
            {/* <Route path="/search" element={<SearchBar/>}/> */}
            <Route path="/signup" element={ <SignUp />}/>
            <Route path='/form' element={<AddForm onAddImage ={handleAddImages} />}/>
            <Route path="/gallery" element={[<SearchBar />, <GalleryCollection gallery={gallery} />]} />
            </Routes>
        </div>
        </Router>

    )


}
export default App;