import React, { useState, useEffect } from 'react';
import {
  PageLayout,
  Input,
  PasswordInput,
  Button,
  Spinner,
} from '../../common';
import { Form } from './index';

let timeout: number;

const Login = () => {
  const [formFields, setFormFields] = useState<{
    username: string;
    password: string;
  }>({ username: '', password: '' });
  const [loading, setLoading] = useState<boolean>(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist();
    setFormFields(state => ({
      ...state,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  useEffect(() => {
    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, []);

  return (
    <PageLayout>
      <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
        {loading ? (
          <Spinner />
        ) : (
          <>
            <Input
              type="text"
              name="username"
              placeholder="username"
              onChange={handleInputChange}
              value={formFields.username}
            />
            <PasswordInput
              name="password"
              onChange={handleInputChange}
              value={formFields.password}
            />
          </>
        )}
        <Button large type="submit" disabled={loading}>
          {loading ? 'Loading...' : 'Login'}
        </Button>
        {!loading && (
          <>
            <div className="alt-text">or</div>
            <Button secondary type="button">
              Register
            </Button>
          </>
        )}
      </Form>
    </PageLayout>
  );
};

export default Login;
