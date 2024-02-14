// import useState, Formik & chakra-ui
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
}

