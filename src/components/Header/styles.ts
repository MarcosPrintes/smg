import styled from "styled-components";

export const Container = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    background: ${props => props.theme.colors.background};
    box-shadow: 7px 0px 5px 0px rgba(0,0,0,.2);
    position: relative;
`

export const SearchContainer = styled.div`
    display: flex;
    align-items: center;

    @media only screen and (max-width: 1024px) {
        display: none;
    }
`;

export const ContainerUserAction = styled.div``

export const UserName = styled.span`
    color: ${props => props.theme.colors.onBackground};
    margin-right: 1rem;
`
export const MobileButton = styled.button`
    border: unset;
    background: transparent;
    display: none;
    cursor: pointer;
    @media only screen and (max-width: 1024px) {
        display: block;
    }
`;