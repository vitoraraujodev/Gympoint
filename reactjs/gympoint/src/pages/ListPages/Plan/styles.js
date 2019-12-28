import styled from 'styled-components';

import { Link } from 'react-router-dom';

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
      font-weight: bold;
    }

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

      &:hover {
        background: ${darken(0.05, '#ee4d64')};
      }
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
    padding: 20px;
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

export const EditLink = styled(Link)`
  font-size: 16px;
  color: #4d85ee;
  margin-right: 10px;
  transition: background 0.2s;

  &:hover {
    color: ${darken(0.1, '#4d85ee')};
  }
`;

export const DeleteLink = styled(Link)`
  font-size: 16px;
  color: #de3b3b;
  margin-left: 10px;
  transition: background 0.2s;

  &:hover {
    color: ${darken(0.1, '#de3b3b')};
  }
`;
