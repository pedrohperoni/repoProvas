import styled from "styled-components";

const AccordionPanel = styled.span`
  display: ${(props) => (props.active ? "flex" : "none")};
  width: 100%;
  padding: 0 20px;

  flex-direction: column;
  justify-content: center;
  text-align: left;
  background-color: #fff;

  cursor: pointer;
  transition-duration: 0.3s;
  transition-timing-function: easeOut;

  p {
    font-size: 15px;
    font-weight: 500;
    margin: 5px 0;
    color: #000;
    margin-top: 10px;
  }

  

  span {
    font-size: 12px;
    font-weight: 300;
    color: #000;
    margin: 3px 0;
  }

  strong {
    font-weight: 500;
  }

  img {
    cursor: pointer;
    height: 40px;
    width: 40px;
  }

  div {
    display: block;
  }

  section{
     display: flex;
     align-items: center;
     justify-content: space-between;
  }

  &:first-of-type{
     padding-top: 10px;
  }

  &:last-of-type{
     padding-bottom: 20px;
  }
`;

export default AccordionPanel;
