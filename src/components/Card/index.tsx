import { useTheme } from "styled-components";

import { parseISO, formatDistance } from "date-fns";
import { ptBR } from "date-fns/locale";

import {
  faFacebook,
  faYoutube,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import {
  faHeart,
  faComment,
  faShare,
  faUser,
  faEye,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  AuthorName,
  BottomCard,
  Container,
  ContentText,
  Rates,
  RateItem,
  Thumb,
  Text,
} from "./styles";
import { Mention } from "@/store/ducks/mentions/types";
interface CradProps {
  mention: Mention;
}
export const Card = ({ mention }: CradProps) => {
  const theme = useTheme();

  const socials = {
    facebook: {
      color: theme.colors["facebook"],
      icon: faFacebook,
    },
    youtube: {
      color: theme.colors["youtube"],
      icon: faYoutube,
    },
    twitter: {
      color: theme.colors["twitter"],
      icon: faTwitter,
    },
    instagram: {
      color: theme.colors["instagram"],
      icon: faInstagram,
    },
  };

  function mediaClick() {
    let { title, link, attachment, source } = mention;

    const windowUrl = source === "twitter" ? attachment?.url : link;

    const w = 700;
    const h = 600;
    const left = window.screen.width / 2 - w / 2;
    const top = window.screen.height / 2 - h / 2;
    window.open(
      windowUrl,
      title,
      `toolbar=no, location=no, directories=no, status=no,
        menubar=no, resizable=yes, copyhistory=no, 
        width=${w}, height=${h}, top=${top}, left=${left}`
    );
  }

  function getPhotoUrl(url: string): string {
    const newUrl = url.replace("//", "");

    return `https://${newUrl}`;
  }

  // function getYoutubeIframeUrl(url: string) {
  //   const newUrl = url.split("v=");
  //   const youtubeCode = newUrl[1];
  //   return `https://www.youtube.com/embed/${youtubeCode}`;
  // }

  function getDate() {
    const date = parseISO(mention.created_at);
    const distance = formatDistance(date, Date.now(), { locale: ptBR });

    return `Há ${distance}`;
  }

  return (
    <Container className="post" onClick={() => mediaClick()}>
      <Thumb>
        <FontAwesomeIcon
          size="2x"
          className="social-brand"
          color={!mention.source ? "#ccc" : socials[mention.source].color}
          icon={!mention.source ? faGlobe : socials[mention.source].icon}
        />

        {mention?.attachment &&
        mention.attachment.image_url &&
        mention.source === "facebook" ? (
          <img
            src={getPhotoUrl(mention?.attachment.image_url)}
            alt={mention?.attachment.title}
          />
        ) : null}

        {mention.source === "youtube" && mention.attachment?.image_url ? (
          <img
            src={mention?.attachment.image_url}
            alt={mention?.attachment.title}
          />
        ) : null}

        {mention.source === "twitter" && mention.attachment?.image_url ? (
          <img
            src={mention?.attachment.image_url}
            alt={mention?.attachment.title}
          />
        ) : null}
      </Thumb>
      <ContentText>
        <Text> {mention.message} </Text>
        <Rates>
          {mention.statistics.like ? (
            <RateItem tooltip="Curtidas">
              <FontAwesomeIcon icon={faHeart} />
              <span>{mention.statistics.like}</span>
              <div className="tooltip">Curtidas</div>
            </RateItem>
          ) : null}

          {mention.statistics.view ? (
            <RateItem tooltip="Visualizações">
              <FontAwesomeIcon icon={faEye} />
              <span>{mention.statistics.view}</span>
              <div className="tooltip">Visualizações</div>
            </RateItem>
          ) : null}

          {mention.statistics.comments ? (
            <RateItem tooltip="Comentáros">
              <FontAwesomeIcon icon={faComment} />
              <span> {mention.statistics.comments} </span>
              <div className="tooltip">Comentáros</div>
            </RateItem>
          ) : null}

          <RateItem tooltip="Compartilhamentos">
            <FontAwesomeIcon className="rate-icon" icon={faShare} />
            <span> 0 </span>
            <div className="tooltip">Compartilhamentos</div>
          </RateItem>
        </Rates>
      </ContentText>
      <BottomCard>
        <div>
          {mention.author.picture_url ? (
            <img src={mention.author.picture_url} alt="" />
          ) : (
            <FontAwesomeIcon className="avatar" icon={faUser} />
          )}

          <AuthorName title={mention.author.name}>
            {mention.author.name ? mention.author.name : mention.title}
          </AuthorName>
        </div>
        <div>{mention.created_at && <span>{getDate()}</span>}</div>
      </BottomCard>
    </Container>
  );
};
