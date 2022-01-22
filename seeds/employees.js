exports.seed = function (knex) {
  return knex("employees")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("employees").insert([
        {
          lastName: "Fuller",
          firstName: "Andrew",
          title: "Vice President Sales",
          birthDate: "1952-02-19 00:00:00.000",
          hireDate: "1992-08-14 00:00:00.000",
          notes:
            "Andrew received his BTS commercial in 1974 and a Ph.D. in international marketing from the University of Dallas in 1981.  He is fluent in French and Italian and reads German.  He joined the company as a sales representative was promoted to sales manager",
        },
        {
          lastName: "Buchanan",
          firstName: "Steven",
          title: "Sales Manager",
          birthDate: "1955-03-04 00:00:00.000",
          hireDate: "1993-10-17 00:00:00.000",
          notes:
            "Steven Buchanan graduated from St. Andrews University in Scotland with a BSC degree in 1976.  Upon joining the company as a sales representative in 1992 he spent 6 months in an orientation program at the Seattle office.",
          reports_to: 1,
        },
        {
          lastName: "Davolio",
          firstName: "Nancy",
          title: "Sales Representative",
          birthDate: "1948-12-08 00:00:00.000",
          hireDate: "1992-05-01 00:00:00.000",
          notes:
            "Education includes a BA in psychology from Colorado State University in 1970.  She also completed The Art of the Cold Call.  Nancy is a member of Toastmasters International.",
          reports_to: 1,
        },
        {
          lastName: "Leverling",
          firstName: "Janet",
          title: "Sales Representative",
          birthDate: "1963-08-30 00:00:00.000",
          hireDate: "1992-04-01 00:00:00.000",
          notes:
            "Janet has a BS degree in chemistry from Boston College (1984). She has also completed a certificate program in food retailing management.  Janet was hired as a sales associate in 1991 and promoted to sales representative in February 1992.",
          reports_to: 1,
        },
        {
          lastName: "Peacock",
          firstName: "Margaret",
          title: "Sales Representative",
          birthDate: "1937-09-19 00:00:00.000",
          hireDate: "1993-05-03 00:00:00.000",
          notes:
            "Margaret holds a BA in English literature from Concordia College (1958) and an MA from the American Institute of Culinary Arts (1966).  She was assigned to the London office temporarily from July through November 1992.",
          reports_to: 1,
        },
        {
          lastName: "Suyama",
          firstName: "Michael",
          title: "Sales Representative",
          birthDate: "1963-07-02 00:00:00.000",
          hireDate: "1993-10-17 00:00:00.000",
          notes:
            "Michael is a graduate of Sussex University (MA Economics 1983) and the University of California at Los Angeles (MBA marketing 1986).  He has also taken the courses Multi-Cultural Selling and Time Management for the Sales Professional.",
          reports_to: 5,
        },
        {
          lastName: "King",
          firstName: "Robert",
          title: "Sales Representative",
          birthDate: "1960-05-29 00:00:00.000",
          hireDate: "1994-01-02 00:00:00.000",
          notes:
            "Robert King served in the Peace Corps and traveled extensively before completing his degree in English at the University of Michigan in 1992 the year he joined the company.",
          reports_to: 5,
        },
        {
          lastName: "Callahan",
          firstName: "Laura",
          title: "Inside Sales Coordinator",
          birthDate: "1958-01-09 00:00:00.000",
          hireDate: "1994-03-05 00:00:00.000",
          notes:
            "Laura received a BA in psychology from the University of Washington.  She has also completed a course in business French.  She reads and writes French.",
          reports_to: 1,
        },
        {
          lastName: "Dodsworth",
          firstName: "Anne",
          title: "Sales Representative",
          birthDate: "1966-01-27 00:00:00.000",
          hireDate: "1994-11-15 00:00:00.000",
          notes:
            "Anne has a BA degree in English from St. Lawrence College.  She is fluent in French and German.",
          reports_to: 5,
        },
      ])
    })
}
