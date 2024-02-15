import React from 'react';
import { useColorMode, Switch } from '@chakra-ui/react';

const ThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  // Toggle color mode when the button is clicked
  const handleToggleMode = () => {
    toggleColorMode(); 
  };

  return (
    <div className='Theme'>
    
      <Switch
        colorScheme="teal"
        isChecked={colorMode === 'dark'}
        onChange={toggleColorMode}
        marginLeft={1400}
      />
      {/* Button to toggle light mode specifically */}
      
    </div>
  );
};

export default ThemeToggle;