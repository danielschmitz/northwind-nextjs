import { List, ListItem, ListItemText } from "@mui/material"
import menu from "../menu"

export default function Menu() {
  return (
    <List>
      {menu.map((item) => (
        <ListItem button key={item.id} component="a" href={item.href}>
          <ListItemText primary={item.title} />
        </ListItem>
      ))}
    </List>
  )
}
