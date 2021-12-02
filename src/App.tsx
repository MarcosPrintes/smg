import { ThemeProvider } from "@/theme/ThemeProvider";

import { AppRoutes } from "@/routes";

function App() {
  return (
    <>
      <ThemeProvider>
        <AppRoutes />
      </ThemeProvider>
    </>
  );
}

export default App;
