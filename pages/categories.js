import { Button, LinearProgress } from "@material-ui/core";
import PageApp from "../components/PageApp";
import TableCategories from "../components/categories/Table";
import FormCategories from "../components/categories/Form";

export default function Categories() {

    const actions = <>
        <Button size="small" color="primary">
            New Category
        </Button>
    </>

    return (
        <PageApp title="Categories" actions={actions}>
            <TableCategories></TableCategories>
            
        </PageApp>
    )
}