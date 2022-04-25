import styled from "styled-components";

const AccordionPanel = styled.span`
   display: ${(props) => (props.active? "flex" : "none")};
   width: 95%;
   padding: 3px 11px;
   margin-top: 5px;

   flex-direction: column;
   text-align: left;


   cursor: pointer;
   transition-duration: 0.3s;
   transition-timing-function:easeOut;

   p{
   font-size: 16px;
   font-weight: 400;
   margin: 5px 0;
}

span{
   margin: 5px 0;
   font-size: 12px;
   font-weight: 300;
}


   img{
   cursor: pointer;
   height: 40px;
   width: 40px;
}
`;

export default AccordionPanel

