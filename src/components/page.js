import { CardActions, CardContent, Paper, Typography } from "@material-ui/core";


/**
 * 
 * @param {*} props.title Titulo
 * @param {*} props.actions Titulo
 */
export default function Page(props) {
    return (
        <div className="contentApp">
            <Paper variant='outlined'>
                {props.title && <CardContent>
                    <Typography variant="h5" component="h2">
                        {props.title}
                    </Typography>
                </CardContent>
                }
                <CardContent>
                    {props.children}
                </CardContent>
                {props.actions && <CardActions>
                    {props.actions}
                </CardActions>
                }
            </Paper>
        </div>
    )
}