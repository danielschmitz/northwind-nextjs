import { Button, LinearProgress } from "@material-ui/core";
import PageApp from "../components/app/Page";
import TableCategories from "../components/categories/Table";
import FormCategories from "../components/categories/Form";
import { useState } from "react";
import { http, METHOD } from "../utils";
import { mutate } from "swr";

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

    const handleSave = async data => {
        console.log("save", data)

        try {
            const result = await http(
                {
                    method: data.id ? METHOD.PUT : METHOD.POST,
                    url: data.id ? `/api/category/${data.id}` : '/api/category',
                    data
                }
            )
            mutate('/api/categories')
            handleClose();
        } catch (error) {
            console.log("ERROR", error)
            // tratar msg de erro
        }       
       
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