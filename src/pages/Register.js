import { Formik } from 'formik';
// import { toast } from 'react-toastify';
import { FormBox, FormError, Input, Label } from '../components/ContactForm/ContactForm.styled';
import Button from 'components/Button';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
// import { useState, useEffect } from "react";

const Register = () => {
  const dispatch = useDispatch();
  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    dispatch(authOperations.register(values));
    resetForm();
  };

  return (
    <Formik 
      initialValues={initialValues}
      onSubmit={handleSubmit}>
      <FormBox>
        <Label>
          Name
          <Input type="text" name="name" title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer."/>
          <FormError name="name" />
        </Label>
        <Label>
          Email
          <Input type="email" name="email" />
          <FormError name="email" />
        </Label>
        <Label>
          Password
          <Input type="password" name="password" />
          <FormError name="password" />
        </Label>

        <Button type="submit">Sign up</Button>
      </FormBox>
    </Formik>
  );
};

export default Register;
