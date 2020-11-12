import { List, ListItem, ListItemText } from "@material-ui/core";

export default function MenuApp() {
    return (
        <List>
            <ListItem button key="1" component="a" href="/">
                <ListItemText primary="Home" />
            </ListItem>
            <ListItem button key="2" component="a" href="/page1">
                <ListItemText primary="Page 1" />
            </ListItem>
            <ListItem button key="3" component="a" href="/page2">
                <ListItemText primary="Page 2" />
            </ListItem>
        </List>
    )
}