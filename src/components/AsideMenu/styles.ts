import styled from 'styled-components';

import logo from '../../assets/images/logo-color.png';

export const Container =  styled.div`
    max-width: 260px;
    background: ${props => props.theme.colors.background};
    height: 100vh;
    padding: 15px;

    .filters {
        > span {
            color: ${props => props.theme.colors.onBackground};
            display: block;
            font-weight: 900;
            margin-bottom: 1rem;
        }
    }
`;

export const FlexContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 3rem 0;
`

export const CheckTextList = styled.ul`
    .check-text {
        margin-bottom: 1.5rem;
    }
`;

export const ContainerButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 3rem;
`

export const Logo = styled.img.attrs((props) => ({
    src: logo,
  }))`
  margin-bottom: 2rem;
`;
