import {useState} from "react";
function AddForm({onAddImage}){
    //initial form data object with empty fields and current date as 'date_added' field
    const [formData,setFormData]= useState({name:"",image:"",description:"",date_added:Date.now()}); 
    //handle input changes
    function handleChange(e){
        const {name,value}=e.target
        setFormData({...formData, [name]: value}) 
    }
        //Handling form submission
        function handleSubmit(event){
            //preventing  default page refresh on submit
            event.preventDefault()
            //passing the form data to parent component for further processing
            onAddImage({...formData})
            //reseting the form
            setFormData("")
        }
     
    return(
        <>
        <h2>Add a New Image</h2>
        <form  onSubmit={handleSubmit}>
            <input className="add-form"
            name="name"
            type="text"
            placeholder="Name of the image"
            value={formData.name}
            onChange={handleChange}
            />
            <input className="add-form"
            name="image"
            type="url"
            placeholder="Image URL"
            value={formData.image}
            onChange={handleChange}
            />
            <input className="add-form"
            name="description"
            type="text"
            placeholder="Image Description"
            value={formData.description}
            onChange={handleChange}
            />
            <input className="add-form"
            name="date_added"
            type="date"
            value={formData.date_added}
            onChange={handleChange}
            />
            <button className="add-form" type="submit">Add Image</button>
        </form>
        </>



    )
}
    export default AddForm;
