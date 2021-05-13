import styled from 'styled-components';

export const Container = styled.div`
  display: flex; 
  justify-content: center;
  margin-top: 50px;

  h2 {
    font-size: 20px;
    margin-right: 20px;
  }

  input {
    height: 40px;
    width: 240px;
    padding-left: 5px;
    border-radius: 5px;
    border: 1px solid #000;
    outline: none;
  }

  button {
    margin-left: 5px;
    width: 30px;
    cursor: pointer;
    color: #fff;
    background: #239BA9;
    height: 24px;
    border-radius: 8px;
    border:none;

    &:active {
      background:#08646f;
      border: 1px solid #f7f7f7;
    }
  }
`;
