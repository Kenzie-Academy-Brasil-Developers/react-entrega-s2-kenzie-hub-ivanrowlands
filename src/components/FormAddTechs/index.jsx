import { TextField } from "@material-ui/core";
import Button from "../Button";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";

const FormAddTechs = ({ token, techs, setTechs }) => {
  const schema = yup.object().shape({
    title: yup.string().required("Campo obrigatório!"),
    status: yup
      .string()
      .max(15, "15 caracteres no máximo")
      .required("Campo obrigatório!"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleForm = (data) => {
    axios
      .post("https://kenziehub.herokuapp.com/users/techs", data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        console.log(response);
        setTechs([...techs, response.data]);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <form onSubmit={handleSubmit(handleForm)}>
        <TextField
          label="Tech"
          variant="outlined"
          size="small"
          margin="dense"
          {...register("title")}
          error={!!errors.techs}
          helperText={errors.techs?.message}
        />
        <TextField
          label="Status"
          variant="outlined"
          size="small"
          margin="dense"
          {...register("status")}
          error={!!errors.status}
          helperText={errors.status?.message}
        />
        <Button type="submit" formSchema>
          Adicionar
        </Button>
      </form>
    </div>
  );
};

export default FormAddTechs;
