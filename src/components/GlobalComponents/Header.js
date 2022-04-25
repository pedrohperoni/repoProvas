import logo from "../../assets/logo.svg";

import styled from "styled-components";

export default function Header() {
  return (
    <>
      <HeaderContainer>
        <img src={logo} alt="repoProvas" />
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

  img {
    align-self: center;
  }
`;
