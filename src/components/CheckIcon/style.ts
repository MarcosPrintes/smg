import styled from "styled-components";

interface CheckProps {
    checkedColor?: string;
}

export const Container = styled.label<CheckProps>`
    cursor: pointer;
    .check-icon {
        color: ${props => props.theme.colors.onBackground};
    }
    input {
        display: none;
        &:checked {
            & ~ .check-icon {
                color: ${props => props.checkedColor};
            }
        }
    }

`