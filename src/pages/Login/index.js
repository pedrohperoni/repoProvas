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
import { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import FormWarning from "../../components/GlobalComponents/FormWarning";
import api from "../../services/api";
import useAuth from "../../hooks/useAuth";
import { useEffect } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();


  useEffect(() => {
     (localStorage.getItem("auth") !== null) && navigate("/home")
  },[navigate])

  function handleSubmit(e) {
    e.preventDefault();

    const promise = api.login({ email, password });
    promise.then((response) => {
      navigate("/home");
      login(response.data)
    });
    promise.catch((error) => {
      setLoginError(true);
      setInterval(() => {
        setLoginError(false);
      }, 2000);
    });
  }

  return (
    <>
      <Header enabled={true} />
      <LoginContainer>
        <FormContainer>
          <h1>Login</h1>
          <Form onSubmit={handleSubmit}>
            <Input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Input
              type="password"
              name="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <Button
              onClick={handleSubmit}
              enabled={!loginError}
              type="button"
              color="dark"
            >
              Login
            </Button>
            {loginError && (
              <FormWarning>Nome de usuário ou senha incorreta</FormWarning>
            )}
            <Button enabled={true} type="button">
              <Link to="/register"> Primeira vez? Cadastre-se</Link>
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
