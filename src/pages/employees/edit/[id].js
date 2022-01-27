import { Button, LinearProgress } from "@mui/material"
import Link from "next/link"
import { useRouter } from "next/router"
import EditEmployee from "../../../components/employees/edit"

import useSWR from "swr"
import fetcher from "../../../utils/fetcher"

import Page from "../../../components/page"
import http from "../../../utils/http"
import HTTP_METHOD from "../../../utils/http_method"
import { useState } from "react"

export default function Employee(props) {
  const router = useRouter()
  const { id } = router.query

  const [loading, setLoading] = useState(false)

  const { data, error } = useSWR(id ? `/api/employees/${id}` : null, fetcher)
  if (error) return <div>failed to load</div>
  if (!data) return <LinearProgress></LinearProgress>

  const handleSave = async (formData) => {
    const {
      id,
      firstName,
      lastName,
      title,
      birthDate,
      hireDate,
      notes,
      reports_to,
    } = formData

    const data = {
      id,
      firstName,
      lastName,
      title,
      birthDate,
      hireDate,
      notes,
      reports_to,
    }

    try {
      setLoading(true)

      await http({
        method: data.id ? HTTP_METHOD.PUT : HTTP_METHOD.POST,
        url: data.id ? `/api/employees/${data.id}` : "/api/employees",
        data,
      })

      // just a test to show a loading screen
      setTimeout(function () {
        setLoading(false)

        router.push("/employees")
      }, 2000)
    } catch (error) {
      console.error(error)
      setLoading(false)
    }
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
      <Page title="Edit Employee" loading={loading}>
        <EditEmployee
          formData={data}
          onSave={(formData) => handleSave(formData)}
        ></EditEmployee>
        <Actions></Actions>
      </Page>
    </>
  )
}
