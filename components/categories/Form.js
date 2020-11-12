import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


export default function FormCategories(props) {

    useEffect(() => {
        setFormData(props.formData)
      },  [props.formData]);

    const [formData, setFormData] = useState({})

    const handleNameChange = event => {
        setFormData({...formData, name: event.target.value})
    }

    const handleDescriptionChange = event => {
        setFormData({...formData, description: event.target.value})
    }

    return <Dialog
        open={props.open || false}
        aria-labelledby="form-dialog-title"
        fullWidth={true}
        maxWidth='sm'    >
        <DialogTitle id="form-dialog-title">Category</DialogTitle>
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
            <Button onClick={props.onClose}>
                Cancel
          </Button>
            <Button color="primary" onClick={()=>props.onSave(formData)}>
                Save
          </Button>
        </DialogActions>
    </Dialog>
}