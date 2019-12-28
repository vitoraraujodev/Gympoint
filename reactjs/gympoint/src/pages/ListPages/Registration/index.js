import React from 'react';

import { Container, Table, EditLink, DeleteLink } from './styles';

export default function RegistrationList() {
  return (
    <Container>
      <div>
        <strong>Gerenciando matrículas</strong>
        <button type="button">CADASTRAR</button>
      </div>

      <Table>
        <thead>
          <tr>
            <th width="18%" align="left">
              ALUNO
            </th>
            <th width="10%" align="center">
              PLANO
            </th>
            <th width="14%" align="center">
              INÍCIO
            </th>
            <th width="14%" align="center">
              TÉRMINO
            </th>
            <th width="8%" align="center">
              ATIVO
            </th>
            <th width="2%" />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Jill Bilton</td>
            <td align="center">Start</td>
            <td align="center">30 de Abril de 2019</td>
            <td align="center">30 de Maio de 2019</td>
            <td align="center">Não</td>
            <td>
              <EditLink>editar</EditLink>
              <DeleteLink>apagar</DeleteLink>
            </td>
          </tr>
          <tr>
            <td>Sonin Clever</td>
            <td align="center">Diamond</td>
            <td align="center">14 de Outubro de 2019</td>
            <td align="center">14 de Abril de 2020</td>
            <td align="center">Sim</td>
            <td>
              <EditLink>editar</EditLink>
              <DeleteLink>apagar</DeleteLink>
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}
