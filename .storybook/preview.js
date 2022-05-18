import { createTheme, StyledEngineProvider, ThemeProvider } from "@mui/material/styles"
import { CssBaseline } from "@mui/material"
import themesConfig from "../src/styles/themeConfig"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
}

const muiTheme = createTheme(themesConfig.light)

const withMuiTheme = (Story) => (
  <StyledEngineProvider injectFirst>
    <ThemeProvider theme={muiTheme}>
      <>
        <CssBaseline />
        <Story />
      </>
    </ThemeProvider>
  </StyledEngineProvider>
)

export const decorators = [withMuiTheme]
