import styled from "styled-components";
import {darken} from 'polished';

export const Container = styled.button`
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.onPrimary};
    border: unset;
    border-radius: .25rem;
    padding: .8rem 1.5rem;
    font-size: 1.1rem;
    cursor: pointer;
    transition: background .3s ease;
    &:hover {
        background: ${props => darken(.1, props.theme.colors.primary)};
    }
`;