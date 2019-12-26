import React from 'react';
import { NavLink } from 'react-router-dom';

import logo from '~/assets/logo.svg';
import { Container, Content, Logo } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <div>
          <Logo>
            <img src={logo} alt="GoBarber" />
            <strong>GYMPOINT</strong>
          </Logo>
          <nav>
            <NavLink activeStyle={{ color: '#444' }} to="/students">
              ALUNOS
            </NavLink>
            <NavLink activeStyle={{ color: '#444' }} to="/plans">
              PLANOS
            </NavLink>
            <NavLink activeStyle={{ color: '#444' }} to="/registrations">
              MATRÍCULAS
            </NavLink>
            <NavLink activeStyle={{ color: '#444' }} to="/help-orders">
              PEDIDOS DE AUXÍLIO
            </NavLink>
          </nav>
        </div>
        <aside>
          <strong>Administrador</strong>
          <span>sair do sistema</span>
        </aside>
      </Content>
    </Container>
  );
}
