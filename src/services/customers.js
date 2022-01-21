import db from "./db"
import NotFoundError from "../error/not_found_error"
import isStringBlank from "../utils/is_string_blank"
import TABLE_NAME from "../utils/table_name"

export default {
  getById: async (id) => {
    return await db(TABLE_NAME.customers).where({ id })
  },
  getAll: async () => {
    return await db(TABLE_NAME.customers).orderBy("id")
  },
  create: async (contactName, companyName, contactTitle) => {
    if (isStringBlank(contactName))
      throw new Error("The customer name cannot be empty")

    if (isStringBlank(companyName))
      throw new Error("The company name cannot be empty")

    const customers = await db(TABLE_NAME.customers).where({
      contactName,
      companyName,
    })
    if (customers.length > 0)
      throw new Error("The customer name already exists")

    return await db(TABLE_NAME.customers)
      .insert({ contactName, companyName, contactTitle })
      .returning("id")
  },
  update: async (id, contactName, companyName, contactTitle) => {
    if (isStringBlank(contactName))
      throw new Error("The customer name cannot be empty")

    if (isStringBlank(companyName))
      throw new Error("The company name cannot be empty")

    const customer = await db(TABLE_NAME.customers).where({ id })
    if (customer.length === 0) throw new NotFoundError("customer not found")

    const customers = await db(TABLE_NAME.customers)
      .where({ companyName, contactName })
      .whereNot({ id })

    if (customers.length > 0)
      throw new Error("The customer name already exists")

    return await db(TABLE_NAME.customers).where({ id }).update({
      contactName,
      companyName,
      contactTitle,
    })
  },
  delete: async (id) => {
    const customer = await db(TABLE_NAME.customers).where({ id })
    if (customer.length === 0) {
      throw new NotFoundError("customer not found")
    }

    return await db(TABLE_NAME.customers).where({ id }).del()
  },
}
