import React, { useEffect, useState } from "react"
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogTitle from "@material-ui/core/DialogTitle"
import Alert from "@material-ui/lab/Alert"
import { LinearProgress } from "@material-ui/core"
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
