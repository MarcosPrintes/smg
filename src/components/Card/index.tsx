import {useTheme} from 'styled-components';

import {
    faFacebook,
    faInstagram,
    faTwitter,
    faYoutube,
} from '@fortawesome/free-brands-svg-icons';

import {
    faHeart,
    faComment,
    faShare,
    faUser
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
    BottomCard,
    Container,
    ContentText,
    Rates,
    RateItem,
    Thumb,
    Text
} from './styles';
interface CradProps {
    text: string;
}

export const Card = ({text}:CradProps) => {
    const theme = useTheme();

    return (
        <Container className="post">
            <Thumb>
                <FontAwesomeIcon
                    size="2x"
                    className="social-brand"
                    color={theme.colors["facebook"]}
                    icon={faFacebook}
                />
                <img src="https://picsum.photos/700/300" alt="" />
            </Thumb>
            <ContentText>
                <Text> {text} </Text>
                <Rates>
                    <RateItem tooltip="Curtidas">
                        <FontAwesomeIcon icon={faHeart} />
                        <span> 0 </span>
                        <div className="tooltip">Curtidas</div>
                    </RateItem>
                    <RateItem tooltip="Comentáros">
                        <FontAwesomeIcon icon={faComment} />
                        <span> 0 </span>
                        <div className="tooltip">Comentáros</div>
                    </RateItem>
                    <RateItem tooltip="Compartilhamentos">
                        <FontAwesomeIcon className="rate-icon" icon={faShare} />
                        <span> 0 </span>
                        <div className="tooltip">Compartilhamentos</div>
                    </RateItem>
                </Rates>
            </ContentText>
            <BottomCard>
                <div>
                    <FontAwesomeIcon className="avatar" icon={faUser} />
                    <span>Ministério Público</span>
                </div>
                <div>
                    <span>Há 2 anos</span>
                </div>
            </BottomCard>
        </Container>
    )
}