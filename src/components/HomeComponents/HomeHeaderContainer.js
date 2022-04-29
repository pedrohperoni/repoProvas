import styled from "styled-components";

const SearchBarContainer = styled.div`
width: 100%;
background-color:#000;
display: flex;
align-items: center;
justify-content: center;
flex-direction: row;
text-align: center;
height: 100px;

p{
   font-size:25px;
   font-weight:600;
   text-transform:uppercase;

}


img{
   margin: -45px;
   cursor: pointer;
   height: 40px;
   width: 40px;
}
`

export default SearchBarContainer