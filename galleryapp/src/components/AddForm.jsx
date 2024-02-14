import {useState} from "react";
function AddForm(){
    //initial form data object with empty fields and current date as 'date_added' field
    const [formData,setFormData]= useState({name:"",image:"",description:"",date_added:Date.now()});  
    return(

    )
}
    export default AddForm;
