import { ReactNode } from 'react';
import {ThemeProvider as Provider} from 'styled-components';
import { Theme } from './theme';

interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeProvider = ({children}:ThemeProviderProps) => {
    return (
        <Provider theme={Theme}>
            {children}
        </Provider>
    )
}