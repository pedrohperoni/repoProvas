import styled from "styled-components";

const Accordion = styled.div`
width: 100%;
color: #000;
padding: 6px 16px;



display: flex;
align-items: center;
justify-content: center;
flex-direction:column;


cursor: pointer;
transition-duration: 0.3s;
transition-timing-function:easeOut;

h1{
   font-size: 20px;
   font-weight: 600;
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

export default Accordion;