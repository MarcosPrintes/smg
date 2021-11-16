import {Button} from '@/components/Button';

import {Container, SearchContainer, ContainerUserAction, UserName, MobileButton} from './styles';
import { Search } from '@/components/Search';
import { OrderButtons } from '@/components/OrderButtons';

import menuIcon from '@/assets/images/icons/menu_icon.svg';
interface HeaderProps {
    onMenuMobileClick: () => void;
}

export const Header = ({onMenuMobileClick}:HeaderProps) => {

    return (
        <Container className="header">
            <MobileButton onClick={onMenuMobileClick}>
                <img src={menuIcon} alt="Menu mobile" />
            </MobileButton>
            <SearchContainer>
                <Search />
                <OrderButtons />
            </SearchContainer>
            <ContainerUserAction>
                    <UserName>
                        Marcos
                    </UserName>
                    <Button title="Sair" />
                </ContainerUserAction>
        </Container>
    )
}