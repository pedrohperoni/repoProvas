import styled from "styled-components";

const SelectionButton = styled.button`
   background-color: ${(props) => (props.selected? "#000" : "#f7f7f7")};
   border: 1px solid #000;
   color: ${(props) => (props.selected? "#f7f7f7" : "#000")};

   display: flex;
   align-items: center;
   justify-content: center;
   
   font-size: 15px;
   font-weight: 400;
   line-height:22.5px;
   width: 25%;
   height: 36px;
   padding: 6px 23px;
   cursor: ${(props) => (props.disabled? "not-allowed" : "pointer")};
   
   text-transform: uppercase;
   transition-duration: 0.3s;
   transition-timing-function:easeOut;
   
   &:hover{
      background-color: ${(props) => (props.disabled? "#f7f7f7" : "#000")};
      color:${(props) => (props.disabled? "#000" : "#f7f7f7")};
      pointer-events: ${(props) => (props.selected? "none" : "all")};
   }
`;

export default SelectionButton;
