import styled from "styled-components";

const FormContainer = styled.div`
background-color: rgb(255, 203, 49);
font-family: "Poppins";
font-size: 15px;
font-weight: 400;
height: ${(props) => (props.page === "create" ? "450px" : "550px")};
line-height: 22.5px;
padding: ${(props) => (props.page === "create" ? "10px 32px" : "40px 32px")};
width: ${(props) => (props.page === "create" ? "55%" : "400px")};
display: flex;
align-items: center;
justify-content: space-around;
flex-direction: column;
margin-top: ${(props) => (props.page === "create" ? "0" : "100px")};


h1{
     color: #000;
     font-size:35px;
     font-weight: 600;
     text-transform: uppercase;
     margin-bottom:10px;
  }

span{
     margin-top: -5px;
     width: 100%;
     text-align: center;
     text-transform: uppercase;
}



`;

export default FormContainer;
