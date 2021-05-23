import db from "./db"
import NotFoundError from "../error/not_found_error"
import isStringBlank from "../utils/is_string_blank"
import TABLE_NAME from "../utils/table_name"

export default {
  getById: async (id) => {
    return await db(TABLE_NAME.suppliers).where({ id })
  },
  getAll: async () => {
    return await db(TABLE_NAME.suppliers).orderBy("id")
  },
  create: async (contactName, contactTitle, companyName) => {
    if (isStringBlank(contactName))
      throw new Error("The supplier Contact Name cannot be empty")

    return await db(TABLE_NAME.suppliers)
      .insert({ contactName, contactTitle, companyName })
      .returning("id")
  },
  update: async (id, contactName, contactTitle, companyName) => {
    if (isStringBlank(contactName))
      throw new Error("The supplier Contact Name cannot be empty")

    const supplier = await db(TABLE_NAME.suppliers).where({ id })
    if (supplier.length === 0) throw new NotFoundError("Supplier not found")

    return await db(TABLE_NAME.suppliers)
      .where({ id })
      .update({ contactName, contactTitle, companyName })
  },
  delete: async (id) => {
    const supplier = await db(TABLE_NAME.suppliers).where({ id })
    if (supplier.length === 0) {
      throw new NotFoundError("Supplier not found")
    }

    return await db(TABLE_NAME.suppliers).where({ id }).del()
  },
}
