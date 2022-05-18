import { ThemeOptions } from "@mui/material"

export const defaultAppFonts = ["Plus Jakarta Sans", "Roboto"]

const defaultTypography: ThemeOptions["typography"] = {
  fontFamily: defaultAppFonts.join(",")
}

const lightThemeConfig: ThemeOptions = {
  typography: defaultTypography,
  components: {
    MuiSvgIcon: {
      styleOverrides: {
        fontSizeSmall: {
          fontSize: 18
        }
      }
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          marginLeft: 0
        },
        label: {
          fontSize: 14
        }
      }
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          padding: 8
        }
      }
    }
  },
  palette: {
    mode: "light",
    text: {
      primary: "#1B1B1B",
      secondary: "#616161"
    },
    primary: {
      light: "#65E9D9",
      main: "#21B6A8",
      dark: "#3D8479",
      contrastText: "#fff"
    },
    grey: {
      200: "#EFEFEF",
      300: "#BFBFBF"
    }
  }
}

const themesConfig = {
  light: lightThemeConfig
}

export default themesConfig
