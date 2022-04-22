
import { FormContainer, Form, Input } from "../../components/GlobalComponents";
import { LoginContainer } from "../../components/LoginComponents/index";

export default function Login() {
  return (
    <>
      <LoginContainer>
        <FormContainer>
          <Form>
            <Input placeholder="EMAIL" />
            <Input placeholder="PASSWORD" />
          </Form>
        </FormContainer>
      
        <h1>Teste TESTE</h1>
        <p>
          Login Register Submit Button LOGIN REPOPROVAS ALUNOS Alunos Provas
          PROVAS
        </p>
      </LoginContainer>
    </>
  );
}
