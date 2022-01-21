exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("shippers")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("shippers").insert([
        {
          id: 1,
          companyName: "Speedy Express",
          contactName: "Yoshi Nagase",
          phone: "(503) 555-9831",
        },
        {
          id: 2,
          companyName: "United Package",
          contactName: "Mayumi Ohno",
          phone: "(503) 555-3199",
        },
        {
          id: 3,
          companyName: "Federal Shipping",
          contactName: "Ian Devling",
          phone: "(503) 555-9931",
        },
      ])
    })
}
