import {useState} from 'react';
import {useTheme} from 'styled-components';

import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {Container} from './styles';

export const Search = () => {
    const theme = useTheme();
    const [isFocused, setIsFocused] = useState(false);

    function handleOnFocus(value:string) {
        setIsFocused(true);
    }

    function onHandleBlur(value:string) {
        if(!value) {
            setIsFocused(false)
        }
    }

    return (
        <Container className="search" isFocused={isFocused}>
            <input
                onBlur={(e) => onHandleBlur(e.target.value)}
                onFocus={(e) => handleOnFocus(e.target.value) }
                type="text"
                placeholder="Digite aqui uma palavra chave..."
            />
            <FontAwesomeIcon color={isFocused ? theme.colors.primary : theme.colors.onBackground} icon={faSearch} />
        </Container>
    )
}