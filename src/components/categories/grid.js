import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  LinearProgress,
  Typography,
} from "@material-ui/core";
import useSWR from "swr";
import fetcher from "../../utils/fetcher";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

export default function GridCategories(props) {
  const { data, error } = useSWR("/api/categories", fetcher);
  if (error) return <div>failed to load</div>;
  if (!data) return <LinearProgress></LinearProgress>;

  return (
    <div>
      <Grid container spacing={1}>
        {data.map((row) => (
          <Grid item xs={12} sm={4} key={row.id}>
            <Card variant="outlined" bgcolor="gray">
              <CardContent>
                <Typography gutterBottom variant="body1" component="p">
                  {row.name}
                </Typography>
                <Typography gutterBottom variant="caption" component="p">
                  {row.description}
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
  );
}
