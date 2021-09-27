import FormRegister from "../../components/Form/FormRegister";
import { Container, Content } from "./styles";

const Register = () => {
  return (
    <Container>
      <Content>
        <h1>Registre-se</h1>
        <div>
          <FormRegister />
        </div>
      </Content>
    </Container>
  );
};

export default Register;
