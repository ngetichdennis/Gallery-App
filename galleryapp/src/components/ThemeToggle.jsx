import React from 'react';
import { useColorMode, Switch, Button } from '@chakra-ui/react';

const ThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  // Toggle color mode when the button is clicked
  const handleToggleMode = () => {
    toggleColorMode(); 
  };

  return (
    <div>
    
      <Switch
        colorScheme="teal"
        isChecked={colorMode === 'dark'}
        onChange={toggleColorMode}
      />
      {/* Button to toggle light mode specifically */}
      <Button onClick={handleToggleMode} ml={3}>
        {colorMode === 'dark' ? 'Light' : 'Dark'} Mode
      </Button>
    </div>
  );
};

export default ThemeToggle;



