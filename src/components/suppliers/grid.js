import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  LinearProgress,
  Typography,
} from "@material-ui/core"
import useSWR from "swr"
import fetcher from "../../utils/fetcher"

export default function GridSuppliers(props) {
  const { data, error } = useSWR("/api/suppliers", fetcher)
  if (error) return <div>failed to load</div>
  if (!data) return <LinearProgress></LinearProgress>

  return (
    <div>
      <Grid container spacing={1}>
        {data.map((row) => (
          <Grid item xs={12} sm={4} key={row.id}>
            <Card variant="outlined" bgcolor="gray">
              <CardContent>
                <Typography gutterBottom variant="body1" component="p">
                  {row.contactName}
                </Typography>
                <Typography gutterBottom variant="body2" component="p">
                  {row.companyName}
                </Typography>
                <Typography gutterBottom variant="caption" component="p">
                  {row.contactTitle}
                </Typography>
              </CardContent>
              <CardActions>
                <Button onClick={() => props.onEdit(row)} color="primary">
                  Editar
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}
