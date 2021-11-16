import {AsideMenu} from "@/components/AsideMenu";
import { Feed } from '@/components/Feed';
import { useState } from "react";
import { Header } from "../Header";

import { Container } from './styles';

export const App = () => {
  const [isMenuMobileActive, setIsMenuMobileActive] = useState(false);

  return (
  <Container>
      <AsideMenu onCloseMenu={() => setIsMenuMobileActive(false)} menuMobileActive={isMenuMobileActive} />
      <div style={{flex: 1}}>
        <Header onMenuMobileClick={() => setIsMenuMobileActive(true) } />
        <Feed onInfiteScroll={() => console.log("request API") } />
      </div>
  </Container>
  );
}

export default App;
