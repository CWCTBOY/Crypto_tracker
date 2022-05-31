import styled from "styled-components"

export const Wrapper = styled.div`
	width: 100vw;
	height: auto;
	display: flex;
	flex-direction: column;
`
export const Header = styled.div`
	width: 100vw;
	height: 80px;
	margin-bottom: 50px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`
export const Title = styled.h1`
	color: ${props => props.theme.accentColor};
	font-size: 35px;
	margin: 0 0 0 20px;
`
export const ThemeBtn = styled.div<{ themeSwitch: boolean }>`
	width: 40px;
	height: 20px;
	background-color: ${props => props?.theme.contrast};
	margin: 0 20px 0 0;
	border-radius: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
	div {
		width: 25px;
		height: 25px;
		background-color: ${props => props.theme.bgColor};
		border: 2px solid ${props => props.theme.contrast};
		border-radius: 50%;
		transition: transform 0.2s ease-in;
		transform: translateX(${props => props.themeSwitch ? '-15px' : '15px'});
	}
`