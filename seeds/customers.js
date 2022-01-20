exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex("customers")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("customers").insert([
        {
          companyName: "Around the Horn",
          contactName: "Thomas Hardy",
          contactTitle: "Sales Representative",
        },
        {
          companyName: "Berglunds snabbköp",
          contactName: "Christina Berglund",
          contactTitle: "Order Administrator",
        },
        {
          companyName: "Blauer See Delikatessen",
          contactName: "Hanna Moos",
          contactTitle: "Sales Representative",
        },
        {
          companyName: "Blondesddsl père et fils",
          contactName: "Frédérique Citeaux",
          contactTitle: "Marketing Manager",
        },
        {
          companyName: "Bólido Comidas preparadas",
          contactName: "Martín Sommer",
          contactTitle: "Owner",
        },
        {
          companyName: "Bon app'",
          contactName: "Laurence Lebihan",
          contactTitle: "Owner",
        },
        {
          companyName: "Antonio Moreno Taquería",
          contactName: "Antonio Moreno",
          contactTitle: "Owner",
        },
        {
          companyName: "Ana Trujillo Emparedados y helados",
          contactName: "Ana Trujillo",
          contactTitle: "Owner",
        },
        {
          companyName: "Cactus Comidas para llevar",
          contactName: "Patricio Simpson",
          contactTitle: "Sales Agent",
        },
        {
          companyName: "B's Beverages",
          contactName: "Victoria Ashworth",
          contactTitle: "Sales Representative",
        },
        {
          companyName: "Centro comercial Moctezuma",
          contactName: "Francisco Chang",
          contactTitle: "Marketing Manager",
        },
        {
          companyName: "Chop-suey Chinese",
          contactName: "Yang Wang",
          contactTitle: "Owner",
        },
        {
          companyName: "Comércio Mineiro",
          contactName: "Pedro Afonso",
          contactTitle: "Sales Associate",
        },
        {
          companyName: "Consolidated Holdings",
          contactName: "Elizabeth Brown",
          contactTitle: "Sales Representative",
        },
        {
          companyName: "Alfreds Futterkiste",
          contactName: "Maria Anders",
          contactTitle: "Sales Representative",
        },
        {
          companyName: "Bottom-Dollar Markets",
          contactName: "Elizabeth Lincoln",
          contactTitle: "Accounting Manager",
        },
        {
          companyName: "Drachenblut Delikatessen",
          contactName: "Sven Ottlieb",
          contactTitle: "Order Administrator",
        },
        {
          companyName: "Du monde entier",
          contactName: "Janine Labrune",
          contactTitle: "Owner",
        },
        {
          companyName: "Familia Arquibaldo",
          contactName: "Aria Cruz",
          contactTitle: "Marketing Assistant",
        },
        {
          companyName: "FISSA Fabrica Inter. Salchichas S.A.",
          contactName: "Diego Roel",
          contactTitle: "Accounting Manager",
        },
        {
          companyName: "Folies gourmandes",
          contactName: "Martine Rancé",
          contactTitle: "Assistant Sales Agent",
        },
        {
          companyName: "Folk och fä HB",
          contactName: "Maria Larsson",
          contactTitle: "Owner",
        },
        {
          companyName: "Frankenversand",
          contactName: "Peter Franken",
          contactTitle: "Marketing Manager",
        },
        {
          companyName: "France restauration",
          contactName: "Carine Schmitt",
          contactTitle: "Marketing Manager",
        },
        {
          companyName: "Eastern Connection",
          contactName: "Ann Devon",
          contactTitle: "Sales Agent",
        },
        {
          companyName: "Ernst Handel",
          contactName: "Roland Mendel",
          contactTitle: "Sales Manager",
        },
        {
          companyName: "Franchi S.p.A.",
          contactName: "Paolo Accorti",
          contactTitle: "Sales Representative",
        },
        {
          companyName: "Furia Bacalhau e Frutos do Mar",
          contactName: "Lino Rodriguez",
          contactTitle: "Sales Manager",
        },
        {
          companyName: "Galería del gastrónomo",
          contactName: "Eduardo Saavedra",
          contactTitle: "Marketing Manager",
        },
        {
          companyName: "Godos Cocina Típica",
          contactName: "José Pedro Freyre",
          contactTitle: "Sales Manager",
        },
        {
          companyName: "Gourmet Lanchonetes",
          contactName: "André Fonseca",
          contactTitle: "Sales Associate",
        },
        {
          companyName: "HILARION-Abastos",
          contactName: "Carlos Hernández",
          contactTitle: "Sales Representative",
        },
        {
          companyName: "Hungry Coyote Import Store",
          contactName: "Yoshi Latimer",
          contactTitle: "Sales Representative",
        },
        {
          companyName: "Hungry Owl All-Night Grocers",
          contactName: "Patricia McKenna",
          contactTitle: "Sales Associate",
        },
        {
          companyName: "Island Trading",
          contactName: "Helen Bennett",
          contactTitle: "Marketing Manager",
        },
        {
          companyName: "Königlich Essen",
          contactName: "Philip Cramer",
          contactTitle: "Sales Associate",
        },
        {
          companyName: "La corne d'abondance",
          contactName: "Daniel Tonini",
          contactTitle: "Sales Representative",
        },
        {
          companyName: "GROSELLA-Restaurante",
          contactName: "Manuel Pereira",
          contactTitle: "Owner",
        },
        {
          companyName: "Hanari Carnes",
          contactName: "Mario Pontes",
          contactTitle: "Accounting Manager",
        },
        {
          companyName: "Laughing Bacchus Wine Cellars",
          contactName: "Yoshi Tannamuri",
          contactTitle: "Marketing Assistant",
        },
        {
          companyName: "Lazy K Kountry Store",
          contactName: "John Steel",
          contactTitle: "Marketing Manager",
        },
        {
          companyName: "Lehmanns Marktstand",
          contactName: "Renate Messner",
          contactTitle: "Sales Representative",
        },
        {
          companyName: "Great Lakes Food Market",
          contactName: "Howard Snyder",
          contactTitle: "Marketing Manager",
        },
        {
          companyName: "La maison d'Asie",
          contactName: "Annette Roulet",
          contactTitle: "Sales Manager",
        },
        {
          companyName: "Let's Stop N Shop",
          contactName: "Jaime Yorres",
          contactTitle: "Owner",
        },
        {
          companyName: "Magazzini Alimentari Riuniti",
          contactName: "Giovanni Rovelli",
          contactTitle: "Marketing Manager",
        },
        {
          companyName: "Maison Dewey",
          contactName: "Catherine Dewey",
          contactTitle: "Sales Agent",
        },
        {
          companyName: "Mère Paillarde",
          contactName: "Jean Fresnière",
          contactTitle: "Marketing Assistant",
        },
        {
          companyName: "Morgenstern Gesundkost",
          contactName: "Alexander Feuer",
          contactTitle: "Marketing Assistant",
        },
        {
          companyName: "North/South",
          contactName: "Simon Crowther",
          contactTitle: "Sales Associate",
        },
        {
          companyName: "Océano Atlántico Ltda.",
          contactName: "Yvonne Moncada",
          contactTitle: "Sales Agent",
        },
        {
          companyName: "LINO-Delicateses",
          contactName: "Felipe Izquierdo",
          contactTitle: "Owner",
        },
        {
          companyName: "LILA-Supermercado",
          contactName: "Carlos González",
          contactTitle: "Accounting Manager",
        },
        {
          companyName: "Old World Delicatessen",
          contactName: "Rene Phillips",
          contactTitle: "Sales Representative",
        },
        {
          companyName: "Ottilies Käseladen",
          contactName: "Henriette Pfalzheim",
          contactTitle: "Owner",
        },
        {
          companyName: "Piccolo und mehr",
          contactName: "Georg Pipps",
          contactTitle: "Sales Manager",
        },
        {
          companyName: "Paris spécialités",
          contactName: "Marie Bertrand",
          contactTitle: "Owner",
        },
        {
          companyName: "Pericles Comidas clásicas",
          contactName: "Guillermo Fernández",
          contactTitle: "Sales Representative",
        },
        {
          companyName: "Princesa Isabel Vinhos",
          contactName: "Isabel de Castro",
          contactTitle: "Sales Representative",
        },
        {
          companyName: "Lonesome Pine Restaurant",
          contactName: "Fran Wilson",
          contactTitle: "Sales Manager",
        },
        {
          companyName: "Queen Cozinha",
          contactName: "Lúcia Carvalho",
          contactTitle: "Marketing Assistant",
        },
        {
          companyName: "Rattlesnake Canyon Grocery",
          contactName: "Paula Wilson",
          contactTitle: "Assistant Sales Representative",
        },
        {
          companyName: "Reggiani Caseifici",
          contactName: "Maurizio Moroni",
          contactTitle: "Sales Associate",
        },
        {
          companyName: "Que Delícia",
          contactName: "Bernardo Batista",
          contactTitle: "Accounting Manager",
        },
        {
          companyName: "Rancho grande",
          contactName: "Sergio Gutiérrez",
          contactTitle: "Sales Representative",
        },
        {
          companyName: "Romero y tomillo",
          contactName: "Alejandra Camino",
          contactTitle: "Accounting Manager",
        },
        {
          companyName: "QUICK-Stop",
          contactName: "Horst Kloss",
          contactTitle: "Accounting Manager",
        },
        {
          companyName: "Ricardo Adocicados",
          contactName: "Janete Limeira",
          contactTitle: "Assistant Sales Agent",
        },
        {
          companyName: "Richter Supermarkt",
          contactName: "Michael Holz",
          contactTitle: "Sales Manager",
        },
        {
          companyName: "Santé Gourmet",
          contactName: "Jonas Bergulfsen",
          contactTitle: "Owner",
        },
        {
          companyName: "Save-a-lot Markets",
          contactName: "Jose Pavarotti",
          contactTitle: "Sales Representative",
        },
        {
          companyName: "Seven Seas Imports",
          contactName: "Hari Kumar",
          contactTitle: "Sales Manager",
        },
        {
          companyName: "Simons bistro",
          contactName: "Jytte Petersen",
          contactTitle: "Owner",
        },
        {
          companyName: "Spécialités du monde",
          contactName: "Dominique Perrier",
          contactTitle: "Marketing Manager",
        },
        {
          companyName: "Split Rail Beer & Ale",
          contactName: "Art Braunschweiger",
          contactTitle: "Sales Manager",
        },
        {
          companyName: "Suprêmes délices",
          contactName: "Pascale Cartrain",
          contactTitle: "Accounting Manager",
        },
        {
          companyName: "The Big Cheese",
          contactName: "Liz Nixon",
          contactTitle: "Marketing Manager",
        },
        {
          companyName: "The Cracker Box",
          contactName: "Liu Wong",
          contactTitle: "Marketing Assistant",
        },
        {
          companyName: "Toms Spezialitäten",
          contactName: "Karin Josephs",
          contactTitle: "Marketing Manager",
        },
        {
          companyName: "Tortuga Restaurante",
          contactName: "Miguel Angel Paolino",
          contactTitle: "Owner",
        },
        {
          companyName: "Tradição Hipermercados",
          contactName: "Anabela Domingues",
          contactTitle: "Sales Representative",
        },
        {
          companyName: "Trail's Head Gourmet Provisioners",
          contactName: "Helvetius Nagy",
          contactTitle: "Sales Associate",
        },
        {
          companyName: "Vaffeljernet",
          contactName: "Palle Ibsen",
          contactTitle: "Sales Manager",
        },
        {
          companyName: "Victuailles en stock",
          contactName: "Mary Saveley",
          contactTitle: "Sales Agent",
        },
        {
          companyName: "Vins et alcools Chevalier",
          contactName: "Paul Henriot",
          contactTitle: "Accounting Manager",
        },
        {
          companyName: "Die Wandernde Kuh",
          contactName: "Rita Müller",
          contactTitle: "Sales Representative",
        },
        {
          companyName: "Wartian Herkku",
          contactName: "Pirkko Koskitalo",
          contactTitle: "Accounting Manager",
        },
        {
          companyName: "Wellington Importadora",
          contactName: "Paula Parente",
          contactTitle: "Sales Manager",
        },
        {
          companyName: "White Clover Markets",
          contactName: "Karl Jablonski",
          contactTitle: "Owner",
        },
        {
          companyName: "Wilman Kala",
          contactName: "Matti Karttunen",
          contactTitle: "Owner/Marketing Assistant",
        },
        {
          companyName: "Wolski  Zajazd",
          contactName: "Zbyszek Piestrzeniewicz",
          contactTitle: "Owner",
        },
      ])
    })
}
