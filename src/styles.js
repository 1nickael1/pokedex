import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  /* flex-wrap: wrap; */
  width: 100%;
  height: 100%;
  padding: 20px 0;
`;

export const List = styled.div`
  /* width: 100%; */
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 0 20px;
  gap: 10px;
  
`;

export const Button = styled.div`
  padding: 10px;
  background-color: red;
  opacity: 0.7;
  color: white;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 1px 1px 4px 5px rgba(0,0,0,0.1);
  text-transform: capitalize;

  :hover {
    opacity: 0.9;
    transition: .5s;
  }
`;

export const BackLeftContainer = styled.div`
  display: flex;
  width: 30%;
  justify-content: space-between;
  margin-top: 50px;
`;

export const BackButton = styled.button`
  padding: 10px;
  background-color: rgba(0,0,0,0.5);
  border-radius: 5px;
  cursor: pointer;
  color: white;

  :hover {
    background-color: rgba(0,0,0,0.6);
    transition: .5s;
  }
`;

export const BackButtonDisabled = styled.button`
  padding: 10px;
  background-color: rgba(0,0,0,0.1);
  border-radius: 5px;
  color: white;
`;

export const NextButton = styled.button`
  padding: 10px;
  background-color: rgba(0,0,0,0.5);
  border-radius: 5px;
  cursor: pointer;
  color: white;

  :hover {
    background-color: rgba(0,0,0,0.6);
    transition: .5s;
  }
`;

export const NextButtonDisabled = styled.button`
  padding: 10px;
  background-color: rgba(0,0,0,0.1);
  border-radius: 5px;
  color: white;
`;
