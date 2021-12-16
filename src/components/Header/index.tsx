import { useDispatch } from "react-redux";

import { actionLogout } from "@/store/ducks/user/actions";

import {
  Container,
  SearchContainer,
  ContainerUserAction,
  MobileButton,
} from "./styles";
import { Search } from "@/components/Search";
import { OrderButtons } from "@/components/OrderButtons";
import { Button } from "@/components/Button";

import menuIcon from "@/assets/images/icons/menu_icon.svg";
interface HeaderProps {
  onMenuMobileClick: () => void;
  onHandleSearch: (value: string) => void;
}

export const Header = ({ onMenuMobileClick, onHandleSearch }: HeaderProps) => {
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(actionLogout());
  }
  return (
    <Container className="header">
      <MobileButton onClick={onMenuMobileClick}>
        <img src={menuIcon} alt="Menu mobile" />
      </MobileButton>
      <SearchContainer>
        <Search onHandleSearch={(value) => onHandleSearch(value)} />
        <OrderButtons />
      </SearchContainer>
      <ContainerUserAction>
        {/* <UserName>Marcos</UserName> */}
        <Button title="Sair" onClick={handleLogout} />
      </ContainerUserAction>
    </Container>
  );
};
