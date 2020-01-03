import React from 'react';

import { Container, Table, EditLink, DeleteLink } from './styles';

import history from '~/services/history';

export default function PlanList() {
  function handleCadastration(route) {
    history.push(route);
  }

  return (
    <Container>
      <div>
        <strong>Gerenciando matrículas</strong>
        <button type="button" onClick={() => handleCadastration('/plans/new')}>
          CADASTRAR
        </button>
      </div>

      <Table>
        <thead>
          <tr>
            <th width="32%" align="left">
              TÍTULO
            </th>
            <th width="25%" align="center">
              DURAÇÃO
            </th>
            <th width="25%" align="center">
              VALOR/MÊS
            </th>
            <th width="5%" />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Start</td>
            <td align="center">1 mês</td>
            <td align="center">R$129,00</td>
            <td>
              <EditLink to="/plans/edit/1">editar</EditLink>
              <DeleteLink>apagar</DeleteLink>
            </td>
          </tr>
          <tr>
            <td>Gold</td>
            <td align="center">3 meses</td>
            <td align="center">R$109,00</td>
            <td>
              <EditLink to="/plans/edit/1">editar</EditLink>
              <DeleteLink>apagar</DeleteLink>
            </td>
          </tr>
          <tr>
            <td>Diamond</td>
            <td align="center">6 meses</td>
            <td align="center">R$89,00</td>
            <td>
              <EditLink to="/plans/edit/1">editar</EditLink>
              <DeleteLink>apagar</DeleteLink>
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}
