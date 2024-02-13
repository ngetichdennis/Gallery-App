import React,{useEffect,useState} from "react"
import SearchBar from "./SearchBar";
import GalleryCollection from "./GalleryCollection";

function App(){
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
        <div>
            <h1>Gallery App</h1>
            <SearchBar/>
            <GalleryCollection gallery={gallery}/>
        </div>

    )


}
export default App;