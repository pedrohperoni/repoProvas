import styled from "styled-components";

const ThinButton = styled.button`
   background-color: #000;
   border: 1px solid #000;
   color: #fff;

   display: flex;
   align-items: center;
   justify-content: center;
   
   font-size: 15px;
   font-weight: 400;
   line-height:22.5px;
   width: 90%;
   padding: 6px 23px;
   margin-top: 15px;
   
   text-transform: uppercase;
   transition-duration: 0.3s;
   transition-timing-function:easeOut;
   
   &:hover{
      background-color:#fff;
      color: #000;
      border: 1px solid #000;
      cursor: pointer;
   }
`

export default ThinButton