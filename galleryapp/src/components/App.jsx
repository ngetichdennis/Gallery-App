import {} from "react"
import SearchBar from "./SearchBar";
import SignUp from "./SignUp";
import AddForm from  './AddForm';
function App(){
    const [images,setImages]= useState([]);
    //handle adding new images to the state
    function handleAddImages(images){
        //new images declaration
        const imagesAdded={...images}
        //adding new state to the existing state
        setImages([...images,imagesAdded]);
    }
    return(
        <div>
            <h1>Gallery App</h1>
            <SearchBar/>
            <SignUp />
            <AddForm onAddImage ={handleAddImages} />

            


        </div>

    )


}
export default App;