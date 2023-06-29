import { register } from 'api/authApi';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Button } from 'components/common/Button';
import { Form } from 'components/common/Form';
import { Input } from 'components/common/Input';
import { Label } from 'components/common/Label';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const RegisterForm = () => {
  const initialFormData = {
    name: '',
    email: '',
    password: '',
  };
  const [formData, setFormData] = useState(initialFormData);
  const navigate = useNavigate();
  const isAddContactButtonDisabled =
    formData.name === '' || formData.email === '' || formData.password === '';

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      await register(formData);
      Notify.success('You have successfully registered. Please log in.');
      navigate('/login');
      resetForm();
    } catch (error) {
      Notify.failure('Registration failed. Please try again later.');
    }
  };

  const resetForm = () => {
    setFormData(initialFormData);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Name
        <Input
          value={formData.name}
          onChange={handleChange}
          type="text"
          name="name"
        />
      </Label>
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
        Register
      </Button>
      <Link to="/login">Login</Link>
    </Form>
  );
};
