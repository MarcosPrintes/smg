import styled from "styled-components";

interface CheckProps {
    checkedColor?: string;
}

export const Container = styled.label<CheckProps>`
    cursor: pointer;
    display: flex;
    align-items: center;
    .check-icon {
        color: ${props => props.theme.colors.onBackground};
    }
    input { 
        margin: 0 10px;
        &:checked {
            & ~ .check-icon {
                color: ${props => props.checkedColor};
            }
        }
    }

`