import styled from "styled-components";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router";
import logoutLogo from "../../assets/log-out-outline.svg";

export default function LogoutIcon() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
   logout();
   navigate("/");
  } 

  return (
    <Logout onClick={handleLogout}>
      <img src={logoutLogo} alt="logout" />
    </Logout>
  );
}

const Logout = styled.div`
  position: fixed;
  top: 25px;
  right: 25px;
  cursor: pointer;

  img {
    height: 50px;
    width: 50px;
  }
`;
