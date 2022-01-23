import styled from "styled-components";
import { darken } from "polished";

export const Container = styled.div`
  display: flex;
  align-items: center;

  span {
    margin-right: 1rem;
    font-weight: 600;
    color: ${(props) => props.theme.colors.onBackground};
  }
`;

export const OrderButton = styled.button.attrs({
  type: "button",
})`
  border: 1px solid ${(props) => props.theme.colors.onBackground};
  color: ${(props) => props.theme.colors.onBackground};
  border-radius: 0.25rem;
  background: transparent;
  padding: 0.2rem 0.3rem;
  margin-bottom: 3px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;

  .order-button-icon {
    margin-left: 0.5rem;
  }

  & {
    margin-right: 0.5rem;
  }

  &:hover {
    background: ${(props) => props.theme.colors.onBackground};
    color: ${(props) => props.theme.colors.onPrimary};
  }

  &.is-active {
    border: 1px solid ${(props) => props.theme.colors.primary};
    background: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.onPrimary};

    &:hover {
      background: ${(props) => darken(0.2, props.theme.colors.primary)};
      border-color: ${(props) => darken(0.2, props.theme.colors.primary)};
    }
  }
`;
