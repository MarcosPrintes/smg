import { ThemeProvider } from '@/theme/ThemeProvider';

import {AsideMenu} from "@/components/AsideMenu";

function App() {
  return (<>
    <ThemeProvider>
      <AsideMenu />
    </ThemeProvider>
  </>
  );
}

export default App;
