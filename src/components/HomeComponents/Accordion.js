import styled from "styled-components";

const Accordion = styled.div`
width: 100%;
background-color:#000;
color: #fff;



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
   color: #fff;
   margin: 0 16px;
   line-height:60px;
}

div{
width: 100%;
display: flex;
align-items: center;
justify-content: space-between;
color: #fff;

}

img{
   cursor: pointer;
   height: 40px;
   width: 40px;
   margin: 0 16px;
}




`

export default Accordion;