import { useTheme } from "styled-components";
import moment from "moment";
import "moment/locale/pt-br";

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

moment.locale("pt-br");

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

  function handleClickDetail() {
    // if (this.popup && !this.popup.closed) this.popup.close();

    // http://localhost:3001/detail/facebook/1424939994449908%2Fposts%2F2657317241212171
    // https://www.facebook.com/detail/facebook/1424939994449908/posts/2657317241212171

    let { title, link } = mention;

    // if (["twitter"].indexOf(source) > -1) {
    //   link = link
    //     .replace("www.", "")
    //     .replace(/^https?\:\/\//i, "https://mobile.");
    // } else if (source == "facebook") {
    //   link = link.split(".com/")[1];
    //   link =
    //     window.location.origin + "/detail/facebook/" + encodeURIComponent(link);
    // }

    const w = 1200;
    const h = 900;
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

  function mediaClick() {
    const { source, attachment } = mention;

    if (source === "youtube" || (attachment && attachment.type === "video")) {
      // this.setState({ showPlayer: true });
      return;
    }

    handleClickDetail();
  }

  function getPhotoUrl(url: string): string {
    const newUrl = url.replace("//", "");

    return `https://${newUrl}`;
  }

  function getYoutubeIframeUrl(url: string) {
    const newUrl = url.split("v=");
    const youtubeCode = newUrl[1];
    return `https://www.youtube.com/embed/${youtubeCode}`;
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

        {mention.source === "youtube" ? (
          <iframe
            title={mention.title}
            src={getYoutubeIframeUrl(mention.link)}
            allowFullScreen
            loading="eager"
          ></iframe>
        ) : null}

        {/* <svg
          className="youtube-play"
          height="90px"
          viewBox="0 0 68 48"
          width="90px"
        >
          <path
            className="ytp-large-play-button-bg"
            d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z"
            fill="#212121"
            fillOpacity="0.8"
          ></path>
          <path d="M 45,24 27,14 27,34" fill="#fff"></path>
        </svg>

        <FontAwesomeIcon
          size="2x"
          className="social-brand"
          color="#212121"
          icon={faPlay}
        /> */}
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
            {mention.source === "youtube" ? mention.title : mention.author.name}
          </AuthorName>
        </div>
        <div>
          {mention.date && <span>{moment(mention.date).fromNow()}</span>}
        </div>
      </BottomCard>
    </Container>
  );
};
