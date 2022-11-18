import { createTheme } from "@mui/material/styles";
import themeData from "../../Customize/configs/PrintTheme.json";

// navbar theme
const BasePrintTheme = createTheme(themeData);

const PrintTheme = createTheme(BasePrintTheme, {
  palette: {
    info: {
      main: BasePrintTheme.palette.secondary.main
    }
  }
});

export default PrintTheme;
