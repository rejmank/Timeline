import styled from 'styled-components';
import { Link } from 'react-router-dom';


const StyledDiv = styled.div`
font-size: 2em;
border: none;
text-align: center;
padding-top: ${props => props.paddingTop || '15px'};
padding-bottom: ${props => props.paddingBottom || '15px'};
color: black;
border-bottom: none;`

const StyledLink = styled(Link)`
text-decoration: none;
width: 80%;`

const StyledH1 = styled.h1`
font-size 5em;`

const BackButton = styled.div`
  font-size: ${props => props.fontSize || '1em'};
  text-align: left;
  padding-left: 70px;
  padding-top: 25px;`


const StyledInput = styled.input`
width: 80%;
font-size: 5em;
border: none;
border-bottom: solid 2px black;
outline: none;
padding-top: 15px;
`

const Layout = styled.div`
font-size: 4em;
margin-top: 40px;
margin-bottom: 25px;
margin-left: 10%;
text-align: center;
margin-right: 10%;
-webkit-box-shadow: 0px 8px 12px 0px rgba(0,0,0,0.24);
-moz-box-shadow: 0px 8px 12px 0px rgba(0,0,0,0.24);
box-shadow: 0px 8px 12px 0px rgba(0,0,0,0.24);
img{
    padding-top: 5px;
    padding-bottom: 5px;
    &:hover {
    cursor: pointer;
}}
`

const StyledButton = styled.button`
border: 1px solid black;
padding: 0;
font-family: inherit;
font-size: 4em;
background-color: white;
margin-top: 10vh;
padding: 50px;
text-align: center;
&:hover {
  background-color: #f7f4f4;
  cursor: pointer;
}
`;

export {StyledDiv, 
    StyledH1,
    StyledLink, 
    StyledButton, 
    StyledInput,
    Layout,
    BackButton,
    }
