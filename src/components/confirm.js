import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
  });

export default function Confirm(props) {


    return (
        <div>
          <Dialog
            open={props.open}
            fullWidth={true}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            TransitionComponent={Transition}
          >
            <DialogTitle id="alert-dialog-title"><ErrorOutlineIcon color="secondary"/> Confirmation</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
               {props.children}
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={props.onCancel} color="primary">
                Cancel
              </Button>
              <Button onClick={props.onOk} color="secondary" autoFocus>
                Ok
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      );
}