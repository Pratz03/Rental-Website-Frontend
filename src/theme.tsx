import { createTheme, responsiveFontSizes } from "@mui/material";

const color = "#6e62e5";

const primary = {
  500: `${color}`, // Base color
};

const secondary = {
  500: `#4858a0`,
};

const theme = createTheme({
  palette: {
    primary: {
      main: primary[500],
    //   contrastText: "#ffffff",
    },
    secondary: {
      main: secondary[500],
    //   contrastText: "#333333",
    },
    text: {
        primary: "#333333",
        secondary: "#ffffff"
    },
  },
  typography: {
    allVariants: {
        color: "#333333",
    },
    h5: {
        fontWeight: 600
    }
  },
  components: {
    
  }
});

export default responsiveFontSizes(theme);
