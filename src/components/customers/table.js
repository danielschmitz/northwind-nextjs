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

export default function TableCustomers(props) {
  const { data, error } = useSWR("/api/customers", fetcher)
  if (error) return <div>failed to load</div>
  if (!data) return <LinearProgress></LinearProgress>

  return (
    <TableContainer>
      <Table aria-label="simple table" size="small">
        <TableHead>
          <TableRow>
            <TableCell>id</TableCell>
            <TableCell>Contact Name</TableCell>
            <TableCell>Contact Title</TableCell>
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
              <TableCell>{row.contactTitle}</TableCell>
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
