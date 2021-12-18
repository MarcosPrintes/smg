import styled from "styled-components";

export const Container = styled.div`
  background: ${(props) => props.theme.colors.onPrimary};
  height: max-content;
  width: 100%;
  max-width: 640px;
  margin: 0 auto;
  border-radius: 0.5rem;
  cursor: pointer;
`;

export const Thumb = styled.div`
  position: relative;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  overflow: hidden;
  min-height: 250px;
  .social-brand {
    position: absolute;
    top: 10px;
    left: 10px;
    z-index: 1;
  }
`;

interface RateItemProps {
  tooltip: string;
}

export const RateItem = styled.button<RateItemProps>`
  border: unset;
  background: transparent;
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease;
  .tooltip {
    visibility: hidden;
    width: 130px;
    background-color: ${(props) => props.theme.colors.onBackground};
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 5px 0;
    position: absolute;
    z-index: 1;
    bottom: 125%;
    left: 50%;
    margin-left: -60px;
    opacity: 0;
    transition: opacity 0.3s;
    padding: 0.5rem 0.2rem;
    &::after {
      content: "";
      position: absolute;
      top: 100%;
      left: 50%;
      margin-left: -5px;
      border-width: 5px;
      border-style: solid;
      border-color: ${(props) => props.theme.colors.onBackground} transparent
        transparent transparent;
    }
  }

  span {
    color: ${(props) => props.theme.colors.onBackground};
    display: inline-block;
    margin-left: 0.5rem;
  }
  .rate-icon {
    color: ${(props) => props.theme.colors.onBackground};
  }

  &:hover {
    color: ${(props) => props.theme.colors.primary};
    span {
      color: ${(props) => props.theme.colors.primary};
    }
    .tooltip {
      visibility: initial;
      opacity: 1;
    }
  }
`;

export const ContentText = styled.div`
  padding: 1rem;
`;

export const Text = styled.p`
  color: ${(props) => props.theme.colors.onBackground};
`;

export const Rates = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 1rem 0;
`;

export const BottomCard = styled.div`
  border-top: 1px solid #e7ebef;
  padding: 1.5rem 1rem;
  color: ${(props) => props.theme.colors.onBackground};
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div:first-of-type {
    display: flex;
    align-items: center;
    span {
      margin-left: 0.5rem;
    }
  }
`;

export const AuthorName = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  max-width: 320px;
`;
