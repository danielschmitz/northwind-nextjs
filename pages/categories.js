import { Button, LinearProgress } from "@material-ui/core";
import PageApp from "../components/PageApp";
import TableCategories from "../components/categories/Table";
import FormCategories from "../components/categories/Form";
import { useState } from "react";

export default function Categories() {

    const [open,setOpen] = useState(false);
    const [formData,setFormData] = useState({})

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const handleNew = () => {
        setFormData(
            {
                name: '', description: ''
            }
        )
        handleOpen()
    }

    const handleEdit = row => {
        setFormData(row)
        handleOpen()
    }

    const handleSave = formData => {
        console.log("save", formData)
        alert('todo')
        handleClose();
    }

    const actions = <>
        <Button size="small" color="primary" onClick={handleNew}>
            New Category
        </Button>
    </>

    return (
        <PageApp title="Categories" actions={actions}>
            <TableCategories
                onEdit={handleEdit}
            ></TableCategories>
            <FormCategories 
                open={open} 
                onClose={handleClose}
                onSave={handleSave}
                formData={formData}
                ></FormCategories>
        </PageApp>
    )
}