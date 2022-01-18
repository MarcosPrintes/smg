import { useEffect, useRef, useCallback } from "react";

import Masonry from "react-masonry-css";

import { Card } from "@/components/Card";

import { Container, FeedContent, FeedbackMessage } from "./styles";
import { Mention } from "@/store/ducks/mentions/types";

import { ReactComponent as Spinner } from "@/assets/images/icons/spinner.svg";
interface FeedProps {
  onInfiteScroll: () => void;
  mentions: Mention[];
  isLoading: boolean;
}

export const Feed = ({
  onInfiteScroll,
  mentions,
  isLoading = false,
}: FeedProps) => {
  const feedref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const feed = feedref.current;
    function handleScrool(event: Event) {
      if (feed) {
        const scrollHeightMinusScrollTop =
          feed.scrollHeight - feed.scrollTop - 1;
        const feedHeight = feed.offsetHeight;
        if (scrollHeightMinusScrollTop - feedHeight < 1) {
          onInfiteScroll();
        }
      }
    }
    feed?.addEventListener("scroll", handleScrool);
    return () => {
      feed?.removeEventListener("scroll", handleScrool);
    };
  }, [onInfiteScroll]);

  const listSize = useCallback(() => {
    return mentions.length > 0;
  }, [mentions.length]);

  return (
    <Container>
      {!isLoading && mentions.length === 0 ? (
        <FeedbackMessage>Nada encontrado</FeedbackMessage>
      ) : null}
      <FeedContent ref={feedref} className="feed-content">
        <Masonry
          breakpointCols={{ default: 4, 1580: 3, 1480: 2, 1024: 1 }}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {mentions.map((mention) => (
            <Card key={mention.postid} mention={mention} />
          ))}
        </Masonry>

        {isLoading && (
          <Spinner
            style={{
              width: 70,
              height: 70,
              margin: "0 auto",
              display: "block",
              position: listSize() ? "relative" : "absolute",
              left: listSize() ? "auto" : "50%",
              top: listSize() ? "auto" : "50%",
              transform: listSize() ? "unset" : "tr()anslate(-50%, -100%)",
            }}
          />
        )}
      </FeedContent>
    </Container>
  );
};
