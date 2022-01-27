import {
  CardActions,
  CardContent,
  CircularProgress,
  Modal,
  Paper,
  Typography,
} from "@mui/material"
import { Box } from "@mui/system"
import { useEffect, useState } from "react"

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
}

/*
A component with title, content and action areas
*/
export default function Page(props) {
  useEffect(() => {
    setLoading(props.loading)
  }, [props.loading])

  const [loading, setLoading] = useState(false)

  return (
    <div className="contentApp">
      <Paper variant="outlined">
        {props.title && (
          <CardContent>
            <Typography variant="h5" component="h2">
              {props.title}
            </Typography>
          </CardContent>
        )}
        <CardContent>{props.children}</CardContent>
        {props.Actions && <CardActions>{props.Actions}</CardActions>}
      </Paper>
      <Modal open={loading}>
        <Box style={modalStyle}>
          <CircularProgress />
        </Box>
      </Modal>
    </div>
  )
}
