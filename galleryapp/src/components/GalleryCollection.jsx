import React,{useEffect,useState} from "react";

function GalleryCollection({gallery}) {
    const[category, setCategory] = useState([]);
    const[snaps, setSnaps] = useState([]);
    const [filteredGallery, setFilteredGallery] = useState([]);

    //// map through gallery to get the categories and imgae
    useEffect(() => {
            gallery.map((pic) => {
            return (
                setCategory(pic.categories),
                setSnaps(pic.images) 
            )
        });
    },[gallery])
    
    ///// onClick,filter to only have images that meet the condition,update the state;
    function handleClick({snaps,cat}) {
        const filt = snaps.filter((p) => {
           return p.category === cat.name
        });
        setFilteredGallery(filt);
    }
    
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
            <div className="all-images">
            {filteredGallery.map((gal) => {
                return <div key={gal.id} className="category-image">
                    <img src={gal.image} alt="image"/>
                    <h5>{gal.name}</h5>
                    <p>{gal.description}</p>
                    <p>Date added: {gal.date_added}</p>
                </div>
            })}
            </div>
        </div>
    );
}

export default GalleryCollection;

