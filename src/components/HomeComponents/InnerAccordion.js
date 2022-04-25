import styled from "styled-components";

const InnerAccordion = styled.section`
width: 100%;
color: #000;
padding: 0px 15px;


display: ${(props) => (props.active? "flex" : "none")};
align-items: center;
justify-content: center;
flex-direction:column;

cursor: pointer;
transition-duration: 0.3s;
transition-timing-function:easeOut;


h2{
   font-size: 16px;
   font-weight: 400;
   margin-left: 20px;
}

div{
width: 100%;
display: flex;
align-items: center;
justify-content: space-between;
}

img{
   cursor: pointer;
   height: 40px;
   width: 40px;
}




`

export default InnerAccordion;