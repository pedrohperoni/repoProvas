import styled from "styled-components";

const Form = styled.form`
  background-color: #ffcb31;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 15px;
  color: #000;
  height: 90%;
  width:100%;
  

   div{
      width: 90%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: row;
      gap: 9px;
   }

   select{
   width: 90%;
   height: 50px;
   background-color:#FFCB31;
   border-bottom: 1px solid #000;
   border: 0;
   color: #000;
   font-weight: 400;
   margin-bottom: 10px;
   &:focus{
      outline: none;
   }
   option{
      font-size:15px;
      background-color: #000;
      color: #fff;
   }
   }
`;



export default Form;
