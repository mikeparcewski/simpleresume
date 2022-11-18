import { createTheme } from "@mui/material/styles";
import themeData from "../Customize/configs/Theme.json";

// navbar theme
const BaseSiteTheme = createTheme(themeData);

const SiteTheme = createTheme(BaseSiteTheme, {
  palette: {
    info: {
      main: BaseSiteTheme.palette.secondary.main
    }
  }
});

export default SiteTheme;
