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

export default function FormShippers(props) {
  useEffect(() => {
    setFormData(props.formData)
  }, [props.formData])

  const [formData, setFormData] = useState({})

  const handleContactNameChange = (event) => {
    setFormData({ ...formData, contactName: event.target.value })
  }

  const handleCompanyNameChange = (event) => {
    setFormData({ ...formData, companyName: event.target.value })
  }

  const handlePhoneChange = (event) => {
    setFormData({ ...formData, phone: event.target.value })
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
      <DialogTitle id="form-dialog-title">Shipper</DialogTitle>
      {props.error && <Alert severity="error">{props.error}</Alert>}
      {props.loading && <LinearProgress></LinearProgress>}
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="companyName"
          label="Company Name"
          value={formData.companyName}
          onChange={handleCompanyNameChange}
          type="text"
          fullWidth
        />
      </DialogContent>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="phone"
          value={formData.phone}
          onChange={handlePhoneChange}
          label="Phone"
          type="text"
          fullWidth
        />
      </DialogContent>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="contactName"
          value={formData.contactName}
          onChange={handleContactNameChange}
          label="Contact Name"
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
