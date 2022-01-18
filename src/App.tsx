import { ThemeProvider } from "@/theme/ThemeProvider";

import { ToastContainer } from "react-toastify";

import { AppRoutes } from "@/routes";

function App() {
  return (
    <>
      <ThemeProvider>
        <ToastContainer />
        <AppRoutes />
      </ThemeProvider>
    </>
  );
}

export default App;
