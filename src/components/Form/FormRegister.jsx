import { TextField } from "@material-ui/core";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import Button from "../Button";
import { useHistory } from "react-router";
const FormRegister = () => {
  const schema = yup.object().shape({
    name: yup
      .string()
      .max(18, "18 caracteres no máximo")
      .required("Campo obrigatório!")
      .matches(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/),
    email: yup.string().email("Email inválido").required("Campo obrigatório!"),
    password: yup
      .string()
      .min(8, "8 caracteres no minímo")
      .matches(
        /^((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "A senha deve conter: uma letra maiúscula, uma minúscula, um número e um caracter especial!"
      )
      .required("Campo obrigatório!"),
    course_module: yup.string().required("Campo obrigatório!"),
    contact: yup.string().required("Campo obrigatório!").url(),
    bio: yup
      .string()
      .required("Campo obrigatório!")
      .max(20, "Máximo de 20 caracteres."),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleForm = (data) => {
    axios
      .post("https://kenziehub.herokuapp.com/users", data)
      .then((response) => {
        console.log(response);
        history.push("/login");
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(data);
  };
  const history = useHistory();
  return (
    <div>
      <form onSubmit={handleSubmit(handleForm)}>
        <TextField
          label="Nome"
          variant="outlined"
          size="small"
          margin="dense"
          {...register("name")}
          error={!!errors.name}
          helperText={errors.name?.message}
        />
        <TextField
          label="E-mail"
          variant="outlined"
          size="small"
          margin="dense"
          {...register("email")}
          error={!!errors.email}
          helperText={errors.email?.message}
        />
        <TextField
          label="Senha"
          variant="outlined"
          size="small"
          margin="dense"
          type="password"
          {...register("password")}
          error={!!errors.password}
          helperText={errors.password?.message}
        />
        <TextField
          label="Módulo do Curso"
          variant="outlined"
          size="small"
          margin="dense"
          {...register("course_module")}
          error={!!errors.course_module}
          helperText={errors.course_module?.message}
        />
        <TextField
          label="Link Perfil"
          variant="outlined"
          size="small"
          margin="dense"
          {...register("contact")}
          error={!!errors.contact}
          helperText={errors.contact?.message}
        />
        <TextField
          label="Bio"
          variant="outlined"
          size="small"
          margin="dense"
          {...register("bio")}
          error={!!errors.bio}
          helperText={errors.bio?.message}
        />
        <Button type="submit" formSchema>
          Enviar
        </Button>
      </form>
    </div>
  );
};

export default FormRegister;
