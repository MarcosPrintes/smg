import styled from "styled-components";

export const Container = styled.label`
    display: flex;
    cursor: pointer;
    align-items: center;
    margin-bottom: 15px;
    span {
        width: 50px;
        color: ${props => props.theme.colors.onBackground}
    }
    input {
        background: #ffffff;
        border: unset;
        padding: .8rem 1rem;
        border-radius: 1rem;
        color: ${props => props.theme.colors.onBackground}
    }
`