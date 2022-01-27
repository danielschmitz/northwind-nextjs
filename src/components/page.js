import { CardActions, CardContent, Paper, Typography } from "@mui/material"

/*
A component with title, content and action areas
*/
export default function Page(props) {
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
    </div>
  )
}
