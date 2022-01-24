import {
  LinearProgress,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material"
import EditIcon from "@mui/icons-material/Edit"
import DeleteIcon from "@mui/icons-material/Delete"
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
