import styled from "styled-components";

interface ContainerProps {
    isFocused: boolean;
}

export const Container = styled.div<ContainerProps>`
    display: flex;
    align-items: center;
    background: ${props => props.theme.colors.onPrimary};
    padding: .1rem 1.1rem;
    border-radius: 1rem;
    transition: all .3s ease;
    @media only screen and (min-width: 1025px) {
        width: ${props => props.isFocused ? '300px': '260px'} ;
    }

    margin-right: 1rem;

    input {
        border: unset;
        background: transparent;
        color: ${props => props.theme.colors.onBackground};
        padding: .5rem;
        flex: 1;
    }
`;