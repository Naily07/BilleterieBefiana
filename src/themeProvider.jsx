import theme from "./style/theme";
import { ThemeProvider } from "@mui/material";

export default function CustomThemeProvider({children}) {
    return (
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    );
}
