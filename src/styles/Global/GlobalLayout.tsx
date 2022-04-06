import styled, { createGlobalStyle, keyframes } from "styled-components";
export const GlobalLayout = createGlobalStyle`
    html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {
		@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
	  margin: 0;
	  padding: 0;
	  border: 0;
	  font-size: 100%;
	  font: inherit;
	  vertical-align: baseline;
	  box-sizing: border-box;
		font-family: 'Open Sans', sans-serif;
}
  article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
	  display: block;
}
  body {
	  line-height: 1;
}
  ol, ul {
	  list-style: none;
}
  blockquote, q {
	  quotes: none;
}
  blockquote:before, blockquote:after {
	  content: '';
	  content: none;
}
  q:before, q:after {
	  content: '';
	  content: none;
}
  table {
	  border-collapse: collapse;
	  border-spacing: 0;
}
  a {
	  text-decoration: none;
	  color: inherit;
}//reset.css
body {
  display: flex;
  flex-direction: column;
  color: ${props => props.theme.txtColor};
  background-color: ${props => props.theme.bgColor};
}
`
const loaderKeyframes = keyframes`
0%{
	border-radius: 10px;
}
25%{
	border: 25px;
}
50%{
	border-radius: 50px;
}
75%{
	border-radius: 25px;
}
100%{
	border-radius: 10px;
}
`
export const Loader = styled.span`
	display: block;
	width: 100px;
	height: 100px;
	border-radius: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: rgba(0,0,0,0.4);
	animation: ${loaderKeyframes} 0.5s linear infinite;
`
export const LoadText = styled.span`
		color:  ${props => props.theme.txtColor};
`