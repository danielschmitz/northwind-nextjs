import { Button } from "@mui/material"
import Link from "next/link"
import { useRouter } from "next/router"
import ShowEmployee from "../../components/employees/show"
import Page from "../../components/page"

export default function Employee(props) {
  const router = useRouter()
  const { id } = router.query

  const Actions = () => {
    return (
      <>
        <Link href="/employees">
          <Button>Back</Button>
        </Link>
      </>
    )
  }

  return (
    <>
      <Page title="Show Employee">
        <ShowEmployee id={id}></ShowEmployee>
        <Actions></Actions>
      </Page>
    </>
  )
}
