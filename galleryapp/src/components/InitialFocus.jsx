
import React,{ useState } from "react"
import { v4 as generateUniqueId } from 'uuid';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  FormControl,
  FormLabel,
  Input
} from '@chakra-ui/react'


function InitialFocus({onAddImage}) {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)
   // initial form data object with empty fields and current date as 'date_added' field
 
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    description: "",
    date_added: new Date(),
    category:"",
  });
  //handle input changes
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }
  

  //Handling form submission
  function handleSubmit(event) {
    //preventing  default page refresh on submit
    event.preventDefault();
    const id =  generateUniqueId();
   
    console.log('Generated ID:', id);

     //passing the form data to parent component for further processing
     onAddImage({ id, ...formData, date_added: formData.date_added.toISOString().slice(0, 10) });
    
    //passing the form data to parent component for further processing
    
    setFormData({
      name: "",
      image: "",
      description: "",
      date_added: new Date(),
      category:"",
    });
    //posting data to the server
    fetch("http://localhost:3000/Gallery", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, ...formData, date_added: formData.date_added.toISOString().slice(0, 10) }),
    })
      .then((response) => response.json())
      .then((data) => {

        console.log("Image added successfully", data);
      })
           .catch((error) => {
   console.error("Error posting image", error);
      });
  }



  return (
    < >
<<<<<<< HEAD
      <Button onClick={onOpen} marginLeft={"91%"} marginTop={"-7.1rem"} bg={"#F08080"} >ADD IMAGE</Button>
=======
      <Button onClick={onOpen} marginLeft={{base:'240%', sm:'150%', md:'125%', lg:'92%', xl:"92%"}} marginTop={"-7.1rem"} bg={"#F08080"} width={{ base: "110px", sm: "110px", md: "110px",lg:"100px",xl:"100px"}} height={{ base: "40px", sm: "40px", md: "40px",lg:"40px",xl:"40px"}}>ADD IMAGE</Button>
>>>>>>> af1a3a8 (modified db.json)
      {/* <Button ml={4} ref={finalRef}>
        I'll receive focus on close
      </Button> */}

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        // onSubmit={handleSubmit}
      >
        <ModalOverlay />
        <ModalContent >
          <ModalHeader >Add New Image</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl  >
              <FormLabel>Name</FormLabel>
              <Input ref={initialRef} placeholder='Image Name' name="name" type="text" value={formData.name} onChange={handleChange} className="add-form"/>
            </FormControl>
            <FormControl>
              <FormLabel>Image </FormLabel>
              <Input ref={initialRef} placeholder='Enter Image Url' name="image" type="url" value={formData.image} onChange={handleChange} className="add-form"/>
            </FormControl>
            <FormControl>
              <FormLabel>Description</FormLabel>
              <Input ref={initialRef} placeholder='Enter Description' name="description" type="text"  value={formData.description} onChange={handleChange} className="add-form"/>
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Date Added</FormLabel>
              <Input placeholder='date_added' name="date_added" type="date" value={formData.date_added.toISOString().slice(0, 10)} onChange={(e) => setFormData({ ...formData, date_added: new Date(e.target.value) })} className="add-form"/>
            </FormControl>
            <FormControl>
              <FormLabel>Category</FormLabel>
              <Input ref={initialRef} placeholder='Enter Category' name="category" type="text"  value={formData.category} onChange={handleChange} className="add-form" />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} type="submit" onClick={handleSubmit} >
              Add
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
export default InitialFocus