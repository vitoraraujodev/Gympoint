import React from 'react';

import { Container, Table, AnswerLink } from './styles';

export default function HelpOrderList() {
  return (
    <Container>
      <div>
        <strong>Pedidos de auxílio</strong>
      </div>

      <Table>
        <thead>
          <tr>
            <th width="95%" align="left">
              ALUNO
            </th>
            <th width="5%" />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Jill Bilton</td>
            <td>
              <AnswerLink>responder</AnswerLink>
            </td>
          </tr>
          <tr>
            <td>Sonin Blenen</td>
            <td>
              <AnswerLink>responder</AnswerLink>
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}
