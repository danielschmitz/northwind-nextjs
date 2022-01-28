import db from "./db"
import NotFoundError from "../error/not_found_error"
import isStringBlank from "../utils/is_string_blank"
import TABLE_NAME from "../utils/table_name"

const EmployeeService = {
  getById: async (id) => {
    const result = await db(TABLE_NAME.employees).where({ id })
    if (result[0]) {
      if (result[0].reports_to) {
        const boss = await db(TABLE_NAME.employees).where({
          id: result[0].reports_to,
        })
        result[0].boss = boss[0]
      }
    }
    return result[0]
  },
  getAll: async () => {
    return await db(TABLE_NAME.employees).orderBy("id")
  },
  create: async (data) => {
    const {
      firstName,
      lastName,
      title,
      birthDate,
      hireDate,
      notes,
      reports_to,
    } = data

    if (isStringBlank(firstName))
      throw new Error("The employee first name cannot be empty")

    if (isStringBlank(lastName))
      throw new Error("The employee last name cannot be empty")

    const employees = await db(TABLE_NAME.employees).where({
      firstName,
      lastName,
    })
    if (employees.length > 0)
      throw new Error("The employee name already exists")

    return await db(TABLE_NAME.employees)
      .insert({
        firstName,
        lastName,
        title,
        birthDate,
        hireDate,
        notes,
        reports_to,
      })
      .returning("id")
  },
  update: async (id, data) => {
    const {
      firstName,
      lastName,
      title,
      birthDate,
      hireDate,
      notes,
      reports_to,
    } = data

    if (isStringBlank(firstName))
      throw new Error("The employee first name cannot be empty")

    if (isStringBlank(lastName))
      throw new Error("The employee last name cannot be empty")

    const employee = await db(TABLE_NAME.employees).where({ id })
    if (employee.length === 0) throw new NotFoundError("employee not found")

    const employees = await db(TABLE_NAME.employees)
      .where({ firstName, lastName })
      .whereNot({ id })

    if (employees.length > 0)
      throw new Error("The employee name already exists")

    return await db(TABLE_NAME.employees).where({ id }).update({
      firstName,
      lastName,
      title,
      birthDate,
      hireDate,
      notes,
      reports_to,
    })
  },
  delete: async (id) => {
    throw new Error("Nao é bom deletar o employee")
    const employee = await db(TABLE_NAME.employees).where({ id })
    if (employee.length === 0) {
      throw new NotFoundError("employee not found")
    }

    return await db(TABLE_NAME.employees).where({ id }).del()
  },
}
export default EmployeeService
