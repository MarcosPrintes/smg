import styled from "styled-components";
import { darken } from 'polished';

export const Container = styled.div`
    display: flex;
    align-items: center;
    span {
        margin-right: 1rem;
        font-weight: 900;
        color: ${props => props.theme.colors.onBackground}
    }
`;


export const OrderButton = styled.button`
    border: 1px solid ${props => props.theme.colors.onBackground};
    color: ${props =>  props.theme.colors.onBackground};
    border-radius: .25rem;
    background: transparent;
    padding: .2rem .3rem;
    cursor: pointer;
    transition: all .3s ease;
    display: inline-flex;
    align-items: center;

    .order-button-icon {
        margin-left: .5rem;
    }

    & + & {
        margin-left: 1rem;
    }

    &:hover {
        background: ${props => props.theme.colors.onBackground};
        color: ${props => props.theme.colors.onPrimary};
    }

    &.is-active {
        border: 1px solid ${props => props.theme.colors.primary};
        background: ${props => props.theme.colors.primary};
        color: ${props =>  props.theme.colors.onPrimary};

        &:hover {
            background: ${props => darken(.2, props.theme.colors.primary)};
            border-color: ${props => darken(.2, props.theme.colors.primary)};
        }
    }
`