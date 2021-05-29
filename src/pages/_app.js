import React, { useState } from "react"

import TopBar from "../components/topbar"
import "../styles/globals.css"

import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles"
import Switch from "@material-ui/core/Switch"

function MyApp({ Component, pageProps }) {
  const [darkState, setDarkState] = useState(true)
  const palletType = darkState ? "dark" : "light"
  const darkTheme = createMuiTheme({
    palette: {
      type: palletType,
    },
  })

  const handleThemeChange = () => {
    setDarkState(!darkState)
  }

  return (
    <>
      <MuiThemeProvider theme={darkTheme}>
        <Switch checked={darkState} onChange={handleThemeChange} />
        <TopBar titulo="Northwind App"></TopBar>
        <Component {...pageProps} />
      </MuiThemeProvider>
    </>
  )
}

export default MyApp
