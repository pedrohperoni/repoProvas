import styled from "styled-components";

const Button = styled.button`
   background-color: ${(props) => (props.color === "dark" ? "#000" : "#fff")};
   border: 1px solid ${(props) => (props.color === "dark" ? "#000" : "#fff")};
   color: ${(props) => (props.color === "dark" ? "#fff" : "#000")};

   pointer-events: ${(props) => (props.enabled ? "all" : "none")};
   opacity: ${(props) => (props.enabled ? "1.0" : "0.5")};



   display: flex;
   align-items: center;
   justify-content: center;
   
   font-size: 15px;
   font-weight: 400;
   line-height:22.5px;
   width: 90%;
   padding: 6px 23px;
   
   text-transform: uppercase;
   transition-duration: 0.3s;
   transition-timing-function:easeOut;

   a {
      text-decoration: none;
      color: ${(props) => (props.color === "dark" ? "#fff" : "#000")};
      font-size: 15px;
      font-weight: 400;
      line-height:22.5px;
   }

   
   &:hover{
      background-color:${(props) => (props.color === "dark" ? "#fff" : "#000")};
      color:${(props) => (props.color === "dark" ? "#000" : "#fff")};
      border: :${(props) =>
        props.color === "dark" ? "1px solid #000" : "1px solid #fff"};
      cursor: pointer;

      a{
         color: ${(props) => (props.color === "dark" ? "#000" : "#fff")};
      }

   }
`;

export default Button;
