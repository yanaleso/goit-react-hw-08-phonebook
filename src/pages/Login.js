import { Formik } from 'formik';
// import { toast } from 'react-toastify';
import { FormBox, FormError, Input, Label } from '../components/ContactForm/ContactForm.styled';
import Button from 'components/Button';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
// import { useState, useEffect } from "react";

const Login = () => {
  const dispatch = useDispatch();
  const initialValues = {
    email: '',
    password: '',
  };

  const handleSubmit = (values, { resetForm }) => {
    dispatch(authOperations.logIn(values));
    resetForm();
  };

  return (
    <Formik 
      initialValues={initialValues}
      onSubmit={handleSubmit}>
      <FormBox>
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

        <Button type="submit">Log in</Button>
      </FormBox>
    </Formik>
  );
};

export default Login;
