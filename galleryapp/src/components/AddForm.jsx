import { useState } from "react";
function AddForm({ onAddImage }) {
  //initial form data object with empty fields and current date as 'date_added' field
  // const [addSnap,setSnap]=useState([])
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    description: "",
    date_added: new Date(),
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
     //passing the form data to parent component for further processing
     onAddImage({ ...formData, date_added: formData.date_added.toISOString().slice(0, 10) });
    
    //passing the form data to parent component for further processing
    // onAddImage({ ...formData });
    //reseting the form
    setFormData({
      name: "",
      image: "",
      description: "",
      date_added: new Date(),
    });
    //posting data to the server
    fetch("http://localhost:3000/Gallery/images", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...formData, date_added: formData.date_added.toISOString().slice(0, 10) }),
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
    <>
      <h2>Add a New Image</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          type="text"
          placeholder="Name of the image"
          value={formData.name}
          onChange={handleChange}
          className="add-form"
        />
        <input
          name="image"
          type="url"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleChange}
          className="add-form"
        />
        <input
          name="description"
          type="text"
          placeholder="Image Description"
          value={formData.description}
          onChange={handleChange}
          className="add-form"
        />
        <input
          name="date_added"
          type="date"
          value={formData.date_added.toISOString().slice(0, 10)}
          onChange={(e) => setFormData({ ...formData, date_added: new Date(e.target.value) })}
          className="add-form"
        />
        <button type="submit" className="add-form">
          Add Image
        </button>
      </form>
    </>
  );
}
export default AddForm;
