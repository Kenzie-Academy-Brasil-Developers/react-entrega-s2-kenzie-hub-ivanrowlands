import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 10px;
`;

export const Content = styled.ul`
  list-style: none;
  margin-top: 10px;
  background-color: #fff;
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  align-items: center;
  justify-content: center;
  li {
    margin: 5px;
    background-color: #fff;
    border: 1px solid #021ca5;
    border-radius: 5px;
    padding: 5px;
    width: 150px;
  }
`;
