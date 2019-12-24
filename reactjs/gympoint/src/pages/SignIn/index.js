import React from 'react';

import logo from '~/assets/logo.svg';

export default function SignIn() {
  return (
    <>
      <div>
        <img src={logo} alt="Gympoint" />
        <strong>GYMPOINT</strong>
      </div>

      <form>
        <span>SEU E-MAIL</span>
        <input type="email" placeholder="exemplo@email.com" />
        <span>SUA SENHA</span>
        <input type="password" placeholder="********" />

        <button type="submit">Entrar no sistema</button>
      </form>
    </>
  );
}
