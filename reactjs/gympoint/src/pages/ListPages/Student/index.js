import React from 'react';

import { Container, Table, EditLink, DeleteLink } from './styles';

export default function StudentList() {
  return (
    <Container>
      <div>
        <strong>Gerenciando alunos</strong>
        <aside>
          <button type="button">CADASTRAR</button>
          <input placeholder="Buscar aluno" />
        </aside>
      </div>

      <Table>
        <thead>
          <tr>
            <th width="32%" align="left">
              NOME
            </th>
            <th width="25%" align="left">
              E-MAIL
            </th>
            <th width="18%" align="center">
              IDADE
            </th>
            <th width="5%" />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Jill</td>
            <td>jillclever@gmail.com</td>
            <td align="center">50</td>
            <td>
              <EditLink>editar</EditLink>
              <DeleteLink>apagar</DeleteLink>
            </td>
          </tr>
          <tr>
            <td>Jill</td>
            <td>Smith</td>
            <td align="center">50</td>
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
