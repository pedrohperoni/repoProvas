import logo from "../../assets/logo.svg";
import logoutLogo from "../../assets/log-out-outline.svg";
import styled from "styled-components";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router";

export default function Header() {
   const { logout } = useAuth();
   const navigate = useNavigate();

   function handleLogout(e){
      e.preventDefault();
      logout();
      navigate("/")

   }

  return (
    <>
      <HeaderContainer>
        <img src={logo} alt="repoProvas" />
        <Logout onClick={handleLogout}>
          <img src={logoutLogo} alt="logout" />
        </Logout>
      </HeaderContainer>
    </>
  );
}

const HeaderContainer = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000;
  position: fixed;
  top: 0;

  img{
     align-self: center;
  }
`;

const Logout = styled.div`
   display: ${(props) => (props.logout? "block" : "none")};
   position: absolute;
   top: 25px;
   right: 25px;
   cursor: pointer;

  img{
   height: 50px;
   width: 50px;
  }
`;
