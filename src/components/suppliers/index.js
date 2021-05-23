import { useState } from "react"
import { mutate } from "swr"
import TableCategories from "./table"
import GridCategories from "./grid"
import FormCategories from "./form"
import Confirm from "../confirm"
import { Button, Hidden } from "@material-ui/core"
import http from "../../utils/http"
import HTTP_METHOD from "../../utils/http_method"

export default function Categories(props) {
  const [open, setOpen] = useState(false)
  const [confirmDialogIsOpen, setConfirmDialogIsOpen] = useState(false)
  const [itemToDelete, setItemToDelete] = useState({})
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [formData, setFormData] = useState({})

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setError(false)
    setOpen(false)
  }

  const handleNew = () => {
    setFormData({
      name: "",
      description: "",
    })
    handleOpen()
  }

  const handleEdit = (row) => {
    setFormData(row)
    handleOpen()
  }

  const handleSave = async (data) => {
    console.log("save", data)
    setError(false)
    setLoading(true)
    try {
      await http({
        method: data.id ? HTTP_METHOD.PUT : HTTP_METHOD.POST,
        url: data.id ? `/api/categories/${data.id}` : "/api/categories",
        data,
      })
      refreshData()
      setLoading(false)
      handleClose()
    } catch (error) {
      setLoading(false)
      if (error.response && error.response.data) {
        setError(error.response.data)
      }
    }
  }

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
    mutate("/api/categories", (data) => data)
  }

  return (
    <>
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
      <FormCategories
        open={open}
        onClose={handleClose}
        onSave={handleSave}
        onDelete={handleDelete}
        formData={formData}
        error={error}
        loading={loading}
      ></FormCategories>
      <br />
      <Button size="small" color="primary" onClick={handleNew}>
        New Supplier
      </Button>
      <Confirm
        open={confirmDialogIsOpen}
        onOk={handleDeleteOk}
        onCancel={() => setConfirmDialogIsOpen(false)}
      >
        Confirm delete supplier <i>{itemToDelete.name}</i> ?
      </Confirm>
    </>
  )
}
