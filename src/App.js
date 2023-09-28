import {CssBaseline, StyledEngineProvider} from "@mui/material";
import NavigationScroll from "./admin/layout/NavigationScroll";
// routing
import ThemeRoutes from './admin/routes';
import {BrowserRouter} from "react-router-dom";
import config from "./config";
import {ThemeProvider} from "@mui/material/styles";
import themes from "./admin/themes";
import {useSelector} from "react-redux";

function App() {

    const customization = useSelector((state) => state.customization);
  return (
    <BrowserRouter basename={config.basename}>
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={themes(customization)}>
                <CssBaseline />
                <NavigationScroll>
                    <ThemeRoutes />
                </NavigationScroll>
            </ThemeProvider>
        </StyledEngineProvider>
    </BrowserRouter>
  );
}

export default App;
