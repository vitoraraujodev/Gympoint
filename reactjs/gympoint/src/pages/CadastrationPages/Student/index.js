import React from 'react';

import { Input } from '@rocketseat/unform';

import { Container, CadastrationForm } from './styles';

import history from '~/services/history';

export default function StudentCadastration() {
  function handleBack(route) {
    history.push(route);
  }

  return (
    <Container>
      <div>
        <strong>Cadastro de aluno</strong>
        <aside>
          <button type="button" onClick={() => handleBack('/students')}>
            VOLTAR
          </button>
          <button type="button">SALVAR</button>
        </aside>
      </div>
      <CadastrationForm>
        <strong>NOME COMPLETO</strong>
        <Input name="name" />

        <strong>ENDEREÇO DE E-MAIL</strong>
        <Input name="email" type="email" placeholder="exemplo@email.com" />
        <section>
          <article>
            <strong>IDADE</strong>
            <Input name="age" />
          </article>
          <article>
            <strong>PESO(KG)</strong>
            <Input name="weight" />
          </article>
          <article>
            <strong>ALTURA</strong>
            <Input name="height" />
          </article>
        </section>
      </CadastrationForm>
    </Container>
  );
}
