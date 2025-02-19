import { createTheme, responsiveFontSizes } from "@mui/material";

const color = "#6e62e5";

const primary = {
  500: `${color}`, // Base color
};

const secondary = {
  500: `#4858a0`,
};

const contrastTextPrimary = `#ffffff`;

const contrastTextSecondary = `#ffffff`;

const theme = createTheme({
  palette: {
    primary: {
      main: primary[500],
      contrastText: contrastTextPrimary,
    },
    secondary: {
      main: secondary[500],
      contrastText: contrastTextSecondary,
    },
    text: {
        primary: "#333333",
        secondary: "#ffffff",
    },
  },
  typography: {
    allVariants: {
        color: "#333333",
    },
    h6: {
        fontWeight: 600
    }
  },
  components: {
    MuiTextField: {
      defaultProps: {
        variant: "outlined", // Set default to outlined
        color: "secondary", // Set default color
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: secondary[500],
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: secondary[500],
            borderWidth: "2px",
          },
        },
      },
    },
  },
});

export default responsiveFontSizes(theme);
