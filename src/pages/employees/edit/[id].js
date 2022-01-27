import { Button, LinearProgress } from "@mui/material"
import Link from "next/link"
import { useRouter } from "next/router"
import EditEmployee from "../../../components/employees/edit"

import useSWR from "swr"
import fetcher from "../../../utils/fetcher"

import Page from "../../../components/page"

export default function Employee(props) {
  const router = useRouter()
  const { id } = router.query

  const { data, error } = useSWR(id ? `/api/employees/${id}` : null, fetcher)
  if (error) return <div>failed to load</div>
  if (!data) return <LinearProgress></LinearProgress>

  const handleSave = (event) => {
    console.log("save", data)
  }

  const Actions = () => {
    return (
      <>
        <br />
        <Link href="/employees">
          <Button>Back</Button>
        </Link>
      </>
    )
  }

  return (
    <>
      <Page title="Edit Employee">
        <EditEmployee formData={data} onSave={() => handleSave}></EditEmployee>
        <Actions></Actions>
      </Page>
    </>
  )
}
