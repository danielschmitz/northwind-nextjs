import { Button } from "@mui/material"
import Link from "next/link"
import { useRouter } from "next/router"
import EditEmployee from "../../../components/employees/edit"

import Page from "../../../components/page"

export default function Employee(props) {
  const router = useRouter()
  const { id } = router.query

  return (
    <>
      <Page title="Edit Employee">
        <EditEmployee id={id}></EditEmployee>
        <actions>
          <br />
          <Link href="/employees">
            <Button>Back</Button>
          </Link>
        </actions>
      </Page>
    </>
  )
}
