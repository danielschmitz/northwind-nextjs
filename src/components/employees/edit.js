import {
  Container,
  Grid,
  LinearProgress,
  MenuItem,
  TextField,
} from "@mui/material"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

import useSWR from "swr"
import fetcher from "../../utils/fetcher"

export default function EditEmployee(props) {
  const router = useRouter()
  const { id } = router.query

  const { data, error } = useSWR(`/api/employees/${id}`, fetcher)
  if (error) return <div>failed to load</div>
  if (!data) return <LinearProgress></LinearProgress>

  const { firstName, lastName, title, hireDate, birthDate, notes, reports_to } =
    data

  const name = firstName + " " + lastName

  const handleFirstNameChange = (event) => {
    // tem q usardata.mutate
  }

  const currencies = [
    {
      value: "USD",
      label: "$",
    },
    {
      value: "EUR",
      label: "€",
    },
    {
      value: "BTC",
      label: "฿",
    },
    {
      value: "JPY",
      label: "¥",
    },
  ]

  return (
    <>
      <Container maxWidth="md">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              id="firstName"
              label="First Name"
              variant="standard"
              value={data.firstName}
              onChange={handleFirstNameChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="lastName"
              label="Last Name"
              variant="standard"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="birthDate"
              label="Birth Date"
              variant="standard"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="hireDate"
              label="Hire Date"
              variant="standard"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="notes"
              label="Notes"
              variant="filled"
              fullWidth
              multiline
              rows={4}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField id="reports_to" select label="Reports To" fullWidth>
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}
