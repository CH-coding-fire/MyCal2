import styled from 'styled-components'

interface StyledButtonProps {
    variant?: 'outline' | 'solid';
}
export const StyledButton = styled.button<StyledButtonProps>`
    background-color: ${(props)=> props.variant === 'outline'?"#FF":'#4caf50'};
    color: ${props=>(props.variant === 'outline'? '#4caf50':'#FFF')};
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    cursor:pointer
`
