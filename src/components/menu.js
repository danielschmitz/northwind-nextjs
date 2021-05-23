import { List, ListItem, ListItemText } from "@material-ui/core"
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
