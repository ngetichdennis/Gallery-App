import React from 'react';
import { useColorMode, Switch } from '@chakra-ui/react';

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
        marginLeft={1230}
      />
    </div>
  );
};

export default ThemeToggle;


