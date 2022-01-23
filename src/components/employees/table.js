import {
  Button,
  LinearProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core"
import EditIcon from "@material-ui/icons/Edit"
import DeleteIcon from "@material-ui/icons/Delete"
import useSWR from "swr"
import fetcher from "../../utils/fetcher"

export default function TableEmployees(porps) {
  const { data, error } = useSWR("/api/employees", fetcher)
  if (error) return <div>failed to load</div>
  if (!data) return <LinearProgress></LinearProgress>

  const onEdit = (row) => {
    console.log("onEdit", row)
  }

  const onDelete = (row) => {
    console.log("onDelete", row)
  }

  return (
    <TableContainer>
      <Table aria-label="simple table" size="small">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id}>
              <TableCell>
                {row.firstName} {row.lastName}
              </TableCell>
              <TableCell>{row.phone}</TableCell>
              <TableCell align="right">
                <Button onClick={() => onEdit(row)}>
                  <EditIcon />
                </Button>
                <Button onClick={() => onDelete(row)}>
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
