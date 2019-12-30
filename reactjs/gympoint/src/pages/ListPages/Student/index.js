import React from 'react';
import { Container, Table, EditLink, DeleteLink } from './styles';
import history from '~/services/history';

export default function StudentList() {
  function handleCadastration(route) {
    history.push(route);
  }

  return (
    <Container>
      <div>
        <strong>Gerenciando alunos</strong>
        <aside>
          <button
            type="button"
            onClick={() => handleCadastration('/students/new')}
          >
            CADASTRAR
          </button>
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
