import { LocalizationProvider, MobileDatePicker } from "@mui/lab"
import {
  Button,
  Container,
  Grid,
  LinearProgress,
  Menu,
  MenuItem,
  Stack,
  TextField,
} from "@mui/material"
import AdapterDateFns from "@mui/lab/AdapterDateFns"
import { useEffect, useState } from "react"

import useSWR from "swr"
import fetcher from "../../utils/fetcher"
import { Chip } from "@material-ui/core"
import { NoBackpackSharp } from "@mui/icons-material"

export default function EditEmployee(props) {
  useEffect(() => {
    setFormData(props.formData)
    setReportsTo(props.formData.reports_to)
  }, [props.formData])

  const { data } = useSWR(`/api/employees`, fetcher)
  const employees = data

  const [formData, setFormData] = useState({})
  const [reportsTo, setReportsTo] = useState({})

  const [errorState, setErrorState] = useState({
    firstName: {
      valid: true,
      message: "Required",
    },
    lastName: {
      valid: true,
      message: "Required",
    },
  })

  const handleFirstNameChange = (event) => {
    setFormData({ ...formData, firstName: event.target.value })
    errorState.firstName.valid = !!event.target.value.length
    setErrorState(errorState)
  }

  const handleLastNameChange = (event) => {
    setFormData({ ...formData, lastName: event.target.value })
    errorState.lastName.valid = !!event.target.value.length
    setErrorState(errorState)
  }

  const handleBirthDateChange = (value) => {
    setFormData({ ...formData, birthDate: value })
  }

  const handleHireDateChange = (value) => {
    setFormData({ ...formData, hireDate: value })
  }

  const handleNotesChange = (event) => {
    setFormData({ ...formData, notes: event.target.value })
  }

  return (
    <>
      <Container maxWidth="md">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              id="firstName"
              label="First Name"
              variant="standard"
              value={formData.firstName}
              onChange={handleFirstNameChange}
              error={!errorState.firstName.valid}
              helperText={
                !errorState.firstName.valid && errorState.firstName.message
              }
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="lastName"
              label="Last Name"
              variant="standard"
              value={formData.lastName}
              onChange={handleLastNameChange}
              error={!errorState.lastName.valid}
              helperText={
                !errorState.lastName.valid && errorState.lastName.message
              }
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <MobileDatePicker
                label="Birth Date"
                value={formData.birthDate}
                onChange={handleBirthDateChange}
                renderInput={(params) => (
                  <TextField {...params} fullWidth variant="standard" />
                )}
              />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={12} sm={6}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <MobileDatePicker
                label="Hire Date"
                value={formData.hireDate}
                onChange={handleHireDateChange}
                renderInput={(params) => (
                  <TextField {...params} fullWidth variant="standard" />
                )}
              />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="notes"
              label="Notes"
              variant="filled"
              fullWidth
              multiline
              rows={4}
              value={formData.notes}
              onChange={handleNotesChange}
            />
          </Grid>
          <Grid item xs={12}>
            {employees && (
              <TextField
                id="reports_to"
                select
                label="Reports To"
                fullWidth
                value={reportsTo}
              >
                {employees?.map(
                  (option) =>
                    option.id !== formData.id &&
                    option.reports_to !== formData.id && (
                      <MenuItem key={option.id} value={option.id}>
                        {option.firstName} {option.lastName}
                      </MenuItem>
                    )
                )}
              </TextField>
            )}
          </Grid>
          <Grid item xs={12} sm={2}>
            "Belongs to:"
          </Grid>
          <Grid item xs={12} sm={10}>
            <Stack
              direction={{ xs: "column", sm: "column", md: "row" }}
              spacing={1}
            >
              {employees?.map(
                (option) =>
                  option.id !== formData.id &&
                  option.reports_to === formData.id && (
                    <Chip label={option.firstName + " " + option.lastName} />
                  )
              )}
            </Stack>
          </Grid>
        </Grid>
        <br />
        <Grid
          container
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
        >
          <Grid item xs={1}>
            <Button color="primary" onClick={props.onSave}>
              Save
            </Button>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}
