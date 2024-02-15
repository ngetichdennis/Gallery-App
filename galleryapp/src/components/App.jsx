import { useEffect, useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import SearchBar from "./SearchBar";
import SignUp from "./SignUp";
import GalleryCollection from "./GalleryCollection";
import AddForm from "./AddForm";
import ThemeToggle from "./ThemeToggle";

function App() {
  ///gallery contains the images
  const [gallery, setGallery] = useState([]);
  const [images, setImages] = useState([]);
  //handle adding new images to the state
  function handleAddImages(images) {
    //new images declaration
    const imagesAdded = { ...images };
    //adding new state to the existing state
    setImages([...images, imagesAdded]);
  }

  useEffect(() => {
    fetch(" http://localhost:3000/Gallery")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setGallery(data);
      });
  }, []);

  return (
    <ChakraProvider>
      <div>
        <h1>Gallery App</h1>
        <ThemeToggle />
        <SignUp />
        <SearchBar />
        <GalleryCollection gallery={gallery} />
        <AddForm onAddImage={handleAddImages} />
      </div>
    </ChakraProvider>
  );
}
export default App;
