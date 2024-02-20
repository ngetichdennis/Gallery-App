import React, { useEffect, useState } from "react";
// import AddForm from "./AddForm";
import SearchBar from "./SearchBar";
import {Heading,Box,Text,Card,Stack,CardBody,CardFooter,ButtonGroup,Button,Divider,Image} from  "@chakra-ui/react"
import InitialFocus from  './InitialFocus'


function GalleryCollection({ gallery }) {
  const [category, setCategory] = useState([]);
  const [snaps, setSnaps] = useState([]);
  const [filteredGallery, setFilteredGallery] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);



  useEffect(() => {
    const categories = [];
    const images = [];
  
    gallery.forEach((pic) => {
      // Check if pic.categories is defined and iterable
      if (pic.categories && typeof pic.categories[Symbol.iterator] === 'function') {
        categories.push(...pic.categories);
      }
  
      // Check if pic.images is defined and iterable
      if (pic.images && typeof pic.images[Symbol.iterator] === 'function') {
        images.push(...pic.images);
      }
    });
  
    setCategory(categories);
    setSnaps(images);
  }, [gallery]);
  // Filter images based on the selected category
  function handleClick(cat) {
    const filt = snaps.filter((p) => p.category === cat.name);
    setFilteredGallery(filt);
  }
  function handleSearch(searchTerm) {
    const filt = snaps.filter(
      (p) =>
        p.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredGallery(filt);
    setSelectedCategory(null);
  }


  // Add new image to the gallery
  function handleAddImage(newImage) {
    const addedImage={...newImage}
    setSnaps([...snaps,addedImage]);
  }

  return (
    <div>
          <div className="search-bar">
          <InitialFocus onAddImage={handleAddImage}/>
        <SearchBar onSearch={handleSearch} />
      </div>
      <Box marginTop="2.5rem">
      <Heading className="category-header" marginBottom="1.5rem">Categories</Heading>
      {/* <Box width={{ base: "100vw", sm: "20vw", md: "90vw",lg:"100vw",xl:"100vw"}} height={{ base: "100vw", sm: "20vw", md: "90vw",lg:"100vw",xl:"100vw"}}> */}
      <div className="display">
        {category.map((cat) => {
          return (
            <div key={cat.id} onClick={() => handleClick(cat)} className={`image-container ${ selectedCategory && selectedCategory.id === cat.id
              ? "selected"
              : ""
          }`}>
              <img src={cat.image} alt="categories" />
              <Text fontSize="xl">{cat.name}</Text>
            </div>
          );
        })}
      </div>
      {/* </Box> */}
      <Box marginTop="3.5rem">
      <div className="all-images">
        {filteredGallery.map((gal) => {
          return (
            <Card maxW='sm'key={gal.id} >
  <CardBody >
    <Image
      src={gal.image}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
      width={"400px"}
      height={"400px"}
      objectFit={"cover"}
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{gal.name}</Heading>
      <Text>
        {gal.description}
      </Text>
      <Text color='blue.600' fontSize='2xl'>
      Date Added:{gal.date_added}
      </Text>
    </Stack>
  </CardBody>
</Card>

          );
        })}
      </div>
      </Box>
      </Box>
      
     
    </div>
  );
}

export default GalleryCollection;