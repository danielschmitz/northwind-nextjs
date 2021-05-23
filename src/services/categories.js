import db from "./db"
import NotFoundError from "../error/not_found_error"
import isStringBlank from "../utils/is_string_blank"
import TABLE_NAME from "../utils/table_name"

export default {
  getById: async (id) => {
    return await db(TABLE_NAME.categories).where({ id })
  },
  getAll: async () => {
    return await db(TABLE_NAME.categories).orderBy("id")
  },
  create: async (name, description) => {
    if (isStringBlank(name))
      throw new Error("The category name cannot be empty")

    const categories = await db(TABLE_NAME.categories).where({ name })
    if (categories.length > 0)
      throw new Error("The category name already exists")

    return await db(TABLE_NAME.categories)
      .insert({ name, description })
      .returning("id")
  },
  update: async (id, name, description) => {
    if (isStringBlank(name))
      throw new Error("The category name cannot be empty")

    const category = await db(TABLE_NAME.categories).where({ id })
    if (category.length === 0) throw new NotFoundError("Category not found")

    const categories = await db(TABLE_NAME.categories)
      .where({ name })
      .whereNot({ id })
    if (categories.length > 0)
      throw new Error("The category name already exists")

    return await db(TABLE_NAME.categories)
      .where({ id })
      .update({ name, description })
  },
  delete: async (id) => {
    const category = await db(TABLE_NAME.categories).where({ id })
    if (category.length === 0) {
      throw new NotFoundError("Category not found")
    }

    return await db(TABLE_NAME.categories).where({ id }).del()
  },
}
