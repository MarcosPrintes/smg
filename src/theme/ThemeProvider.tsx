import { ReactNode } from 'react';
import {ThemeProvider as Provider} from 'styled-components';

import { Theme } from './theme';
import {GlobalStyles} from '@/theme/global';
interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeProvider = ({children}:ThemeProviderProps) => {
    return (
        <Provider theme={Theme}>
            <GlobalStyles />
            {children}
        </Provider>
    )
}