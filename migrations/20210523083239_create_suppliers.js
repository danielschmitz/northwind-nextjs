exports.up = function (knex, Promise) {
  return knex.schema.createTable("suppliers", (table) => {
    table.increments("id").primary()
    table.string("companyName", 40)
    table.string("contactName", 40).notNullable()
    table.string("contactTitle", 40)
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable("suppliers")
}
