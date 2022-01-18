import { useState } from "react";
import { useTheme } from "styled-components";
import {
  faYoutube,
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import { faWindowClose } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { MentionsRequestParams } from "@/store/ducks/mentions/types";

import { Input } from "@/components/Input";
import { CheckIcon } from "@/components/CheckIcon";
import { CheckText } from "@/components/CheckText";
import { Button } from "@/components/Button";
import { Search } from "@/components/Search";
import { OrderButtons, OrderItem } from "@/components/OrderButtons";

import {
  Container,
  ContainerButton,
  CheckTextList,
  FlexContainer,
  Logo,
  MobileCloseMenu,
  Wrapper,
  WrapperCheckTextList,
} from "./styles";

import { Category } from "@/store/ducks/categorys/types";

interface AsideMenuProps {
  menuMobileActive: boolean;
  onCloseMenu: () => void;
  onClickFilters: (filters: MentionsRequestParams) => void;
  categorysList: Category[];
  isLoading?: boolean;
  setOrderButton: (data: OrderItem) => void;
}

export const AsideMenu = ({
  menuMobileActive,
  onCloseMenu,
  onClickFilters,
  categorysList,
  isLoading,
  setOrderButton,
}: AsideMenuProps) => {
  const theme = useTheme();
  const [filters, setFilters] = useState<MentionsRequestParams>({});
  const [sources, setSources] = useState<string[]>([]);
  const [categorys, setCategorys] = useState<string[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [beginDate, setBeginDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");

  function handleOnFilters() {
    onClickFilters(filters);
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

    setFilters({ ...filters, source: oldSources.join(",") });
    setSources(oldSources);
  }

  function handleCategorys(data: { active: boolean; value: string }) {
    const { active, value } = data;
    let oldCategorys = [...categorys];

    let isOnCategorys = oldCategorys.indexOf(value);

    if (isOnCategorys === -1) {
      oldCategorys.push(value);
    } else {
      !active && oldCategorys.splice(isOnCategorys, 1);
    }

    setCategorys(oldCategorys);
    setFilters({ ...filters, category: oldCategorys.join(",") });
  }

  function onHandleSearch(value: string) {
    console.log("value", value);
    setFilters({ ...filters, keyword: value });
  }

  return (
    <Container menuMobileActive={menuMobileActive}>
      <MobileCloseMenu type="button" onClick={onCloseMenu}>
        <FontAwesomeIcon color={theme.colors.primary} icon={faWindowClose} />
      </MobileCloseMenu>
      <Wrapper>
        <Logo />
        <div className="filters">
          <Search
            isOnAsideMenu
            onHandleSearch={(value) => onHandleSearch(value)}
          />
          <OrderButtons onOrder={(data) => setOrderButton(data)} />
          <span> Filtros</span>
          <div>
            <Input
              label="Início"
              type="date"
              id="start-date"
              value={beginDate}
              style={{ marginRight: "10px" }}
              onChange={(e) => {
                setBeginDate(e.target.value);
                setFilters({ ...filters, begin_date: e.target.value });
              }}
            />
            <Input
              label="Final"
              type="date"
              id="end-date"
              value={endDate}
              onChange={(e) => {
                setEndDate(e.target.value);
                setFilters({ ...filters, end_date: e.target.value });
              }}
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
          <WrapperCheckTextList>
            <CheckTextList>
              {categorysList.length > 0 &&
                categorysList.map((option) => (
                  <CheckText
                    onHandleChecked={(active) =>
                      handleCategorys({ active, value: option.name })
                    }
                    key={option._id}
                    option={option}
                  />
                ))}
            </CheckTextList>
          </WrapperCheckTextList>
        </div>
      </Wrapper>
      <ContainerButton>
        <Button
          isLoading={isLoading}
          type="button"
          title="Pesquisar"
          onClick={handleOnFilters}
        />
      </ContainerButton>
    </Container>
  );
};
