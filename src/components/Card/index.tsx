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
  faUser,
  faEye,
  faGlobe,
  faThumbsUp,
  faCommentAlt,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { ReactComponent as YoutubeLike } from "../../assets/images/icons/youtube-like.svg";
import { ReactComponent as YoutubeShare } from "../../assets/images/icons/youtube-share.svg";
// import { ReactComponent as FacebookLike } from "../../assets/images/icons/facebook-like.svg";
import { ReactComponent as InstagramLike } from "../../assets/images/icons/instagram-like.svg";
import { ReactComponent as InstagramComment } from "../../assets/images/icons/instagram-comment.svg";
import { ReactComponent as TwitterLikes } from "../../assets/images/icons/twitter-likes.svg";
import { ReactComponent as TwitterRetweets } from "../../assets/images/icons/twitter-retwitter.svg";

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
    let { title, link } = mention;

    const w = 700;
    const h = 600;
    const left = window.screen.width / 2 - w / 2;
    const top = window.screen.height / 2 - h / 2;
    window.open(
      link,
      title,
      `toolbar=no, location=no, directories=no, status=no,
        menubar=no, resizable=yes, copyhistory=no, 
        width=${w}, height=${h}, top=${top}, left=${left}`
    );
  }

  function getDate() {
    const date = parseISO(mention.created_at);
    const distance = formatDistance(date, Date.now(), { locale: ptBR });

    return `Há ${distance}`;
  }

  return (
    <Container className="post" onClick={() => mediaClick()}>
      <Thumb
        hasThumbnail={mention?.attachment && mention?.attachment?.image_url}
      >
        <FontAwesomeIcon
          size="2x"
          className="social-brand"
          color={!mention.source ? "#ccc" : socials[mention.source].color}
          icon={!mention.source ? faGlobe : socials[mention.source].icon}
        />
        {mention?.attachment ? (
          <img
            src={mention?.attachment.image_url}
            alt={mention?.attachment.title}
          />
        ) : null}
      </Thumb>
      <ContentText>
        <Text> {mention.message} </Text>
        <Rates>
          {mention.statistics.likes ? (
            <RateItem tooltip="Curtidas">
              {mention.source === "facebook" && (
                <FontAwesomeIcon color="#54667a" icon={faThumbsUp} />
              )}

              {mention.source === "youtube" && (
                <YoutubeLike color="#54667a" width={20} height={20} />
              )}

              {mention.source === "instagram" && (
                <InstagramLike color="#54667a" width={20} height={20} />
              )}

              {mention.source === "twitter" && (
                <TwitterLikes color="#54667a" width={20} height={20} />
              )}

              <span>{mention.statistics.likes}</span>
              <div className="tooltip">Curtidas</div>
            </RateItem>
          ) : null}

          {mention.statistics.views ? (
            <RateItem tooltip="Visualizações">
              <FontAwesomeIcon color="#54667a" icon={faEye} />
              <span>{mention.statistics.views}</span>
              <div className="tooltip">Visualizações</div>
            </RateItem>
          ) : null}

          {mention.statistics.shares ? (
            <RateItem tooltip="Curtidas">
              {mention.source === "youtube" && (
                <YoutubeShare color="#54667a" width={20} height={20} />
              )}

              {mention.source === "facebook" && (
                <YoutubeShare color="#54667a" width={20} height={20} />
              )}

              {mention.source === "twitter" && (
                <TwitterRetweets color="#54667a" width={20} height={20} />
              )}

              <span>{mention.statistics.shares}</span>
              <div className="tooltip">
                {mention.source === "twitter"
                  ? "Retweets"
                  : "Compartilhamentos"}
              </div>
            </RateItem>
          ) : null}
          {mention.statistics.comments ? (
            <RateItem tooltip="Curtidas">
              {mention.source === "facebook" && (
                <FontAwesomeIcon color="#54667a" icon={faCommentAlt} />
              )}

              {mention.source === "youtube" && (
                <FontAwesomeIcon color="#54667a" icon={faCommentAlt} />
              )}

              {mention.source === "instagram" && (
                <InstagramComment width={20} height={20} />
              )}
              <span>{mention.statistics.comments}</span>
              <div className="tooltip">Comentários</div>
            </RateItem>
          ) : null}
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
