import React from 'react';

import { Input } from '@rocketseat/unform';

import { Container, CadastrationForm } from './styles';

import history from '~/services/history';

export default function PlanEdition() {
  function handleBack(route) {
    history.push(route);
  }

  return (
    <Container>
      <div>
        <strong>Edição de plano</strong>
        <aside>
          <button type="button" onClick={() => handleBack('/plans')}>
            VOLTAR
          </button>
          <button type="button">SALVAR</button>
        </aside>
      </div>
      <CadastrationForm>
        <strong>TÍTULO DO PLANO</strong>
        <Input name="title" />

        <section>
          <article>
            <strong>DURAÇÃO(meses)</strong>
            <Input name="duration" />
          </article>
          <article>
            <strong>PREÇO MENSAL</strong>
            <Input name="price" />
          </article>
          <article>
            <strong>PREÇO TOTAL</strong>
            <span>
              <input readOnly />
            </span>
          </article>
        </section>
      </CadastrationForm>
    </Container>
  );
}
