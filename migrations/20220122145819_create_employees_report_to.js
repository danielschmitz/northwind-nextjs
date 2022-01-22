exports.up = function (knex, Promise) {
  return knex.schema.alterTable("employees", (table) => {
    table
      .integer("reports_to")
      .unsigned()
      .index()
      .references("id")
      .inTable("employees")
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.alterTable("employees", (table) => {
    table.dropColumn("reports_to")
  })
}
