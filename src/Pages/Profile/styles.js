import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: center;
  text-align: center;
  padding-top: 10%;
  border
`;

export const Content = styled.div`
    border-radius: 30px;
    height: 400px;
    width: 240px;
    background: #fff;
  h1 {
    font-size: 1.5rem;
    color: #4a5485;
    background-color: #fff;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
  }
  div {
    background-color: #fff;
  }
  h4 {
    background-color: #fff;
    margin-top: 10px;
  }
`;
