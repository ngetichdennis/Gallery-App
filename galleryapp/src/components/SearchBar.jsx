import React, { useState } from "react";
import {Input,Button} from '@chakra-ui/react';

//function to handle searchBar
function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
//function to handle submit of the search input
  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input width="94%"
        type="text"
        placeholder="Search for images..."
        value={searchTerm}
        onChange={handleChange}
      />
      <Button bg="#96CDFF" type="submit">Search</Button>
    </form>
  );
}

export default SearchBar;