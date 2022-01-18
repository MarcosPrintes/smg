import styled from "styled-components";

import logo from "../../assets/images/logo-color.png";
interface ContainerProps {
  menuMobileActive: boolean;
}

export const Container = styled.form<ContainerProps>`
  width: 305px;
  background: ${(props) => props.theme.colors.onPrimary};
  height: 100vh;
  padding: 15px;
  overflow-y: scroll;
  box-shadow: 1px 0px 20px rgba(0, 0, 0, 10%);
  position: relative;
  display: flex;
  flex-direction: column;
  scrollbar-color: ${(props) => props.theme.colors.primary} transparent;
  scrollbar-width: thin;

  /* width */
  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.colors.primary};
    border-radius: 30px;
  }

  .search,
  .order-buttons {
    display: none;
  }
  .filters {
    > span {
      color: ${(props) => props.theme.colors.onBackground};
      display: block;
      font-weight: 600;
      margin-bottom: 1rem;
    }
  }

  @media only screen and (max-width: 1024px) {
    transition: all 0.3s ease;
    position: fixed;
    top: 0;
    left: 0;
    transform: ${(props) =>
      props.menuMobileActive ? "translateX(0%)" : "translateX(-100%)"};
    width: 100%;
    max-width: initial;
    height: 100vh;
    z-index: 4;
    overflow-y: initial;
    display: flex;
    flex-direction: column;
    padding: 0;

    .search {
      margin-bottom: 30px;
      display: flex;
    }
    .order-buttons {
      display: flex;
      flex-direction: column;
      margin-bottom: 30px;
      align-items: flex-start;

      &__list {
        flex-direction: column;
        display: flex;
        .order-button {
          margin-left: 0;
          margin-top: 1rem;
        }
      }
    }
  }
`;

export const Wrapper = styled.div`
  flex: 1;
  @media only screen and (max-width: 1024px) {
    overflow-y: scroll;
    padding: 15px 15px 0 15px;
    ::-webkit-scrollbar {
      width: 5px;
    }

    ::-webkit-scrollbar-track {
      background: transparent;
    }
    ::-webkit-scrollbar-thumb {
      background: ${(props) => props.theme.colors.primary};
      border-radius: 30px;
    }
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 3rem 0;
`;

export const WrapperCheckTextList = styled.div`
  max-height: 380px;
  overflow-y: scroll;
  scrollbar-color: ${(props) => props.theme.colors.primary} transparent;
  scrollbar-width: thin;

  /* width */
  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.colors.primary};
    border-radius: 30px;
  }
`;

export const CheckTextList = styled.ul`
  .check-text {
    margin-bottom: 1.5rem;
  }
`;

export const ContainerButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0.5rem;
`;

export const MobileCloseMenu = styled.button.attrs({
  type: "button",
})`
  display: none;
  background: transparent;
  border: unset;
  position: absolute;
  top: 15px;
  right: 25px;
  font-size: 1.5rem;
  cursor: pointer;
  @media screen and (max-width: 1024px) {
    display: block;
  }
`;

export const Logo = styled.img.attrs((props) => ({
  src: logo,
}))`
  margin-bottom: 2rem;
  @media screen and (max-width: 1024px) {
    width: 200px;
  }
`;
