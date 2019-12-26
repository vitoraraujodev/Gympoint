import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  padding: 0 50px;
  border: 1px solid #ddd;
`;

export const Content = styled.div`
  height: 64px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    align-items: center;

    a {
      font-size: 16px;
      font-weight: bold;
      margin-right: 24px;
      color: #999;
    }
  }

  aside {
    display: flex;
    flex-direction: column;
    text-align: right;

    strong {
      font-size: 14px;
      margin-bottom: 2px;
    }
    span {
      margin-top: 2px;
      font-size: 12px;
      color: #ee4d64;
      cursor: pointer;
    }
  }
`;

export const Logo = styled.div`
  align-items: center;
  padding-right: 30px;
  margin-right: 30px;
  border-right: 1px solid #eee;

  img {
    height: 30px;
    margin-right: 14px;
  }
  strong {
    color: #ee4d64;
    font-weight: bold;
    font-size: 16px;
  }
`;
