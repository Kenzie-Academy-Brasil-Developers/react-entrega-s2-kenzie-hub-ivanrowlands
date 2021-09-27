import { Container } from "./styles";
const Button = ({
  children,
  whiteSchema = false,
  formSchema = false,
  ...rest
}) => {
  return (
    <Container
      whiteSchema={whiteSchema}
      type="button"
      formSchema={formSchema}
      {...rest}
    >
      {children}
    </Container>
  );
};

export default Button;
