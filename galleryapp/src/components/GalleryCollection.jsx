import React, { useEffect, useState } from "react";
import AddForm from "./AddForm";
import SearchBar from "./SearchBar";


function GalleryCollection({ gallery }) {
  const [category, setCategory] = useState([]);
  const [snaps, setSnaps] = useState([]);
  const [filteredGallery, setFilteredGallery] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);


  // Map through gallery to get the categories and images
  useEffect(() => {
    const categories = [];
    const images = [];

    gallery.forEach((pic) => {
      categories.push(...pic.categories);
      images.push(...pic.images);
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
        <SearchBar onSearch={handleSearch} />
      </div>
      <h2 className="category-header">Categories</h2>
      <div className="display">
        {category.map((cat) => {
          return (
            <div key={cat.id} onClick={() => handleClick(cat)} className={`image-container ${ selectedCategory && selectedCategory.id === cat.id
              ? "selected"
              : ""
          }`}>
              <img src={cat.image} alt="categories" />
              <h4>{cat.name}</h4>
            </div>
          );
        })}
      </div>
   
      <div className="all-images">
        {filteredGallery.map((gal) => {
          return (
            <div key={gal.id} className="category-image">
              <img src={gal.image} alt="image" />
              <h5>{gal.name}</h5>
              <p>{gal.description}</p>
              <p>Date added: {gal.date_added}</p>
            </div>
          );
        })}
      </div>
      <AddForm onAddImage={handleAddImage} />
    </div>
  );
}

export default GalleryCollection;