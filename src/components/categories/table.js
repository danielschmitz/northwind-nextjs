import { Button, LinearProgress } from "@mui/material"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import EditIcon from "@mui/icons-material/Edit"
import DeleteIcon from "@mui/icons-material/Delete"
import useSWR from "swr"
import fetcher from "../../utils/fetcher"

export default function TableCategories(props) {
  console.log(1, data)
  const { data, error } = useSWR("/api/categories", fetcher)
  console.log(2, data)
  if (error) return <div>failed to load</div>
  console.log(3, data)
  if (!data) return <LinearProgress></LinearProgress>
  console.log(4, data)

  return (
    <TableContainer>
      <Table aria-label="simple table" size="small">
        <TableHead>
          <TableRow>
            <TableCell>id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Description</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.description}</TableCell>
              <TableCell align="right">
                <Button onClick={() => props.onEdit(row)}>
                  <EditIcon />
                </Button>
                <Button onClick={() => props.onDelete(row)}>
                  <DeleteIcon />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
