import {useState} from "react";
function AddForm(){
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
            onsubmit({...formData})
            //reseting the form
            setFormData("")
        }
     
    return(

    )
}
    export default AddForm;
