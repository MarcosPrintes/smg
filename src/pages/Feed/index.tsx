import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AsideMenu } from "@/components/AsideMenu";
import { Feed } from "@/components/Feed";
import { useState } from "react";
import { Header } from "@/components/Header";

import { State } from "@/store";
import { Mention, MentionsRequestParams } from "@/store/ducks/mentions/types";
import { actionsGetMentions } from "@/store/ducks/mentions/actions";
import { actionGetCategorys } from "@/store/ducks/categorys/actions";
import { Container } from "./styles";

export const FeedPage = () => {
  const dispatch = useDispatch();
  const { list, loading, page } = useSelector((state: State) => state.mentions);
  const categorys = useSelector((state: State) => state.categorys);

  const [isMenuMobileActive, setIsMenuMobileActive] = useState(false);
  const [mentionsList, setMentionsList] = useState<Mention[]>([]);
  const [requestParams, setRequestParams] = useState<MentionsRequestParams>({
    page: 1,
    per_page: 10,
    // begin_date: new Date().toISOString().substring(0, 10),
  });

  useEffect(() => {
    if (page === 1) {
      setMentionsList(list);
    } else {
      setMentionsList((prevState) => [...prevState, ...list]);
    }
  }, [list, page]);

  function handleOnInfiniteScroll() {
    if (requestParams.page) {
      setRequestParams({ ...requestParams, page: requestParams?.page + 1 });
    }
  }

  function handleAsideFilters(data: MentionsRequestParams) {
    setRequestParams({ ...requestParams, ...data, page: 1 });
  }

  useEffect(() => {
    dispatch(actionsGetMentions(requestParams));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [requestParams]);

  useEffect(() => {
    dispatch(actionGetCategorys());
  }, [dispatch]);

  return (
    <Container>
      <AsideMenu
        onCloseMenu={() => setIsMenuMobileActive(false)}
        menuMobileActive={isMenuMobileActive}
        onFilters={(asideFilters) => handleAsideFilters(asideFilters)}
        categorysList={categorys.list}
        isLoading={loading}
      />
      <div style={{ flex: 1 }}>
        <Header onMenuMobileClick={() => setIsMenuMobileActive(true)} />
        <Feed
          mentions={mentionsList}
          onInfiteScroll={() => handleOnInfiniteScroll()}
          isLoading={loading}
        />
      </div>
    </Container>
  );
};

export default FeedPage;
