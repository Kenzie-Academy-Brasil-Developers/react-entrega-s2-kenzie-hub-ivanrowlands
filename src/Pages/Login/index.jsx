import FormLogin from "../../components/FormLogin";
import { Container, Content } from "./styles";

const Login = () => {
  return (
    <Container>
      <Content>
        <h1>Login</h1>
        <div>
          <FormLogin />
        </div>
      </Content>
    </Container>
  );
};

export default Login;
