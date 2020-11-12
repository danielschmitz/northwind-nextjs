import { Button } from "@material-ui/core";
import PageApp from "../components/PageApp";

export default function Categories() {

    const actions = <>
        <Button size="small" color="primary">
         New Category
        </Button>
    </>

    return (
        <PageApp title="Categories" 
        actions={actions}
        >
            Categories
        </PageApp>
    )
}