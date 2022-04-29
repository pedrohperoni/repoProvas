import styled from "styled-components";

const AccordionPanel = styled.span`
   display: ${(props) => (props.active? "flex" : "none")};
   width: 100%;
   padding: 10px 20px;

   flex-direction: column;
   justify-content: center;
   text-align: left;
   background-color:#fff;

   cursor: pointer;
   transition-duration: 0.3s;
   transition-timing-function:easeOut;

   p{
   font-size: 15px;
   font-weight: 400;
   margin: 5px 0 5px 0;
   color: #000;
   
}

span{
   margin: 5px 0;
   font-size: 12px;
   font-weight: 300;
   color: #000;
}


   img{
   cursor: pointer;
   height: 40px;
   width: 40px;
}

div{
   display: block;
}
`;

export default AccordionPanel

