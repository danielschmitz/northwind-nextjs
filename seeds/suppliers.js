exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex("suppliers")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("suppliers").insert([
        {
          companyName: "Tokyo Traders",
          contactName: "Yoshi Nagase",
          contactTitle: "Marketing Manager",
        },
        {
          companyName: "Cooperativa de Quesos 'Las Cabras'",
          contactName: "Antonio del Valle Saavedra",
          contactTitle: "Export Administrator",
        },
        {
          companyName: "Mayumi's",
          contactName: "Mayumi Ohno",
          contactTitle: "Marketing Representative",
        },
        {
          companyName: "Pavlova Ltd.",
          contactName: "Ian Devling",
          contactTitle: "Marketing Manager",
        },
        {
          companyName: "Specialty Biscuits Ltd.",
          contactName: "Peter Wilson",
          contactTitle: "Sales Representative",
        },
        {
          companyName: "PB Knäckebröd AB",
          contactName: "Lars Peterson",
          contactTitle: "Sales Agent",
        },
        {
          companyName: "Refrescos Americanas LTDA",
          contactName: "Carlos Diaz",
          contactTitle: "Marketing Manager",
        },
        {
          companyName: "Heli Süßwaren GmbH & Co. KG",
          contactName: "Petra Winkler",
          contactTitle: "Sales Manager",
        },
        {
          companyName: "New Orleans Cajun Delights",
          contactName: "Shelley Burke",
          contactTitle: "Order Administrator",
        },
        {
          companyName: "Plutzer Lebensmittelgroßmärkte AG",
          contactName: "Martin Bein",
          contactTitle: "International Marketing Mgr.",
        },
        {
          companyName: "Nord-Ost-Fisch Handelsgesellschaft mbH",
          contactName: "Sven Petersen",
          contactTitle: "Coordinator Foreign Markets",
        },
        {
          companyName: "Formaggi Fortini s.r.l.",
          contactName: "Elio Rossi",
          contactTitle: "Sales Representative",
        },
        {
          companyName: "Norske Meierier",
          contactName: "Beate Vileid",
          contactTitle: "Marketing Manager",
        },
        {
          companyName: "Exotic Liquids",
          contactName: "Charlotte Cooper",
          contactTitle: "Purchasing Manager",
        },
        {
          companyName: "Grandma Kelly's Homestead",
          contactName: "Regina Murphy",
          contactTitle: "Sales Representative",
        },
        {
          companyName: "Bigfoot Breweries",
          contactName: "Cheryl Saylor",
          contactTitle: "Regional Account Rep.",
        },
        {
          companyName: "Svensk Sjöföda AB",
          contactName: "Michael Björn",
          contactTitle: "Sales Representative",
        },
        {
          companyName: "Aux joyeux ecclésiastiques",
          contactName: "Guylène Nodier",
          contactTitle: "Sales Manager",
        },
        {
          companyName: "New England Seafood Cannery",
          contactName: "Robb Merchant",
          contactTitle: "Wholesale Account Agent",
        },
        {
          companyName: "Leka Trading",
          contactName: "Chandra Leka",
          contactTitle: "Owner",
        },
        {
          companyName: "Lyngbysild",
          contactName: "Niels Petersen",
          contactTitle: "Sales Manager",
        },
        {
          companyName: "Zaanse Snoepfabriek",
          contactName: "Dirk Luchte",
          contactTitle: "Accounting Manager",
        },
        {
          companyName: "Ma Maison",
          contactName: "Jean-Guy Lauzon",
          contactTitle: "Marketing Manager",
        },
        {
          companyName: "Escargots Nouveaux",
          contactName: "Marie Delamare",
          contactTitle: "Sales Manager",
        },
        {
          companyName: "Pasta Buttini s.r.l.",
          contactName: "Giovanni Giudici",
          contactTitle: "Order Administrator",
        },
        {
          companyName: "Gai pâturage",
          contactName: "Eliane Noz",
          contactTitle: "Sales Representative",
        },
        {
          companyName: "Karkki Oy",
          contactName: "Anne Heikkonen",
          contactTitle: "Product Manager",
        },
        {
          companyName: "G'day Mate",
          contactName: "Wendy Mackenzie",
          contactTitle: "Sales Representative",
        },
        {
          companyName: "Forêts d'érables",
          contactName: "Chantal Goulet",
          contactTitle: "Accounting Manager",
        },
      ])
    })
}
