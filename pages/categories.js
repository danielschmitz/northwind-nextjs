import { Button, LinearProgress } from "@material-ui/core";
import PageApp from "../components/PageApp";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import EditIcon from '@material-ui/icons/Edit';
import useSWR from 'swr'
import { fetcher } from "../utils";

export default function Categories() {

    const actions = <>
        <Button size="small" color="primary">
            New Category
        </Button>
    </>

    const rows = [
        { id: 1, name: 'Hello', description: 'World' },
        { id: 2, name: 'XGrid', description: 'is Awesome' },
        { id: 3, name: 'Material-UI', description: 'is Amazing' },
    ];

    function CategoriesData() {
        const { data, error } = useSWR('/api/categories', fetcher)
        if (error) return <div>failed to load</div>
        if (!data) return <LinearProgress></LinearProgress>
        // render data
        return <TableCategories data={data}></TableCategories>
    }

    function TableCategories(props) {
        return <TableContainer>
            <Table aria-label="simple table" size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>id</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.data.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell component="th" scope="row">
                                {row.id}
                            </TableCell>
                            <TableCell >{row.name}</TableCell>
                            <TableCell >{row.description}</TableCell>
                            <TableCell align="right" width="10px">
                                <Button
                                    href="/signin"
                                ><EditIcon /></Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    }

    return (
        <PageApp title="Categories"
            actions={actions}
        >
            <CategoriesData></CategoriesData>
        </PageApp>
    )
}