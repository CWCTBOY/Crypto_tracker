import Router from "./Router";
import { GlobalLayout } from "./styles/Global/globalLayout";
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './theme';
import { useState } from "react";
// import { ReactQueryDevtools } from 'react-query/devtools';
function App() {
  const [isDark, setIsDark] = useState(false);
  const toggleTheme = () => setIsDark(current => !current);
  return (
    <ThemeProvider theme={isDark ? lightTheme : darkTheme}>
      <GlobalLayout />
      <Router themeSwitch={isDark} themeToggle={toggleTheme} />
    </ThemeProvider>
  )
}

export default App;