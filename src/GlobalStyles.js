import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
body{
  font-family: sans-serif;
  padding: 20px 80px;
  @media screen and (max-width: 800px){
    padding: 10px;
  }
}

a{
  text-decoration: none;
  color: orangered;
  transition: all 0.4s linear;
}
a:hover, a:focus {
  color: #030f18;
  }

*{
  box-sizing: border-box;
}
`