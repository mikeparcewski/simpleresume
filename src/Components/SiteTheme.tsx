import { createTheme } from "@mui/material/styles";
import themeData from "../Customize/configs/Theme.json";

// navbar theme
let SiteTheme = createTheme(themeData);

SiteTheme = createTheme(SiteTheme, {
  palette: {
    info: {
      main: SiteTheme.palette.secondary.main,
    },
  },
});

export default SiteTheme;
