import {AsideMenu} from "@/components/AsideMenu";
import { Feed } from '@/components/Feed';

import { Container } from './styles';

export const App = () => {
  return (
  <Container>
      <AsideMenu />
      <Feed />
  </Container>
  );
}

export default App;
