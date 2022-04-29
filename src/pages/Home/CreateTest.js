import {
  FormContainer,
  Form,
  Input,
  Button,
} from "../../components/AuthFormComponents";

export default function CreateTest() {
  return (
    <FormContainer page={"create"}>
      <Form>
        <Input placeholder="Titulo da prova" />
        <Input placeholder="PDF da prova" />
        <Input placeholder="Categoria" />
        <Input placeholder="Disciplina" />
        <Input placeholder="Pessoa Instrutora" />
        <Button type="button" color="dark" enabled={true}>
          Enviar
        </Button>
      </Form>
    </FormContainer>
  );
}
