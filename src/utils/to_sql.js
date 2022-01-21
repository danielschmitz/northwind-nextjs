const to_sql = (knex_instance) => knex_instance.toSQL().toNative()
export default to_sql
