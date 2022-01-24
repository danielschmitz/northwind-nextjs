import React, { useState } from "react"
import { makeStyles } from "@mui/styles"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import IconButton from "@mui/material/IconButton"
import Drawer from "@mui/material/Drawer"
import MenuList from "./menu"
import { Menu } from "@mui/icons-material"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {},
  title: {
    flexGrow: 1,
  },
  list: {
    width: 250,
  },
}))

export default function TopBar(props) {
  const classes = useStyles()
  const [anchor, setAnchor] = useState(false)

  const list = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <MenuList></MenuList>
    </div>
  )

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return
    }
    setAnchor(open)
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            size="large"
          >
            <Menu />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {props.titulo}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={anchor} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
    </div>
  )
}
