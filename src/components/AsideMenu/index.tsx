import { useState } from "react";
import { useTheme } from "styled-components";
import {
  faYoutube,
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import { MentionsRequestParams } from "@/store/ducks/mentions/types";

import { Input } from "@/components/Input";
import { CheckIcon } from "@/components/CheckIcon";
import { CheckText } from "@/components/CheckText";
import { Button } from "@/components/Button";
import { Search } from "@/components/Search";
import { OrderButtons } from "@/components/OrderButtons";

import {
  Container,
  ContainerButton,
  CheckTextList,
  FlexContainer,
  Logo,
  MobileCloseMenu,
  Wrapper,
} from "./styles";

import { Category } from "@/store/ducks/categorys/types";

interface AsideMenuProps {
  menuMobileActive: boolean;
  onCloseMenu: () => void;
  onFilters: (filters: MentionsRequestParams) => void;
  categorysList: Category[];
  isLoading?: boolean;
}

export const AsideMenu = ({
  menuMobileActive,
  onCloseMenu,
  onFilters,
  categorysList,
  isLoading,
}: AsideMenuProps) => {
  const theme = useTheme();
  const [filters, setFilters] = useState<MentionsRequestParams>({});
  const [sources, setSources] = useState<string[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [beginDate, setBeginDate] = useState<string>(
    new Date().toISOString().split("T")[0]
  );

  function handleOnFilters() {
    onFilters(filters);
  }

  function handleSources(data: { active: boolean; value: string }) {
    const { active, value } = data;
    let oldSources = [...sources];

    let isOnSources = oldSources.indexOf(value);

    if (isOnSources === -1) {
      oldSources.push(value);
    } else {
      !active && oldSources.splice(isOnSources, 1);
    }

    setSources(oldSources);
    setFilters({ ...filters, source: oldSources.join(",") });
  }

  return (
    <Container menuMobileActive={menuMobileActive}>
      <MobileCloseMenu onClick={onCloseMenu}>x</MobileCloseMenu>
      <Wrapper>
        <Logo />
        <div className="filters">
          <Search />
          <OrderButtons />
          <span> Filtros</span>
          <div>
            <Input
              label="Início"
              type="date"
              id="start-date"
              value={beginDate}
              onChange={(e) =>
                setFilters({ ...filters, begin_date: e.target.value })
              }
            />
            <Input
              label="Final"
              type="date"
              id="end-date"
              onChange={
                (e) => console.log("data", e.target.value)
                // setFilters({ ...filters, end_date: e.target.value })
              }
            />
          </div>
          <FlexContainer>
            <CheckIcon
              checkedColor={theme.colors.facebook}
              name="source[]"
              value="facebook"
              id="filter-facebook"
              icon={faFacebook}
              onChangeHandler={(active) =>
                handleSources({ active: active, value: "facebook" })
              }
            />
            <CheckIcon
              checkedColor={theme.colors.instagram}
              name="source[]"
              value="instagram"
              id="filter-instagram"
              icon={faInstagram}
              onChangeHandler={(active) =>
                handleSources({ active, value: "instagram" })
              }
            />
            <CheckIcon
              checkedColor={theme.colors.twitter}
              name="source[]"
              value="twitter"
              id="filter-twitter"
              icon={faTwitter}
              onChangeHandler={(active) =>
                handleSources({ active, value: "twitter" })
              }
            />
            <CheckIcon
              checkedColor={theme.colors.youtube}
              name="source[]"
              value="youtube"
              id="filter-youtube"
              icon={faYoutube}
              onChangeHandler={(active) =>
                handleSources({ active, value: "youtube" })
              }
            />
          </FlexContainer>
          <div>
            <CheckTextList>
              {categorysList.length > 0 &&
                categorysList.map((option) => (
                  <CheckText
                    key={option._id}
                    option={option}
                  />
                ))}
            </CheckTextList>
          </div>
        </div>
      </Wrapper>
      <ContainerButton>
        <Button isLoading={isLoading} type="button" title="Pesquisar" onClick={handleOnFilters} />
      </ContainerButton>
    </Container>
  );
};
