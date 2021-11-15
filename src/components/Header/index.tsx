import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import {Button} from '@/components/Button';

import {Container, SearchContainer, ContainerUserAction, UserName} from './styles';
import { Search } from '../Search';

export const Header = () => {
    return (
        <Container>
            <SearchContainer>
                <Search />
                <div>
                    <span> Ordenar por</span>
                </div>
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