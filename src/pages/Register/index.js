import {
  FormContainer,
  Form,
  Input,
  Button,
} from "../../components/FormComponents";
import { LoginContainer } from "../../components/LoginComponents/index";
import {
  Header,
  ThinButton,
  Icon,
} from "../../components/GlobalComponents/index";
import github from "../../assets/logo-github.svg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { useState } from "react";
import FormWarning from "../../components/GlobalComponents/FormWarning";
import api from "../../services/api";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailValidation, setEmailValidation] = useState(false);

  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value.toLowerCase());
    if (/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(e.target.value.toLowerCase())) {
      setEmailValidation(true);
    } else {
      setEmailValidation(false);
    }
  };

  function handleSubmit(e) {
    e.preventDefault();
    console.log(email, password, confirmPassword);

    const promise = api.createUser({ email, password, confirmPassword });

    promise.then((response) => {
      navigate("/");
    });
    promise.catch((error) => {
      console.log(error.response);
      alert("erro no submit do form");
    });
  }

  return (
    <>
      <Header />
      <LoginContainer>
        <FormContainer>
          <h1>Registrar</h1>
          <Form onSubmit={handleSubmit}>
            <Input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
              required
            />
            {/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email.toLowerCase()) ||
            email === "" ? (
              ""
            ) : (
              <FormWarning>Insira um e-mail num formato válido!</FormWarning>
            )}
            <Input
              type="password"
              name="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {password.length > 3 || password.length === 0 ? (
              ""
            ) : (
              <FormWarning>Sua senha deve ter mais de 3 carcteres!</FormWarning>
            )}
            <Input
              type="password"
              name="confirmPassword"
              placeholder="Confirmar Senha"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            {password === confirmPassword || confirmPassword.length === 0 ? (
              ""
            ) : (
              <FormWarning>As senhas devem ser iguais!</FormWarning>
            )}
            <Button
              type="submit"
              enabled={
                emailValidation &&
                password === confirmPassword &&
                password.length > 3
              }
              color="dark"
            >
              CADASTRAR
            </Button>
            <Button enabled={true} type="button">
              <Link to="/">FAZER LOGIN</Link>
            </Button>
            <ThinButton type="button">
            Entrar com GitHub
            <Icon src={github} alt="GitHub" />
          </ThinButton>
          </Form>
        
        </FormContainer>
      </LoginContainer>
    </>
  );
}
