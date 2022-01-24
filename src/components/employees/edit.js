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

export default function EditEmployee(props) {
  const { data, error } = useSWR(`/api/employees/${props.id}`, fetcher)
  if (error) return <div>failed to load</div>
  if (!data) return <LinearProgress></LinearProgress>

  const {
    firstName,
    lastName,
    title,
    hireDate,
    birthDate,
    notes,
    reports_to,
    id,
  } = data

  const name = firstName + " " + lastName

  return (
    <>
      <Container maxWidth="md">Edit</Container>
    </>
  )
}
