import React, { useState } from 'react'; 
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
} from '@chakra-ui/react';

// State to track sign in mode
const SignUp = () => {
  const [isSignIn, setIsSignIn] = useState(false); 

  // Initial values for form fields
  const initialValues = {
    username: '',
    email: '',
    password: ''
  };

  // Validation function
  const validate = (values) => {
    const errors = {};

    // Validation logic

    return errors;
  };

  // Handle sign up form submission
  const handleSignUp = (values, actions) => {
    // Sign up logic
    console.log('Signing up with:', values);
    actions.resetForm();
  };

  // Handle sign in form submission
  const handleSignIn = (values, actions) => {
    // Sign in logic
    console.log('Signing in with:', values);
    actions.resetForm();
  };

  // Return formik
  return (
    < Box maxW="400px" m="auto">
      <h2>{isSignIn ? 'Sign In' : 'Sign Up'}</h2>
      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={isSignIn ? handleSignIn : handleSignUp} 
      >
        {({ isSubmitting, errors, touched }) => (
          <Form>
            <FormControl id="username" mb={4} isInvalid={errors.username && touched.username}>
              <FormLabel>Username</FormLabel>
              <Input type="text" name="username" />
              <FormErrorMessage>{errors.username}</FormErrorMessage>
            </FormControl>
            <FormControl id="email" mb={4} isInvalid={errors.email && touched.email}>
              <FormLabel>Email</FormLabel>
              <Input type="email" name="email" />
              <FormErrorMessage>{errors.email}</FormErrorMessage>
            </FormControl>
            <FormControl id="password" mb={4} isInvalid={errors.password && touched.password}>
              <FormLabel>Password</FormLabel>
              <Input type="password" name="password" />
              <FormErrorMessage>{errors.password}</FormErrorMessage>
            </FormControl>
            <Button type="submit" isLoading={isSubmitting}>
              {isSignIn ? 'Sign In' : 'Sign Up'}
            </Button>
          </Form>
        )}
      </Formik>

      {/* Toggle between sign in and sign up mode */}
      <p onClick={() => setIsSignIn(!isSignIn)}>
        {isSignIn ? 'Don\'t have an account? Sign Up' : 'Already have an account? Sign In'}
      </p>
    </Box>
  );
};

export default SignUp;