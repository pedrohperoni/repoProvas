import styled from "styled-components";

const SearchBar = styled.input`
   width: 45%;
   height: 50px;
   background-color:#000;
   border: 0;
   border-bottom: 1px solid #fff;
   color: #fff;
   padding: 0 20px;
   font-weight: 400;
   font-size: 18px;
   padding-right: 50px;
   
   &:focus{
      outline: none;
   }
   
   ::placeholder{
      text-transform: uppercase;
      color: #fff;
      font-size:18px
   }


`

export default SearchBar