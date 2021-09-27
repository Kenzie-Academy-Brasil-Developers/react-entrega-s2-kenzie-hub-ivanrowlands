import { useHistory } from "react-router";
import Button from "../../components/Button";
import { Container, Content } from "./styles";

const Home = () => {
  const history = useHistory();

  const handleNav = (path) => {
    history.push(path);
  };
  return (
    <Container>
      <Content>
        <h1>KenzieHub</h1>
        <p>Faça seu Login ou Registre-se conosco</p>
        <div>
          <Button onClick={() => handleNav("/login")}>Login</Button>
          <Button onClick={() => handleNav("/register")} whiteSchema>
            Cadastra-se
          </Button>
        </div>
      </Content>
    </Container>
  );
};

export default Home;
