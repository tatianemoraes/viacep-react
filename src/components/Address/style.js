import styled from 'styled-components';

export const Container = styled.div`
  .address-response {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    border: 1px solid #000;
    height: 300px;
    width: 500px;
    margin: 0 auto;
    margin-top: 100px;
    border-radius: 4px;

    label {
      margin-left: 10px;
    }

    input {
      width: 300px;
      height: 40px;
      border-radius: 5px;
      border: 1px solid #000;
      padding-left:10px;
    }
   
      .input-city {
        margin-left: 44px;
      }

      .input-uf {
        margin-left: 80px;
      }

      .input-neighborhood {
        margin-left: 55px;
      }

      .input-street {
        margin-left: 5px;
      }
  }
`;
