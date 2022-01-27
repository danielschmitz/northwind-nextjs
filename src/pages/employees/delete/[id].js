import { Button, LinearProgress, Link } from "@mui/material"
import { useRouter } from "next/router"
import { useState } from "react"
import useSWR from "swr"
import Page from "../../../components/page"
import fetcher from "../../../utils/fetcher"

export default function DeleteEmployee(props) {
  const router = useRouter()
  const { id } = router.query

  const [loading, setLoading] = useState(false)

  const { data, error } = useSWR(id ? `/api/employees/${id}` : null, fetcher)
  if (error) return <div>failed to load</div>
  if (!data) return <LinearProgress></LinearProgress>

  const handleDelete = (event) => {
    try {
      setLoading(true)
      // continua......................
    } catch (error) {}
  }

  const Actions = () => {
    return (
      <>
        <Button onClick={() => handleDelete()}>Yes</Button>

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
