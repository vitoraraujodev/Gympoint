import styled from 'styled-components';

import { Link } from 'react-router-dom';

import { darken } from 'polished';

export const Container = styled.div`
  div {
    display: flex;
    justify-content: flex-start;
    margin: 16px 0;
    width: 700px;

    strong {
      font-size: 24px;
      color: #444;
      font-weight: bold;
    }
  }
`;

export const Table = styled.table`
  background: #fff;
  padding: 10px 30px;
  width: 100%;
  border-radius: 4px;
  overflow-x: auto;

  th {
    color: #444;
    font-size: 16px;
    padding: 20px 0;
  }

  tr td {
    padding: 16px 0;
    font-size: 16px;
    border-bottom: 1px solid #eee;
    color: #666;
  }

  tr:last-child td {
    border-bottom: none;
  }
`;

export const AnswerLink = styled(Link)`
  font-size: 16px;
  color: #4d85ee;
  margin-left: 10px;
  transition: background 0.2s;

  &:hover {
    color: ${darken(0.1, '#4d85ee')};
  }
`;
