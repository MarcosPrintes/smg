import {useTheme} from 'styled-components'
import {
    faYoutube,
    faFacebook,
    faInstagram,
    faTwitter,
} from '@fortawesome/free-brands-svg-icons';

import { Input } from '@/components/Input';
import { CheckIcon } from '@/components/CheckIcon';
import { CheckText } from '@/components/CheckText';
import { Button } from '@/components/Button';
import { Search } from '@/components/Search';
import { OrderButtons } from '@/components/OrderButtons';

import {
    Container,
    ContainerButton,
    CheckTextList,
    FlexContainer,
    Logo,
    MobileCloseMenu,
    Wrapper,
} from './styles';

import asideMenuOptions from '../../constants/asideMenuOptions.json';

interface AsideMenuProps {
    menuMobileActive: boolean;
    onCloseMenu: () => void;
}

export const AsideMenu = ({menuMobileActive, onCloseMenu}:AsideMenuProps) => {
    const theme = useTheme();

    return (
        <Container menuMobileActive={menuMobileActive}>
            <MobileCloseMenu onClick={onCloseMenu}>
                x
            </MobileCloseMenu>
            <Wrapper>
                <Logo />
                <div className="filters">
                    <Search />
                    <OrderButtons />
                    <span> Filtros</span>
                    <div>
                        <Input label="Início" type="date" id="start-date" />
                        <Input label="Final" type="date" id="end-date" />
                    </div>
                    <FlexContainer>
                        <CheckIcon checkedColor={theme.colors.facebook} name="facebook" id="filter-facebook" icon={faFacebook} />
                        <CheckIcon checkedColor={theme.colors.instagram} name="" id="filter-instagram" icon={faInstagram} />
                        <CheckIcon checkedColor={theme.colors.twiter} name="" id="filter-twitter" icon={faTwitter} />
                        <CheckIcon checkedColor={theme.colors.youtube} name="" id="filter-youtube" icon={faYoutube} />
                    </FlexContainer>
                    <div>
                        <CheckTextList>
                            {asideMenuOptions.map(option => (
                                <CheckText key={option.id} option={option} />
                            ))}
                        </CheckTextList>
                    </div>
                </div>
            </Wrapper>
            <ContainerButton>
                <Button type="button" title="Pesquisar" />
            </ContainerButton>
        </Container>
    )
}