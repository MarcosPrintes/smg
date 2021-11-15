import { ThemeProvider } from '@/theme/ThemeProvider';

import {App as AppContent} from '@/components/App';

function App() {
  return (<>
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  </>
  );
}

export default App;
