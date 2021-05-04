import "react-perfect-scrollbar/dist/css/styles.css";
import { useRoutes } from "react-router-dom";
import { GlobalStyles, ThemeProvider } from "@material-ui/core";
import theme from "../src/theme/index";
import routes from "../src/routes";
import "../src/mixins/chartjs";

const App = () => {
  const routing = useRoutes(routes);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {routing}
    </ThemeProvider>
  );
};

export default App;
