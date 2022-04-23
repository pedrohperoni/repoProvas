import styled from "styled-components";

const Input = styled.input`
   width: 90%;
   height: 50px;
   background-color:#FFCB31;
   border: 0;
   border-bottom: 1px solid #000;
   color: #000;
   padding: 0 10px;
   font-weight: 400;
   margin-bottom: 10px;
   &:focus{
      outline: none;
   }

   ::placeholder{
      text-transform: uppercase;
      color: #000;
   }

`;

export default Input;
