import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  height: 100vh;
  position: relative;
`;

export const FeedContent = styled.div`
  background: ${(props) => props.theme.colors.background};
  height: 100vh;
  overflow-y: scroll;
  padding: 2rem;
  padding-bottom: 130px;

  .my-masonry-grid {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: auto;
  }
  .my-masonry-grid_column {
    background-clip: padding-box;
    margin: 0 15px;
    position: relative;
  }

  .my-masonry-grid_column .post {
    margin-bottom: 30px;
  }
`;

export const FeedbackMessage = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #41b3f9;
`;
