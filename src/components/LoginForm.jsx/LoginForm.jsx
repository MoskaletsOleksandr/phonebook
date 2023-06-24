import { Button } from 'components/common/Button';
import { Form } from 'components/common/Form';
import { Input } from 'components/common/Input';
import { Label } from 'components/common/Label';
import { useState } from 'react';

export const LoginForm = () => {
  const initialFormData = {
    name: '',
    email: '',
  };
  const [formData, setFormData] = useState(initialFormData);
  const isAddContactButtonDisabled =
    formData.name === '' || formData.email === '';

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(formData);
    resetForm();
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
        Email adgjl@mail.com
        <Input
          value={formData.email}
          onChange={handleChange}
          type="email"
          name="email"
        />
      </Label>
      <Button type="submit" disabled={isAddContactButtonDisabled}>
        Register
      </Button>
    </Form>
  );
};
