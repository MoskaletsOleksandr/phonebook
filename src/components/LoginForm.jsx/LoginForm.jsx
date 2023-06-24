import { login } from 'api/auth';
import { Button } from 'components/common/Button';
import { Form } from 'components/common/Form';
import { Input } from 'components/common/Input';
import { Label } from 'components/common/Label';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const LoginForm = () => {
  const initialFormData = {
    email: '',
    password: '',
  };
  const [formData, setFormData] = useState(initialFormData);
  const isAddContactButtonDisabled =
    formData.email === '' || formData.password === '';

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    login(formData);
    resetForm();
  };

  const resetForm = () => {
    setFormData(initialFormData);
  };

  return (
    <Form onSubmit={handleSubmit}>
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
        Login
      </Button>
      <Link to="/register">Register</Link>
    </Form>
  );
};
