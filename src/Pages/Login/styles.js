import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100vh;
`;

export const Content = styled.div`
  height: 250px;
  width: 240px;
  background: #fff;
  h1 {
    font-size: 1.5rem;
    color: #021ca5;
    background-color: #fff;
  }
  div {
    background-color: #fff;
  }
  span {
    background-color: #fff;
    color: red;
    font-size: 0.9rem;
  }
`;
