import styled from 'styled-components';

import { Form } from '@rocketseat/unform';

import { darken } from 'polished';

export const Container = styled.div`
  div {
    display: flex;
    justify-content: space-between;
    margin: 16px 0;
    width: 900px;

    strong {
      font-size: 24px;
      color: #444;
    }

    aside {
      align-items: center;
      margin: 0;

      button {
        background: #ee4d64;
        border: 0;
        border-radius: 4px;
        height: 36px;
        width: 140px;
        color: #fff;
        font-weight: bold;
        font-size: 14px;
        overflow: hidden;
        transition: background 0.2s;
        margin-left: 16px;

        &:hover {
          background: ${darken(0.05, '#ee4d64')};
        }

        &:first-child {
          background: #ccc;
          &:hover {
            background: ${darken(0.08, '#ccc')};
          }
        }
      }
    }
  }
`;

export const CadastrationForm = styled(Form)`
  background: #fff;
  border-radius: 4px;
  display: flex;
  padding: 20px 30px;
  width: 900px;
  flex-direction: column;

  input {
    background: #fff;
    border: 1px solid #ccc;
    border-radius: 4px;
    height: 45px;
    font-size: 19px;
    padding: 0 15px;
    color: #333;

    &::placeholder {
      color: #999;
    }
  }

  strong {
    font-size: 16px;
    color: #444;
    margin-top: 24px;
    margin-bottom: 6px;

    &:first-child {
      margin-top: 0;
    }
  }

  section {
    display: flex;
    margin: 0;
    margin-top: 24px;
    flex-direction: row;
    justify-content: space-between;
    margin-right: 0;

    article {
      display: flex;
      flex-direction: column;
      input {
        width: 265px;
      }

      span {
        input {
          background: #f2f2f2;
        }
      }
    }
  }
`;
