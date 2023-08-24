import { createGlobalStyle } from "styled-components";
import stars from "./public/assets/background-stars.svg";
const GlobalStyled = createGlobalStyle`
* {
box-sizing: border-box;
margin: 0;
padding: 0;

}

#root {
  background-image: url(${stars});
  background-color: #070724;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh; 
}
`;
export default GlobalStyled;
