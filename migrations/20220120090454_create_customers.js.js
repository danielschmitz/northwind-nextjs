exports.up = function (knex, Promise) {
  return knex.schema.createTable("customers", (table) => {
    table.increments("id").primary()
    table.string("contactName", 200).notNullable()
    table.string("companyName", 200).notNullable()
    table.string("contactTitle", 100)
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable("customers")
}
