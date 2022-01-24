import {
  LinearProgress,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material"
import useSWR from "swr"
import fetcher from "../../utils/fetcher"

export default function ListEmployees(porps) {
  const { data, error } = useSWR("/api/employees", fetcher)
  if (error) return <div>failed to load</div>
  if (!data) return <LinearProgress></LinearProgress>

  return (
    <>
      <List>
        {data.map((row) => (
          <ListItem
            button
            key={row.id}
            component="a"
            href={"/employees/" + row.id}
          >
            <ListItemText
              primary={row.firstName + " " + row.lastName}
            ></ListItemText>
          </ListItem>
        ))}
      </List>
    </>
  )
}
