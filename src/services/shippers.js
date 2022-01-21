import db from "./db"
import NotFoundError from "../error/not_found_error"
import isStringBlank from "../utils/is_string_blank"
import TABLE_NAME from "../utils/table_name"

export default {
  getById: async (id) => {
    return await db(TABLE_NAME.shippers).where({ id })
  },
  getAll: async () => {
    return await db(TABLE_NAME.shippers).orderBy("id")
  },
  create: async (contactName, companyName, phone) => {
    if (isStringBlank(contactName))
      throw new Error("The shipper name cannot be empty")

    if (isStringBlank(companyName))
      throw new Error("The company name cannot be empty")

    const shippers = await db(TABLE_NAME.shippers).where({
      contactName,
      companyName,
    })
    if (shippers.length > 0) throw new Error("The shipper name already exists")

    return await db(TABLE_NAME.shippers)
      .insert({ contactName, companyName, phone })
      .returning("id")
  },
  update: async (id, contactName, companyName, phone) => {
    if (isStringBlank(contactName))
      throw new Error("The shipper name cannot be empty")

    if (isStringBlank(companyName))
      throw new Error("The company name cannot be empty")

    const shipper = await db(TABLE_NAME.shippers).where({ id })
    if (shipper.length === 0) throw new NotFoundError("shipper not found")

    const shippers = await db(TABLE_NAME.shippers)
      .where({ companyName, contactName })
      .whereNot({ id })

    if (shippers.length > 0) throw new Error("The shipper name already exists")

    return await db(TABLE_NAME.shippers).where({ id }).update({
      contactName,
      companyName,
      phone,
    })
  },
  delete: async (id) => {
    const shipper = await db(TABLE_NAME.shippers).where({ id })
    if (shipper.length === 0) {
      throw new NotFoundError("shipper not found")
    }

    return await db(TABLE_NAME.shippers).where({ id }).del()
  },
}
