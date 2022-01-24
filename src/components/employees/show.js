import {
  Avatar,
  Button,
  Container,
  LinearProgress,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material"
import {
  AccountCircle,
  DateRange,
  Description,
  ArrowRight,
} from "@mui/icons-material"

import useSWR from "swr"
import fetcher from "../../utils/fetcher"
import Link from "next/link"

export default function ShowEmployee(props) {
  const { data, error } = useSWR(`/api/employees/${props.id}`, fetcher)
  if (error) return <div>failed to load</div>
  if (!data) return <LinearProgress></LinearProgress>

  const { firstName, lastName, title, notes, reports_to, id } = data

  const name = firstName + " " + lastName
  const birthDate = "Birth: " + new Date(data.birthDate).toLocaleDateString()
  const hireDate = "Hire: " + new Date(data.hireDate).toLocaleDateString()

  return (
    <>
      <Container maxWidth="md">
        <List>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <AccountCircle />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={name} secondary={title} />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <DateRange />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={birthDate} secondary={hireDate} />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <Description />
              </Avatar>
            </ListItemAvatar>
            <ListItemText secondary={notes} />
          </ListItem>
          <ListItem>
            <Link href={"/employees/edit/" + id}>
              <Button>Edit</Button>
            </Link>
            &nbsp;
            <Link href={"/employees/delete/" + id}>
              <Button>Delete</Button>
            </Link>
          </ListItem>
        </List>
      </Container>
    </>
  )
}
