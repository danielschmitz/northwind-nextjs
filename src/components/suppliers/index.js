import { useState } from "react"
import { mutate } from "swr"
import TableCategories from "./table"
import GridCategories from "./grid"
import Confirm from "../confirm"
import { Button, Hidden, Link } from "@material-ui/core"
import http from "../../utils/http"

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

  return (
    <>
      <Link href="/suppliers/new">
        <Button size="small" color="primary">
          New Supplier
        </Button>
      </Link>
      <br />
      <br />
      <Hidden smDown>
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
    </>
  )
}
