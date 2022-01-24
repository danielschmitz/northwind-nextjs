import { useState } from "react"
import { mutate } from "swr"
import TableCategories from "./table"
import GridCategories from "./grid"
import Confirm from "../confirm"
import { Button, Fab, Hidden, Link } from "@mui/material"
import http from "../../utils/http"
import AddIcon from "@mui/icons-material/Add"

export default function Categories(props) {
  const [confirmDialogIsOpen, setConfirmDialogIsOpen] = useState(false)
  const [itemToDelete, setItemToDelete] = useState({})

  const handleEdit = (row) => {}

  const handleDelete = async (data) => {
    setItemToDelete(data)
    setConfirmDialogIsOpen(true)
  }

  const handleDeleteOk = async () => {
    try {
      await http.delete(`/api/categories/${itemToDelete.id}`)
      refreshData()
      setConfirmDialogIsOpen(false)
      setOpen(false)
    } catch (error) {
      console.log("ERROR", error)
    }
  }

  const refreshData = () => {
    mutate("/api/suppliers", (data) => data)
  }

  return <>
    <div class="fixedBottomRight">
      <Link href="/suppliers/new">
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Link>
    </div>
    <br />
    <br />
    <Hidden mdDown>
      <TableCategories
        onEdit={handleEdit}
        onDelete={handleDelete}
      ></TableCategories>
    </Hidden>
    <Hidden mdUp>
      <GridCategories
        onEdit={handleEdit}
        onDelete={handleDelete}
      ></GridCategories>
    </Hidden>
    <br />

    <Confirm
      open={confirmDialogIsOpen}
      onOk={handleDeleteOk}
      onCancel={() => setConfirmDialogIsOpen(false)}
    >
      Confirm delete supplier <i>{itemToDelete.contactName}</i> ?
    </Confirm>
  </>;
}
