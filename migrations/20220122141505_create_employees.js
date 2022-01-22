exports.up = function (knex, Promise) {
  return knex.schema.createTable("employees", (table) => {
    table.increments("id").primary()
    table.string("firstName", 200).notNullable()
    table.string("lastName", 200).notNullable()
    table.string("title", 200)
    table.string("phone", 100)
    table.date("birthDate")
    table.date("hireDate")
    table.text("notes")
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable("employees")
}
