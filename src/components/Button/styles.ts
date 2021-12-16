import styled from "styled-components";
import { darken } from "polished";

export const Container = styled.button`
    background: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.onPrimary};
    border: unset;
    border-radius: .25rem;
    padding: .8rem 1.5rem;
    font-size: 1.1rem;
    cursor: pointer;
    transition: all .3s ease;
    opacity: ${(props) => (props.disabled ? 0.6 : 1)};
    &:hover {
        background: ${(props) => darken(0.1, props.theme.colors.primary)};
    }

    svg circle{
        stroke: #fff;
    }
`;
