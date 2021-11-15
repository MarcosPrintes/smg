import styled from "styled-components";

export const Container = styled.div`
    flex: 1;
    .header {
        height: 9vh;
    }
`;

export const FeedContent = styled.div`
    background: ${props => props.theme.colors.background};
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    height: 91vh;
    overflow-y: scroll;
    padding: 1rem;
`;