import React,{useEffect,useState} from "react";

function GalleryCollection({gallery}) {
    const[category, setCategory] = useState([]);
    const[snaps, setSnaps] = useState([]);
    

    //// map through gallery to get the categories and imgae
    useEffect(() => {
            gallery.map((pic) => {
            return (
                setCategory(pic.categories),
                setSnaps(pic.images) 
            )
        });
    },[gallery])
    
    ////add onClick
    
    return (
        /////// loop through categories and images
        <div>
            <h2 className="category-header">Categories</h2>
            <div className="display">
            {category.map((cat) => {
                return <div key={cat.id} onClick={() => handleClick({snaps,cat})} className="image-container" >
                    <img src={cat.image} alt="categories"/>
                    <h4>{cat.name}</h4>
                </div>
            })}
            </div>
        </div>
    );
}

export default GalleryCollection;

