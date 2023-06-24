import { register } from 'api/auth';
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

  const handleSubmit = event => {
    event.preventDefault();

    register(formData).then(() => {
      //notification
      navigate('/login');
    });
    resetForm();
  };

  const resetForm = () => {
    setFormData(initialFormData);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Name asdfghjkl
        <Input
          value={formData.name}
          onChange={handleChange}
          type="text"
          name="name"
        />
      </Label>
      <Label>
        Email adfgjl@mail.com
        <Input
          value={formData.email}
          onChange={handleChange}
          type="email"
          name="email"
        />
      </Label>
      <Label>
        Password asdfghj563214
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
