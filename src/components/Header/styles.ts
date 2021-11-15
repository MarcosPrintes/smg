import styled from "styled-components";

export const Container = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    background: ${props => props.theme.colors.background};
`

export const SearchContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const ContainerUserAction = styled.div``

export const UserName = styled.span`
    color: ${props => props.theme.colors.onBackground};
    margin-right: 1rem;
`