exports.up = function (knex, Promise) {
  return knex.schema.createTable("shippers", (table) => {
    table.increments("id").primary()
    table.string("contactName", 200).notNullable()
    table.string("companyName", 200).notNullable()
    table.string("phone", 100)
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable("shippers")
}
