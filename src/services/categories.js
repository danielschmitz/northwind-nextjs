import db from "../db"

export default {
    create: async (name, description) => {
        
        if (!name) throw new Error("The category name cannot be empty")
        
        const categories = await db('categories').where({ name })
        if (categories.length > 0) throw new Error("The category name already exists")

        return await db('categories').insert({name,description}).returning('id')

    },
    getAll: async () => {
        return await db('categories').orderBy('id')
    },
    getById: async id => {
        return await db('categories').where({ id })
    },
    delete: async id => {

        const category = await db('categories').where({ id })
        if (category.length === 0) {
            throw new Error("Category not found")
        }

        return await db('categories').where({ id }).del()
    }
}