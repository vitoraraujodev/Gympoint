import React from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { signInRequest } from '~/store/modules/auth/actions';
import logo from '~/assets/logo.svg';

export default function SignIn() {
  const dispatch = useDispatch();

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <>
      <div>
        <img src={logo} alt="Gympoint" />
        <strong>GYMPOINT</strong>
      </div>
      <Form onSubmit={handleSubmit}>
        <span>SEU E-MAIL</span>
        <Input name="email" type="email" placeholder="exemplo@email.com" />
        <span>SUA SENHA</span>
        <Input name="password" type="password" placeholder="********" />

        <button type="submit">Entrar no sistema</button>
      </Form>
    </>
  );
}
