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
	justify-content: flex-start;
	align-items: center;
`
export const Title = styled.h1`
	color: ${props => props.theme.accentColor};
	font-size: 35px;
	margin: 0 0 0 20px;
`