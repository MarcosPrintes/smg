import styled from "styled-components";

export const Container = styled.div`
    margin-bottom: 1rem;
`

export const CheckboxContainer = styled.label`
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    cursor: pointer;
    margin-bottom: .5rem;

    span {
        color: ${props => props.theme.colors.onBackground};
        font-size: 1rem;
        pointer-events: none;
        margin-right: .5rem;
    }

    .check-icon {
        display: none;
    }

    input {
        margin-right: 10px;
        &:checked {
            ~ .check-icon {
                display: inline-block;
            }
            ~ span {
                font-weight: 900;
            }
        }
    }
`;

interface TypesProps {
    isActive: boolean;
}

export const Types = styled.div<TypesProps>`
    display: ${props => props.isActive ? 'block' : 'none'};
    padding-left: 15px;
    color: ${props => props.theme.colors.onBackground};
    font-size: 1.1rem;
`