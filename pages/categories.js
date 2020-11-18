import { Button, LinearProgress } from "@material-ui/core";
import PageApp from "../components/app/Page";
import TableCategories from "../components/categories/Table";
import FormCategories from "../components/categories/Form";
import { useState } from "react";
import { http, METHOD } from "../utils";
import { mutate } from "swr";
import Confirm from "../components/Confirm";

export default function Categories() {

    const [open, setOpen] = useState(false);
    const [confirmDialogIsOpen, setConfirmDialogIsOpen] = useState(false);
    const [itemToDelete, setItemToDelete] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [formData, setFormData] = useState({})

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setError(false)
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
        setError(false)
        setLoading(true)
        try {
            const result = await http(
                {
                    method: data.id ? METHOD.PUT : METHOD.POST,
                    url: data.id ? `/api/category/${data.id}` : '/api/category',
                    data
                }
            )
            mutate('/api/categories')
            setLoading(false)
            handleClose();
        } catch (error) {
            console.log("ERROR", error)
            setLoading(false)
            if (error.response && error.response.data) {
                setError(error.response.data)
            }
        }
    }

    const handleDelete = async data => {
        setItemToDelete(data)
        setConfirmDialogIsOpen(true)
    }

    const handleDeleteOk = async () => {
        try {
            await http.delete(`/api/category/${itemToDelete.id}`)
            mutate('/api/categories')
            setConfirmDialogIsOpen(false)
        } catch (error) {
            console.log("ERROR", error)
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
                onDelete={handleDelete}
            ></TableCategories>
            <FormCategories
                open={open}
                onClose={handleClose}
                onSave={handleSave}
                formData={formData}
                error={error}
                loading={loading}
            ></FormCategories>
            <Confirm open={confirmDialogIsOpen} onOk={handleDeleteOk} onCancel={() => setConfirmDialogIsOpen(false)}>
                Confirme delete category <i>{itemToDelete.name}</i> ?
            </Confirm>
        </PageApp>
    )
}