import { useState } from "react";
import { mutate } from "swr";

import TableCategories from "./table";
import FormCategories from "./form";
import Confirm from "../confirm";
import { http, METHOD } from "../../utils";
import { Button } from "@material-ui/core";

export default function Categories(props) {

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

    return (<>
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
        <br/>
        <Button size="small" color="primary" onClick={handleNew}>
            New Category
        </Button>
        <Confirm open={confirmDialogIsOpen} onOk={handleDeleteOk} onCancel={() => setConfirmDialogIsOpen(false)}>
            Confirme delete category <i>{itemToDelete.name}</i> ?
            </Confirm>
    </>)
}