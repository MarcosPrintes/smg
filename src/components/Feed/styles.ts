import styled from "styled-components";

export const Container = styled.div`
    flex: 1;
    height: 100vh;
`;

export const FeedContent = styled.div`
    background: ${props => props.theme.colors.background};
    height: 100vh;
    overflow-y: scroll;
    padding: 2rem;
    padding-bottom: 30px;

    .my-masonry-grid {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        width: auto;
    }
    .my-masonry-grid_column {
        background-clip: padding-box;
        margin: 0 15px;
    }

    .my-masonry-grid_column .post {
        margin-bottom: 30px;
    }
`;

