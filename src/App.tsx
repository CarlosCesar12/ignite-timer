import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Router } from "./Routes/Router";

import { CycleProvider } from "./hooks/useCycle";

import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <CycleProvider>
          <Router />
        </CycleProvider>
        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  );
}
