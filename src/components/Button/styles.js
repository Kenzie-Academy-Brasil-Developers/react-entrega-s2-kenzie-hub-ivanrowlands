import styled from "styled-components";

export const Container = styled.button`
  background: ${(props) => (props.whiteSchema ? "#fff" : "#021ca5")};
  color: ${(props) => (props.whiteSchema ? "#021ca5" : "#fff")};
  height: 35px;
  border: 2px solid #021ca5;
  border-radius: 5px;
  font-family: "Pacifico", cursive;
  width: ${(props) => (props.formSchema ? "100px" : "100%")};
  transition: 0.5s;
  margin-top: 20px;
  :hover {
    border-color: #f08080;
    color: #f08080;
  }
`;
