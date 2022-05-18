import React, { useState } from "react"
// import logo from "./logo.svg"
// import "./App.css"
import { createTheme, StyledEngineProvider, ThemeProvider } from "@mui/material/styles"
import themesConfig from "./styles/themeConfig"
import { CssBaseline } from "@mui/material"
import SelectCard from "./components/SelectCard/SelectCard"

const theme = createTheme(themesConfig.light)

function App() {
  const [value, setValue] = useState(false)

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <>
          <CssBaseline />
          <div style={{ padding: 30 }}>
            <SelectCard isSelected={value} onSelect={() => setValue(!value)} />
          </div>
          {/*<div className="App">*/}
          {/*  <header className="App-header">*/}
          {/*    <img src={logo} className="App-logo" alt="logo" />*/}
          {/*    <p>*/}
          {/*      Edit <code>src/App.tsx</code> and save to reload.*/}
          {/*    </p>*/}
          {/*    <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">*/}
          {/*      Learn React*/}
          {/*    </a>*/}
          {/*  </header>*/}
          {/*</div>*/}
        </>
      </ThemeProvider>
    </StyledEngineProvider>
  )
}

export default App
