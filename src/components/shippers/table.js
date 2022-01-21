import { Button, LinearProgress } from "@material-ui/core"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableContainer from "@material-ui/core/TableContainer"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import EditIcon from "@material-ui/icons/Edit"
import DeleteIcon from "@material-ui/icons/Delete"
import useSWR from "swr"
import { fetcher } from "../../utils/fetcher"

export default function TableShippers(props) {
  const { data, error } = useSWR("/api/shippers", fetcher)
  if (error) return <div>failed to load</div>
  if (!data) return <LinearProgress></LinearProgress>

  return (
    <TableContainer>
      <Table aria-label="simple table" size="small">
        <TableHead>
          <TableRow>
            <TableCell>id</TableCell>
            <TableCell>Contact Name</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Company Name</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell>{row.contactName}</TableCell>
              <TableCell>{row.phone}</TableCell>
              <TableCell>{row.companyName}</TableCell>
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
