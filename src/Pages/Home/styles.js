import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100vh;
`;

export const Content = styled.div`
  max-width: 350px;
  h1 {
    color: #6174d9;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
  }

  div {
    flex: 1;
    display: flex;

    button + button {
      margin-left: 1rem;
    }
  }

  p {
    margin-bottom: 1.5rem;
    font-size: 1.2rem;
    color: #f08080;
  }
`;
