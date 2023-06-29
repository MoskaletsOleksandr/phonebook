import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Button } from 'components/common/Button';
import { Form } from 'components/common/Form';
import { Input } from 'components/common/Input';
import { Label } from 'components/common/Label';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginThunk } from 'redux/auth/thunks';

export const LoginForm = () => {
  const initialFormData = {
    email: '',
    password: '',
  };
  const [formData, setFormData] = useState(initialFormData);
  const dispatch = useDispatch();
  const isAddContactButtonDisabled =
    formData.email === '' || formData.password === '';

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      await dispatch(loginThunk(formData)).unwrap();
      Notify.success('You have successfully logged in our service');
      resetForm();
    } catch (error) {
      Notify.failure('Login failed. Please check your credentials.');
    }
  };

  const resetForm = () => {
    setFormData(initialFormData);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Email
        <Input
          value={formData.email}
          onChange={handleChange}
          type="email"
          name="email"
        />
      </Label>
      <Label>
        Password
        <Input
          value={formData.password}
          onChange={handleChange}
          type="text"
          name="password"
        />
      </Label>
      <Button type="submit" disabled={isAddContactButtonDisabled}>
        Login
      </Button>
      <Link to="/register">Register</Link>
    </Form>
  );
};
