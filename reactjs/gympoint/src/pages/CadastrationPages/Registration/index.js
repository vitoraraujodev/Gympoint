import React from 'react';

import { Input } from '@rocketseat/unform';

import { Container, CadastrationForm } from './styles';

import history from '~/services/history';

export default function RegistrationCadastration() {
  function handleBack(route) {
    history.push(route);
  }

  return (
    <Container>
      <div>
        <strong>Cadastro de matrícula</strong>
        <aside>
          <button type="button" onClick={() => handleBack('/registrations')}>
            VOLTAR
          </button>
          <button type="button">SALVAR</button>
        </aside>
      </div>
      <CadastrationForm>
        <strong>ALUNO</strong>
        <Input name="student_id" placeholder="Buscar aluno" />

        <section>
          <article>
            <strong>PLANO</strong>
            <Input name="plan_id" placeholder="Selecione o plano" />
          </article>
          <article>
            <strong>DATA DE INÍCIO</strong>
            <Input name="start_date" placeholder="Escolha a data" />
          </article>
          <article>
            <strong>DATA DE TÉRMINO</strong>
            <span>
              <input readOnly />
            </span>
          </article>
          <article>
            <strong>VALOR FINAL</strong>
            <span>
              <input readOnly />
            </span>
          </article>
        </section>
      </CadastrationForm>
    </Container>
  );
}
