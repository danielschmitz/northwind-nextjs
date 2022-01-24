import { useState } from "react"
import { mutate } from "swr"
import TableShippers from "./table"
import GridShippers from "./grid"
import FormShippers from "./form"
import Confirm from "../confirm"
import { Button, Hidden } from "@mui/material"
import http from "../../utils/http"
import HTTP_METHOD from "../../utils/http_method"

export default function Shippers(props) {
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
      contactName: "",
      phone: "",
      companyName: "",
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
        url: data.id ? `/api/shippers/${data.id}` : "/api/shippers",
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
      await http.delete(`/api/shippers/${itemToDelete.id}`)
      refreshData()
      setConfirmDialogIsOpen(false)
      setOpen(false)
    } catch (error) {
      console.log("ERROR", error)
    }
  }

  const refreshData = () => {
    mutate("/api/shippers", (data) => data)
  }

  return <>
    <Hidden mdDown>
      <TableShippers
        onEdit={handleEdit}
        onDelete={handleDelete}
      ></TableShippers>
    </Hidden>
    <Hidden mdUp>
      <GridShippers
        onEdit={handleEdit}
        onDelete={handleDelete}
      ></GridShippers>
    </Hidden>
    <FormShippers
      open={open}
      onClose={handleClose}
      onSave={handleSave}
      onDelete={handleDelete}
      formData={formData}
      error={error}
      loading={loading}
    ></FormShippers>
    <br />
    <Button size="small" color="primary" onClick={handleNew}>
      New Shipper
    </Button>
    <Confirm
      open={confirmDialogIsOpen}
      onOk={handleDeleteOk}
      onCancel={() => setConfirmDialogIsOpen(false)}
    >
      Confirm delete shipper <i>{itemToDelete.contactName}</i> ?
    </Confirm>
  </>;
}
