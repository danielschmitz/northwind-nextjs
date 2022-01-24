import React, { useEffect, useState } from "react"
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import DialogTitle from "@mui/material/DialogTitle"
import Alert from "@mui/lab/Alert"
import { LinearProgress } from "@mui/material"
import DivFlex from "../div-flex"

export default function FormCategories(props) {
  useEffect(() => {
    setFormData(props.formData)
  }, [props.formData])

  const [formData, setFormData] = useState({})

  const handleNameChange = (event) => {
    setFormData({ ...formData, name: event.target.value })
  }

  const handleDescriptionChange = (event) => {
    setFormData({ ...formData, description: event.target.value })
  }

  const handleDelete = () => {
    props.onDelete(props.formData)
  }

  return (
    <Dialog
      open={props.open || false}
      aria-labelledby="form-dialog-title"
      fullWidth={true}
      maxWidth="sm"
    >
      <DialogTitle id="form-dialog-title">Category</DialogTitle>
      {props.error && <Alert severity="error">{props.error}</Alert>}
      {props.loading && <LinearProgress></LinearProgress>}
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Name"
          value={formData.name}
          onChange={handleNameChange}
          type="text"
          fullWidth
        />
      </DialogContent>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="description"
          value={formData.description}
          onChange={handleDescriptionChange}
          label="Description"
          type="text"
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        {props.formData.id ? (
          <Button onClick={handleDelete} color="secondary">
            Delete
          </Button>
        ) : (
          ""
        )}
        <DivFlex />
        <Button onClick={props.onClose}>Cancel</Button>
        <Button
          color="primary"
          onClick={() => props.onSave(formData)}
          disabled={props.loading}
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  )
}
