import { createTheme } from "@mui/material/styles";
import themeData from "../Customize/configs/PrintTheme.json";

// navbar theme
let PrintTheme = createTheme(themeData);

PrintTheme = createTheme(PrintTheme, {
  palette: {
    info: {
      main: PrintTheme.palette.secondary.main,
    },
  },
});

export default PrintTheme;
