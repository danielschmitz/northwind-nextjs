import { Alert, Button, LinearProgress, Link } from "@mui/material"
import { useRouter } from "next/router"
import { useState } from "react"
import useSWR from "swr"
import Page from "../../../components/page"
import fetcher from "../../../utils/fetcher"
import http from "../../../utils/http"

export default function DeleteEmployee(props) {
  const router = useRouter()
  const { id } = router.query

  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  const { data, error } = useSWR(id ? `/api/employees/${id}` : null, fetcher)
  if (error) return <div>failed to load</div>
  if (!data) return <LinearProgress></LinearProgress>

  const handleDelete = async (event) => {
    try {
      setLoading(true)
      setErrorMessage("")
      await http.delete("/api/employees/" + id)
      router.push("/employees")
    } catch (error) {
      setErrorMessage(error.response.data)
    } finally {
      //setTimeout(async function () {
      setLoading(false)
      //}, 2000)
    }
  }

  const Actions = () => {
    return (
      <>
        <Button onClick={() => handleDelete()}>Yes</Button>
        {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
        <br />
        <br />
        <br />
        <Link href="/employees">
          <Button>Back</Button>
        </Link>
      </>
    )
  }

  return (
    <>
      <Page title="Are you sure?" loading={loading}>
        Delete {data.firstName} {data.lastName} ?
        <Actions />
      </Page>
    </>
  )
}
