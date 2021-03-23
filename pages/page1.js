import { Button, CardActions } from "@material-ui/core";
import PageApp from "../components/app/page";

export default function Page1() {

    const actions = <>
        <Button size="small" color="primary">
          Button 1
        </Button>
        <Button size="small" color="primary" component="a" href="/">
         Go Home!
        </Button>
    </>

    return (
        <PageApp title="Page 1 com buttons" 
        actions={actions}
        variant="outlined"
        >
            Content Page 1
        </PageApp>
    )
}