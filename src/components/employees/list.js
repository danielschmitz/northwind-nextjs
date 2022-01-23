import { LinearProgress, List, ListItem, ListItemText } from "@material-ui/core"
import EditIcon from "@material-ui/icons/Edit"
import DeleteIcon from "@material-ui/icons/Delete"
import useSWR from "swr"
import fetcher from "../../utils/fetcher"

export default function ListEmployees(porps) {
  const { data, error } = useSWR("/api/employees", fetcher)
  if (error) return <div>failed to load</div>
  if (!data) return <LinearProgress></LinearProgress>

  return (
    <>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary="Foo"></ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </>
  )
}
