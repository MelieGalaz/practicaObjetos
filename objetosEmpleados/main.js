const empleades = [
  {
    nombre: "Wade Morgan",
    pais: "México",
    edad: 20,
    area: "QA",
    puesto: "Backend Developer",
    seniority: "Semisenior",
    sueldo: 79767,
    haceGuardia: false,
    lenguajes: ["Java"],
  },
  {
    nombre: "Eunice Browning",
    pais: "Colombia",
    edad: 20,
    area: "QA",
    puesto: "Data analyst",
    seniority: "Junior",
    sueldo: 72457,
    haceGuardia: true,
    lenguajes: ["Ruby", "C#", "Java", "Python", "PHP"],
  },
  {
    nombre: "Floyd Reyes",
    pais: "Paraguay",
    edad: 29,
    area: "Soporte",
    puesto: "Backend Developer",
    seniority: "Semisenior",
    sueldo: 64868,
    haceGuardia: false,
    lenguajes: ["Python", "Ruby", "Java", "C#"],
  },
  {
    nombre: "Downs Mccray",
    pais: "Brasil",
    edad: 46,
    area: "Soporte",
    puesto: "Tester",
    seniority: "Trainee",
    sueldo: 40037,
    haceGuardia: false,
    lenguajes: ["Ruby", "JavaScript", "Python", "Java"],
  },
  {
    nombre: "Lynda Herring",
    pais: "Colombia",
    edad: 32,
    area: "Soporte",
    puesto: "Frontend Developer",
    seniority: "Trainee",
    sueldo: 71813,
    haceGuardia: true,
    lenguajes: ["PHP", "JavaScript"],
  },
  {
    nombre: "Tia Snider",
    pais: "Bolivia",
    edad: 40,
    area: "Seguridad",
    puesto: "Backend Developer",
    seniority: "Senior",
    sueldo: 53372,
    haceGuardia: false,
    lenguajes: [],
  },
  {
    nombre: "Madelyn Berger",
    pais: "Colombia",
    edad: 34,
    area: "Infraestructura",
    puesto: "Data analyst",
    seniority: "Trainee",
    sueldo: 73521,
    haceGuardia: true,
    lenguajes: ["Ruby", "PHP", "JavaScript", "Python", "Java", "C#"],
  },
  {
    nombre: "Tiffany Estrada",
    pais: "Brasil",
    edad: 33,
    area: "Desarrollo",
    puesto: "Frontend Developer",
    seniority: "Trainee",
    sueldo: 79101,
    haceGuardia: false,
    lenguajes: ["C#", "Ruby"],
  },
  {
    nombre: "Ellis Trevino",
    pais: "Bolivia",
    edad: 30,
    area: "Desarrollo",
    puesto: "Architect",
    seniority: "Senior",
    sueldo: 27676,
    haceGuardia: true,
    lenguajes: ["Python", "PHP", "JavaScript", "Ruby", "C#"],
  },
  {
    nombre: "Dolly Barnett",
    pais: "Uruguay",
    edad: 31,
    area: "Soporte",
    puesto: "Analyst",
    seniority: "Senior",
    sueldo: 35665,
    haceGuardia: false,
    lenguajes: ["Python", "C#", "PHP"],
  },
  {
    nombre: "Short Butler",
    pais: "Venezuela",
    edad: 38,
    area: "Seguridad",
    puesto: "DevOps",
    seniority: "Junior",
    sueldo: 99270,
    haceGuardia: true,
    lenguajes: [],
  },
  {
    nombre: "Beard Green",
    pais: "Bolivia",
    edad: 35,
    area: "Seguridad",
    puesto: "Frontend Developer",
    seniority: "Semisenior",
    sueldo: 37729,
    haceGuardia: false,
    lenguajes: [],
  },
  {
    nombre: "House Morse",
    pais: "Paraguay",
    edad: 35,
    area: "Soporte",
    puesto: "Data analyst",
    seniority: "Semisenior",
    sueldo: 45354,
    haceGuardia: false,
    lenguajes: ["JavaScript", "PHP", "Python"],
  },
  {
    nombre: "Butler Lynch",
    pais: "Colombia",
    edad: 20,
    area: "QA",
    puesto: "DevOps",
    seniority: "Senior",
    sueldo: 22885,
    haceGuardia: false,
    lenguajes: ["JavaScript", "C#", "Python", "Java", "Ruby", "PHP"],
  },
  {
    nombre: "Jennifer Snyder",
    pais: "Colombia",
    edad: 42,
    area: "Infraestructura",
    puesto: "Backend Developer",
    seniority: "Junior",
    sueldo: 86688,
    haceGuardia: true,
    lenguajes: ["Python", "C#"],
  },
  {
    nombre: "Peterson Arnold",
    pais: "Uruguay",
    edad: 47,
    area: "QA",
    puesto: "Frontend Developer",
    seniority: "Junior",
    sueldo: 91786,
    haceGuardia: false,
    lenguajes: [],
  },
  {
    nombre: "Cherry Valencia",
    pais: "Colombia",
    edad: 47,
    area: "Soporte",
    puesto: "Architect",
    seniority: "Semisenior",
    sueldo: 84314,
    haceGuardia: true,
    lenguajes: ["Java", "C#", "Python", "PHP"],
  },
  {
    nombre: "Sheila Ayala",
    pais: "Colombia",
    edad: 38,
    area: "Desarrollo",
    puesto: "Tester",
    seniority: "Junior",
    sueldo: 87495,
    haceGuardia: false,
    lenguajes: [],
  },
  {
    nombre: "Ola Levy",
    pais: "Paraguay",
    edad: 42,
    area: "QA",
    puesto: "Architect",
    seniority: "Junior",
    sueldo: 57677,
    haceGuardia: true,
    lenguajes: ["PHP", "Java", "Python"],
  },
  {
    nombre: "Madden Bright",
    pais: "Venezuela",
    edad: 39,
    area: "Soporte",
    puesto: "Backend Developer",
    seniority: "Trainee",
    sueldo: 65301,
    haceGuardia: true,
    lenguajes: ["PHP"],
  },
  {
    nombre: "Tammie Merrill",
    pais: "México",
    edad: 38,
    area: "Infraestructura",
    puesto: "Analyst",
    seniority: "Junior",
    sueldo: 93098,
    haceGuardia: true,
    lenguajes: ["Ruby", "PHP", "Java", "C#", "JavaScript"],
  },
  {
    nombre: "Nita Buchanan",
    pais: "México",
    edad: 37,
    area: "Seguridad",
    puesto: "Tester",
    seniority: "Junior",
    sueldo: 58972,
    haceGuardia: true,
    lenguajes: ["PHP", "Java", "C#", "JavaScript", "Ruby"],
  },
  {
    nombre: "Josie Mullen",
    pais: "Brasil",
    edad: 26,
    area: "Seguridad",
    puesto: "DevOps",
    seniority: "Senior",
    sueldo: 51718,
    haceGuardia: true,
    lenguajes: ["C#", "Java"],
  },
  {
    nombre: "Amelia Rhodes",
    pais: "México",
    edad: 42,
    area: "Soporte",
    puesto: "Architect",
    seniority: "Junior",
    sueldo: 76394,
    haceGuardia: true,
    lenguajes: ["PHP"],
  },
  {
    nombre: "George Richardson",
    pais: "Brasil",
    edad: 33,
    area: "Seguridad",
    puesto: "Architect",
    seniority: "Junior",
    sueldo: 63200,
    haceGuardia: true,
    lenguajes: ["JavaScript", "PHP", "Ruby"],
  },
  {
    nombre: "Lopez Simon",
    pais: "Uruguay",
    edad: 33,
    area: "Infraestructura",
    puesto: "Data analyst",
    seniority: "Semisenior",
    sueldo: 15556,
    haceGuardia: true,
    lenguajes: ["PHP", "JavaScript", "Java", "Python"],
  },
  {
    nombre: "Bentley Odonnell",
    pais: "Brasil",
    edad: 33,
    area: "Desarrollo",
    puesto: "Tester",
    seniority: "Trainee",
    sueldo: 41923,
    haceGuardia: false,
    lenguajes: ["C#", "JavaScript", "Python", "Ruby"],
  },
  {
    nombre: "Witt Hansen",
    pais: "México",
    edad: 23,
    area: "Infraestructura",
    puesto: "Backend Developer",
    seniority: "Junior",
    sueldo: 34951,
    haceGuardia: true,
    lenguajes: ["JavaScript", "PHP", "Ruby", "Python"],
  },
  {
    nombre: "Isabelle Duran",
    pais: "Perú",
    edad: 30,
    area: "Desarrollo",
    puesto: "Tester",
    seniority: "Trainee",
    sueldo: 41876,
    haceGuardia: false,
    lenguajes: [],
  },
  {
    nombre: "Trina Beach",
    pais: "Venezuela",
    edad: 41,
    area: "Soporte",
    puesto: "Data analyst",
    seniority: "Semisenior",
    sueldo: 79688,
    haceGuardia: false,
    lenguajes: ["PHP", "JavaScript", "Python", "Java", "C#"],
  },
  {
    nombre: "Rose Valenzuela",
    pais: "Argentina",
    edad: 44,
    area: "Infraestructura",
    puesto: "Frontend Developer",
    seniority: "Trainee",
    sueldo: 35010,
    haceGuardia: false,
    lenguajes: ["JavaScript", "C#", "Python", "Ruby"],
  },
  {
    nombre: "Nadia Conrad",
    pais: "Colombia",
    edad: 20,
    area: "Desarrollo",
    puesto: "Backend Developer",
    seniority: "Senior",
    sueldo: 41377,
    haceGuardia: false,
    lenguajes: ["JavaScript", "Java", "Python", "PHP", "Ruby"],
  },
  {
    nombre: "Minnie Mcfadden",
    pais: "Uruguay",
    edad: 47,
    area: "Infraestructura",
    puesto: "DevOps",
    seniority: "Senior",
    sueldo: 45466,
    haceGuardia: false,
    lenguajes: ["JavaScript", "C#", "PHP", "Ruby"],
  },
  {
    nombre: "Victoria Cleveland",
    pais: "Colombia",
    edad: 46,
    area: "Infraestructura",
    puesto: "DevOps",
    seniority: "Junior",
    sueldo: 39982,
    haceGuardia: true,
    lenguajes: ["C#", "Ruby", "Python", "PHP", "JavaScript"],
  },
  {
    nombre: "Kirkland Downs",
    pais: "Venezuela",
    edad: 20,
    area: "QA",
    puesto: "Frontend Developer",
    seniority: "Junior",
    sueldo: 53821,
    haceGuardia: false,
    lenguajes: ["Python"],
  },
  {
    nombre: "Mcclain Coffey",
    pais: "Colombia",
    edad: 30,
    area: "Desarrollo",
    puesto: "Tester",
    seniority: "Trainee",
    sueldo: 24530,
    haceGuardia: false,
    lenguajes: ["PHP", "Java"],
  },
  {
    nombre: "Essie Fowler",
    pais: "Uruguay",
    edad: 42,
    area: "Seguridad",
    puesto: "Data analyst",
    seniority: "Senior",
    sueldo: 24168,
    haceGuardia: true,
    lenguajes: [],
  },
  {
    nombre: "Berta Burch",
    pais: "Chile",
    edad: 26,
    area: "Desarrollo",
    puesto: "Backend Developer",
    seniority: "Trainee",
    sueldo: 20568,
    haceGuardia: true,
    lenguajes: ["C#", "JavaScript", "Ruby", "PHP", "Java", "Python"],
  },
  {
    nombre: "Delacruz Dale",
    pais: "Perú",
    edad: 32,
    area: "Infraestructura",
    puesto: "Backend Developer",
    seniority: "Trainee",
    sueldo: 43729,
    haceGuardia: true,
    lenguajes: ["Ruby", "C#"],
  },
  {
    nombre: "Mari Webb",
    pais: "Colombia",
    edad: 37,
    area: "Soporte",
    puesto: "Tester",
    seniority: "Senior",
    sueldo: 82682,
    haceGuardia: true,
    lenguajes: ["Ruby", "C#", "JavaScript", "PHP", "Python"],
  },
  {
    nombre: "Mcconnell Maxwell",
    pais: "Perú",
    edad: 23,
    area: "Seguridad",
    puesto: "DevOps",
    seniority: "Senior",
    sueldo: 55068,
    haceGuardia: false,
    lenguajes: [],
  },
  {
    nombre: "Rich Wallace",
    pais: "Perú",
    edad: 35,
    area: "Soporte",
    puesto: "Data analyst",
    seniority: "Junior",
    sueldo: 49050,
    haceGuardia: false,
    lenguajes: ["Python", "PHP", "C#", "JavaScript", "Ruby"],
  },
  {
    nombre: "Dunlap Mullins",
    pais: "Argentina",
    edad: 45,
    area: "Soporte",
    puesto: "Analyst",
    seniority: "Senior",
    sueldo: 81267,
    haceGuardia: false,
    lenguajes: ["PHP", "C#", "JavaScript", "Java", "Python", "Ruby"],
  },
  {
    nombre: "Mercedes Roman",
    pais: "Argentina",
    edad: 48,
    area: "Infraestructura",
    puesto: "Frontend Developer",
    seniority: "Senior",
    sueldo: 97992,
    haceGuardia: true,
    lenguajes: ["Java", "PHP", "C#"],
  },
  {
    nombre: "Tabitha Charles",
    pais: "Chile",
    edad: 26,
    area: "Desarrollo",
    puesto: "Backend Developer",
    seniority: "Junior",
    sueldo: 71246,
    haceGuardia: false,
    lenguajes: ["JavaScript", "PHP", "Ruby"],
  },
  {
    nombre: "Kerry Carney",
    pais: "México",
    edad: 29,
    area: "Seguridad",
    puesto: "Data analyst",
    seniority: "Senior",
    sueldo: 21462,
    haceGuardia: true,
    lenguajes: ["JavaScript", "Java", "Python", "Ruby", "C#", "PHP"],
  },
  {
    nombre: "Knox Cash",
    pais: "Argentina",
    edad: 21,
    area: "QA",
    puesto: "DevOps",
    seniority: "Senior",
    sueldo: 40408,
    haceGuardia: false,
    lenguajes: ["Java", "JavaScript", "PHP"],
  },
  {
    nombre: "Goodwin Griffith",
    pais: "México",
    edad: 34,
    area: "Soporte",
    puesto: "Frontend Developer",
    seniority: "Trainee",
    sueldo: 42841,
    haceGuardia: false,
    lenguajes: ["JavaScript", "C#"],
  },
  {
    nombre: "Shelly Bryant",
    pais: "Venezuela",
    edad: 40,
    area: "Seguridad",
    puesto: "Architect",
    seniority: "Senior",
    sueldo: 28972,
    haceGuardia: false,
    lenguajes: ["Java"],
  },
  {
    nombre: "Aimee Robertson",
    pais: "Venezuela",
    edad: 22,
    area: "Desarrollo",
    puesto: "Backend Developer",
    seniority: "Junior",
    sueldo: 35908,
    haceGuardia: true,
    lenguajes: ["C#"],
  },
  {
    nombre: "Wendi Case",
    pais: "Perú",
    edad: 25,
    area: "Infraestructura",
    puesto: "Architect",
    seniority: "Trainee",
    sueldo: 58497,
    haceGuardia: false,
    lenguajes: ["PHP", "C#", "JavaScript", "Ruby", "Python"],
  },
  {
    nombre: "Rocha Jordan",
    pais: "Venezuela",
    edad: 29,
    area: "Soporte",
    puesto: "DevOps",
    seniority: "Semisenior",
    sueldo: 24891,
    haceGuardia: false,
    lenguajes: ["C#", "Ruby", "JavaScript"],
  },
  {
    nombre: "Tracy Hoover",
    pais: "Bolivia",
    edad: 30,
    area: "Soporte",
    puesto: "Backend Developer",
    seniority: "Senior",
    sueldo: 66318,
    haceGuardia: false,
    lenguajes: ["PHP", "Python", "Java", "Ruby"],
  },
  {
    nombre: "Schultz Mooney",
    pais: "México",
    edad: 27,
    area: "QA",
    puesto: "DevOps",
    seniority: "Junior",
    sueldo: 48811,
    haceGuardia: true,
    lenguajes: ["Ruby", "Java", "Python", "PHP"],
  },
  {
    nombre: "Emma Head",
    pais: "Venezuela",
    edad: 35,
    area: "Desarrollo",
    puesto: "Analyst",
    seniority: "Senior",
    sueldo: 33611,
    haceGuardia: false,
    lenguajes: ["PHP", "Ruby", "JavaScript", "Java"],
  },
  {
    nombre: "Norris Compton",
    pais: "Perú",
    edad: 40,
    area: "Soporte",
    puesto: "DevOps",
    seniority: "Senior",
    sueldo: 66554,
    haceGuardia: false,
    lenguajes: ["Python", "C#", "JavaScript", "PHP"],
  },
  {
    nombre: "Francine Beasley",
    pais: "Brasil",
    edad: 29,
    area: "Infraestructura",
    puesto: "Frontend Developer",
    seniority: "Junior",
    sueldo: 24640,
    haceGuardia: true,
    lenguajes: ["Java", "Python", "PHP", "Ruby"],
  },
  {
    nombre: "Nieves Crane",
    pais: "Paraguay",
    edad: 27,
    area: "Soporte",
    puesto: "Architect",
    seniority: "Semisenior",
    sueldo: 58441,
    haceGuardia: false,
    lenguajes: ["JavaScript", "Ruby", "C#"],
  },
  {
    nombre: "Hurley House",
    pais: "Chile",
    edad: 30,
    area: "Soporte",
    puesto: "Data analyst",
    seniority: "Junior",
    sueldo: 69383,
    haceGuardia: false,
    lenguajes: ["Python", "PHP"],
  },
  {
    nombre: "Tanisha Hendrix",
    pais: "Chile",
    edad: 34,
    area: "Soporte",
    puesto: "Frontend Developer",
    seniority: "Senior",
    sueldo: 96636,
    haceGuardia: true,
    lenguajes: ["Java", "Ruby", "JavaScript"],
  },
  {
    nombre: "Tameka Holder",
    pais: "Brasil",
    edad: 31,
    area: "Seguridad",
    puesto: "Tester",
    seniority: "Trainee",
    sueldo: 26627,
    haceGuardia: false,
    lenguajes: ["Python", "Ruby"],
  },
  {
    nombre: "Nichole Boone",
    pais: "Argentina",
    edad: 24,
    area: "Seguridad",
    puesto: "Frontend Developer",
    seniority: "Trainee",
    sueldo: 62911,
    haceGuardia: false,
    lenguajes: ["C#", "Java", "PHP"],
  },
  {
    nombre: "Latonya Lamb",
    pais: "Bolivia",
    edad: 36,
    area: "Seguridad",
    puesto: "Architect",
    seniority: "Trainee",
    sueldo: 74607,
    haceGuardia: true,
    lenguajes: ["Ruby"],
  },
  {
    nombre: "Espinoza Yang",
    pais: "Venezuela",
    edad: 43,
    area: "Seguridad",
    puesto: "DevOps",
    seniority: "Junior",
    sueldo: 80216,
    haceGuardia: false,
    lenguajes: ["C#", "PHP", "Ruby"],
  },
  {
    nombre: "Erma Jenkins",
    pais: "Perú",
    edad: 35,
    area: "Infraestructura",
    puesto: "Analyst",
    seniority: "Trainee",
    sueldo: 32293,
    haceGuardia: false,
    lenguajes: ["C#", "JavaScript", "Python", "PHP"],
  },
  {
    nombre: "Eugenia Carpenter",
    pais: "Chile",
    edad: 22,
    area: "Soporte",
    puesto: "DevOps",
    seniority: "Senior",
    sueldo: 93034,
    haceGuardia: false,
    lenguajes: ["Java", "JavaScript", "Ruby", "Python"],
  },
  {
    nombre: "Atkins English",
    pais: "Paraguay",
    edad: 28,
    area: "Seguridad",
    puesto: "Analyst",
    seniority: "Semisenior",
    sueldo: 84672,
    haceGuardia: true,
    lenguajes: ["PHP"],
  },
  {
    nombre: "Shelby Estes",
    pais: "Venezuela",
    edad: 38,
    area: "Seguridad",
    puesto: "Backend Developer",
    seniority: "Senior",
    sueldo: 44650,
    haceGuardia: true,
    lenguajes: ["Python", "Java", "C#", "PHP", "JavaScript"],
  },
  {
    nombre: "Kimberly Hood",
    pais: "Colombia",
    edad: 41,
    area: "Seguridad",
    puesto: "Analyst",
    seniority: "Senior",
    sueldo: 79572,
    haceGuardia: false,
    lenguajes: ["Ruby"],
  },
  {
    nombre: "Socorro Reid",
    pais: "Bolivia",
    edad: 45,
    area: "Seguridad",
    puesto: "Architect",
    seniority: "Trainee",
    sueldo: 51162,
    haceGuardia: false,
    lenguajes: ["JavaScript", "C#", "PHP"],
  },
  {
    nombre: "Marguerite Dawson",
    pais: "México",
    edad: 31,
    area: "Soporte",
    puesto: "Frontend Developer",
    seniority: "Junior",
    sueldo: 39509,
    haceGuardia: true,
    lenguajes: ["Ruby", "Java", "PHP"],
  },
  {
    nombre: "Marilyn William",
    pais: "Paraguay",
    edad: 20,
    area: "Seguridad",
    puesto: "DevOps",
    seniority: "Trainee",
    sueldo: 34648,
    haceGuardia: true,
    lenguajes: ["Python", "Ruby", "JavaScript", "Java"],
  },
  {
    nombre: "Betsy Bates",
    pais: "Paraguay",
    edad: 36,
    area: "Soporte",
    puesto: "Tester",
    seniority: "Trainee",
    sueldo: 55152,
    haceGuardia: true,
    lenguajes: ["Ruby", "PHP"],
  },
  {
    nombre: "Harrison Walters",
    pais: "Perú",
    edad: 42,
    area: "Infraestructura",
    puesto: "Data analyst",
    seniority: "Semisenior",
    sueldo: 44306,
    haceGuardia: true,
    lenguajes: ["C#", "Ruby", "Python", "Java", "JavaScript"],
  },
  {
    nombre: "Conley Mcgee",
    pais: "Colombia",
    edad: 22,
    area: "Infraestructura",
    puesto: "Data analyst",
    seniority: "Junior",
    sueldo: 83793,
    haceGuardia: false,
    lenguajes: ["PHP", "Ruby", "JavaScript", "Java"],
  },
  {
    nombre: "Angelica Adkins",
    pais: "Perú",
    edad: 45,
    area: "Seguridad",
    puesto: "Tester",
    seniority: "Junior",
    sueldo: 35471,
    haceGuardia: false,
    lenguajes: ["Ruby"],
  },
  {
    nombre: "Maynard Greer",
    pais: "Brasil",
    edad: 43,
    area: "Seguridad",
    puesto: "Architect",
    seniority: "Junior",
    sueldo: 21202,
    haceGuardia: false,
    lenguajes: ["JavaScript", "PHP"],
  },
  {
    nombre: "Marjorie Griffin",
    pais: "Colombia",
    edad: 28,
    area: "Seguridad",
    puesto: "Frontend Developer",
    seniority: "Junior",
    sueldo: 64591,
    haceGuardia: false,
    lenguajes: ["JavaScript", "Python"],
  },
  {
    nombre: "Marcia Allen",
    pais: "México",
    edad: 33,
    area: "Infraestructura",
    puesto: "DevOps",
    seniority: "Trainee",
    sueldo: 71814,
    haceGuardia: false,
    lenguajes: ["PHP", "Ruby", "JavaScript", "Java", "C#"],
  },
  {
    nombre: "Mclaughlin Rocha",
    pais: "Perú",
    edad: 21,
    area: "Seguridad",
    puesto: "Architect",
    seniority: "Senior",
    sueldo: 68572,
    haceGuardia: true,
    lenguajes: ["Java", "JavaScript", "Ruby", "C#"],
  },
  {
    nombre: "Spence Ingram",
    pais: "Bolivia",
    edad: 40,
    area: "Desarrollo",
    puesto: "Tester",
    seniority: "Senior",
    sueldo: 34398,
    haceGuardia: true,
    lenguajes: ["Ruby", "C#", "PHP", "JavaScript"],
  },
  {
    nombre: "Kendra Bray",
    pais: "Bolivia",
    edad: 31,
    area: "QA",
    puesto: "Analyst",
    seniority: "Trainee",
    sueldo: 82612,
    haceGuardia: true,
    lenguajes: ["Ruby", "C#", "PHP", "Python", "Java"],
  },
  {
    nombre: "Burton Parsons",
    pais: "Argentina",
    edad: 42,
    area: "Soporte",
    puesto: "Data analyst",
    seniority: "Semisenior",
    sueldo: 94155,
    haceGuardia: false,
    lenguajes: ["Ruby"],
  },
  {
    nombre: "Dollie Wilkins",
    pais: "Colombia",
    edad: 32,
    area: "Seguridad",
    puesto: "Data analyst",
    seniority: "Semisenior",
    sueldo: 25161,
    haceGuardia: true,
    lenguajes: ["JavaScript", "C#", "Python", "Ruby", "Java", "PHP"],
  },
  {
    nombre: "Shauna Coleman",
    pais: "Bolivia",
    edad: 20,
    area: "Seguridad",
    puesto: "Frontend Developer",
    seniority: "Junior",
    sueldo: 29595,
    haceGuardia: false,
    lenguajes: ["JavaScript", "PHP", "C#", "Ruby"],
  },
  {
    nombre: "Cross Weber",
    pais: "Paraguay",
    edad: 40,
    area: "Soporte",
    puesto: "Backend Developer",
    seniority: "Semisenior",
    sueldo: 55857,
    haceGuardia: true,
    lenguajes: ["Ruby"],
  },
  {
    nombre: "Mueller Whitehead",
    pais: "Perú",
    edad: 21,
    area: "Seguridad",
    puesto: "Architect",
    seniority: "Semisenior",
    sueldo: 60691,
    haceGuardia: true,
    lenguajes: ["Ruby", "Java", "JavaScript", "C#"],
  },
  {
    nombre: "Joann Tillman",
    pais: "Colombia",
    edad: 43,
    area: "Infraestructura",
    puesto: "Architect",
    seniority: "Trainee",
    sueldo: 37502,
    haceGuardia: true,
    lenguajes: ["JavaScript", "Python", "Java", "C#", "Ruby", "PHP"],
  },
  {
    nombre: "Rosalind French",
    pais: "Colombia",
    edad: 22,
    area: "QA",
    puesto: "Backend Developer",
    seniority: "Junior",
    sueldo: 58103,
    haceGuardia: false,
    lenguajes: [],
  },
  {
    nombre: "Kaufman Vasquez",
    pais: "Argentina",
    edad: 37,
    area: "Seguridad",
    puesto: "Data analyst",
    seniority: "Junior",
    sueldo: 97466,
    haceGuardia: false,
    lenguajes: ["Ruby", "C#", "PHP", "JavaScript", "Python"],
  },
  {
    nombre: "Inez Emerson",
    pais: "Perú",
    edad: 38,
    area: "Infraestructura",
    puesto: "Frontend Developer",
    seniority: "Senior",
    sueldo: 30992,
    haceGuardia: true,
    lenguajes: ["C#", "Java", "Python", "PHP"],
  },
  {
    nombre: "Acevedo Henderson",
    pais: "Brasil",
    edad: 20,
    area: "Seguridad",
    puesto: "Architect",
    seniority: "Trainee",
    sueldo: 55891,
    haceGuardia: true,
    lenguajes: ["PHP", "Java", "JavaScript"],
  },
  {
    nombre: "Erin Guerrero",
    pais: "Bolivia",
    edad: 33,
    area: "Seguridad",
    puesto: "Architect",
    seniority: "Semisenior",
    sueldo: 22605,
    haceGuardia: false,
    lenguajes: ["JavaScript", "Ruby", "C#"],
  },
  {
    nombre: "Camacho Serrano",
    pais: "Brasil",
    edad: 45,
    area: "Soporte",
    puesto: "Analyst",
    seniority: "Semisenior",
    sueldo: 49426,
    haceGuardia: true,
    lenguajes: ["PHP", "Ruby", "Java"],
  },
  {
    nombre: "Mcleod Romero",
    pais: "México",
    edad: 32,
    area: "Infraestructura",
    puesto: "DevOps",
    seniority: "Trainee",
    sueldo: 33800,
    haceGuardia: false,
    lenguajes: ["PHP"],
  },
  {
    nombre: "Francesca Bird",
    pais: "Paraguay",
    edad: 22,
    area: "Seguridad",
    puesto: "Backend Developer",
    seniority: "Trainee",
    sueldo: 42628,
    haceGuardia: false,
    lenguajes: ["Python", "Java"],
  },
  {
    nombre: "Avila Roy",
    pais: "Perú",
    edad: 32,
    area: "Soporte",
    puesto: "Analyst",
    seniority: "Semisenior",
    sueldo: 84245,
    haceGuardia: false,
    lenguajes: ["Ruby", "C#", "Java", "PHP"],
  },
  {
    nombre: "Delia Ellison",
    pais: "Argentina",
    edad: 44,
    area: "Infraestructura",
    puesto: "Architect",
    seniority: "Trainee",
    sueldo: 86942,
    haceGuardia: false,
    lenguajes: ["C#", "JavaScript"],
  },
  {
    nombre: "Lakeisha Martin",
    pais: "Venezuela",
    edad: 44,
    area: "Desarrollo",
    puesto: "Architect",
    seniority: "Trainee",
    sueldo: 24946,
    haceGuardia: false,
    lenguajes: ["Ruby", "JavaScript", "C#"],
  },
  {
    nombre: "Cummings Woods",
    pais: "Venezuela",
    edad: 31,
    area: "QA",
    puesto: "Backend Developer",
    seniority: "Senior",
    sueldo: 74987,
    haceGuardia: true,
    lenguajes: ["Ruby", "JavaScript", "PHP", "Python", "Java"],
  },
];
// Hacer las siguientes funciones:

// empleadesQueHacenGuardia, que devuelva un array con todes les empleades que hacen guardia
console.log(empleades.length);

const empleadesQueHacenGuardia1 = (array) => {
  const hacenGuardia = array.filter((empleado) => {
    return empleado.haceGuardia === true;
  });
  return hacenGuardia;
};
const empleadesQueHacenGuardia = () => {
  const empleadesFiltro = empleades.filter(({ haceGuardia }) => haceGuardia);
  return empleadesFiltro;
};

const empleadesQueHacenGuardia2 = (array) => {
  const empleadosHacenGuardia = array.filter((empleado) => {
    const { haceGuardia } = empleado;
    return haceGuardia;
  });
  return empleadosHacenGuardia;
};

console.log(empleadesQueHacenGuardia());

console.log(empleadesQueHacenGuardia1(empleades));
console.log(empleadesQueHacenGuardia2(empleades));

// empleadesPorPais, que tome por parámetro el nombre de un país y devuelva un array con todes les empleades que son de dicho país

const empleadesPorPais = (array, paisEmpleado) => {
  const empleadosDeUnPais = array.filter((empleado) => {
    const { pais } = empleado;
    return paisEmpleado === pais;
  });
  return empleadosDeUnPais;
};
console.log(empleadesPorPais(empleades, "Venezuela"));

// empleadesPorArea, que tome por parámetro el nombre de un área y devuelva un array con todes les empleades que son de dicho área

function empleadesPorArea(array, nombreArea) {
  const empleadesFiltrades = array.filter((empleado) => {
    return empleado.area === nombreArea;
  });

  return empleadesFiltrades;
}
console.log(empleadesPorArea(empleades, "Desarrollo"));

//aca solo me devuelve los nombres de los que estan en esa areas

function empleadesPorArea1(array, nombreArea) {
  const empleadesFiltrades = array.filter((empleado) => {
    return empleado.area === nombreArea;
  });
  const nombresEmpleades = empleadesFiltrades.map(
    (empleado) => empleado.nombre
  );
  return nombresEmpleades;
}
console.log(empleadesPorArea1(empleades, "Desarrollo"));

// empleadesConSueldoMayorA, que tome por parámetro un número como sueldo y devuelva un array con todes les empleades que tengan un sueldo mayor a dicho número, ordenados de menor a mayor según sueldo

function empleadesConSueldoMayorA(array, mayorA) {
  const sueldoMayor = array.filter((empleado) => {
    return empleado.sueldo > mayorA;
  });
  sueldoMayor.sort((a, b) => a.sueldo - b.sueldo);
  return sueldoMayor;
}

console.log(empleadesConSueldoMayorA(empleades, 40000));

// empleadesConMasLenguajes, que tome por parámetro un número y devuelva un array con aquelles empleades que sepan más lenguajes que dicho número

function empleadesConMasLenguajes(array, masLenguajes) {
  const lenguaje = array.filter((empleado) => {
    return empleado.lenguajes.length > masLenguajes;
  });

  return lenguaje;
}
console.log(empleadesConMasLenguajes(empleades, 4));

// sueldoPromedioEmpleades, que devuelva el sueldo promedio de todos los empleados

function sueldoPromedioEmpleades(array) {
  const totalEmpleades = array.length;
  let sumaSueldos = 0;
  array.forEach((empleado) => {
    sumaSueldos += empleado.sueldo;
  });
  const sueldoPromedio = sumaSueldos / totalEmpleades;

  return sueldoPromedio;
}

console.log(sueldoPromedioEmpleades(empleades));

// sueldoPromedioPorSeniority, que tome por parámetro un seniority, y devuelva el sueldo promedio de todes les empleades que tengan ese seniority

function sueldoPromedioPorSeniority(array, seniority) {
  const totalSeniority = array.filter((empleado) => {
    return empleado.seniority === seniority;
  });
  let sumaSueldos = 0;
  totalSeniority.forEach((empleado) => {
    sumaSueldos += empleado.sueldo;
  });
  const sueldoPromedio = sumaSueldos / totalSeniority.length;

  return sueldoPromedio;
}

console.log(sueldoPromedioPorSeniority(empleades, "Junior"));

// buscarEmpleades, que tome por parámetros area, puesto y seniority, y devuelva un array con les empleades que pertenezcan a dicha area, puesto y seniority

function buscarEmpleades(
  array,
  empladosArea,
  empladosPuesto,
  empleadoSeniority
) {
  const empleadosFiltrados = array.filter((empleado) => {
    return (
      empleado.area === empladosArea &&
      empleado.puesto === empladosPuesto &&
      empleado.seniority === empleadoSeniority
    );
  });

  return empleadosFiltrados;
}

console.log(buscarEmpleades(empleades, "Seguridad", "Architect", "Junior"));

// errorEnProduccion, que ponga en true la propiedad haceGuardia de todos los empleados

function errorEnProduccion(array) {
  array.forEach((empleado) => {
    empleado.haceGuardia = true;
  });
  return array;
}
console.log(errorEnProduccion([...empleades]));
console.log(empleadesQueHacenGuardia2(errorEnProduccion([...empleades]))); //para ver si cambio

// subirDeCategoria, que tome como parámetro un objeto empleade. Si diche empleade no tiene un seniority "Senior", cambiar el valor de su propiedad seniority con el siguiente que le corresponde en orden ("Trainee" -> "Junior" -> "Semisenior" -> "Senior"), y le incremente en 10000 el sueldo
const subirDeCategoria = (array, nombreEmpleado) => {
  const empleadoEncontrado = array.find((empleado) => {
    return empleado.nombre === nombreEmpleado;
  });
  const empleadoDelArray = array[array.indexOf(empleadoEncontrado)];

  if (empleadoDelArray.seniority === "Trainee") {
    empleadoDelArray.seniority = "Junior";
    empleadoDelArray.sueldo += 10000;
    console.log("Trainee");
  } else if (empleadoDelArray.seniority === "Junior") {
    empleadoDelArray.seniority = "Semisenior";
    empleadoDelArray.sueldo += 10000;
    console.log("junior");
  } else if (empleadoDelArray.seniority === "Semisenior") {
    empleadoDelArray.seniority = "Senior";
    empleadoDelArray.sueldo += 10000;
    console.log("semisenior");
  }
  return array;
};
console.log(subirDeCategoria(empleades, "Wade Morgan"));

// agregarTecnologias, que agregue a todos los objetos empleades la propiedad tecnologías,que es un array conteniendo los valores "GIT" y "Node.js"

const agregarTecnologias = (array) => {
  const tecnologiasNuevas = array.map((empleado) => {
    empleado.tecnologias = ["GIT", "Node.js"];
    return empleado;
  });
  return tecnologiasNuevas;
};

console.log(agregarTecnologias(empleades));

// empleadeSabeLenguaje, que tome por parámetro un objeto empleade (elemento del array empleades) y un lenguaje y devuelva true si dicho empleade sabe dicho lenguaje

const empleadeSabeLenguaje = (array, nombreEmpleado, lenguaje) => {
  const empleadoEncontrado = array.find(
    (empleado) => empleado.nombre === nombreEmpleado
  );

  if (empleadoEncontrado) {
    return empleadoEncontrado.lenguajes.includes(lenguaje);
  } else {
    return false;
  }
};
console.log(empleadeSabeLenguaje(empleades, "Camacho Serrano", "Python"));

// empleadesQueSabenLenguaje, que tome por parámetro un lenguaje y devuelva todes les empleades que saben dicho lenguaje (usar la función anterior)

const empleadesQueSabenLenguajes = (array, lenguaje) => {
  const empleadosLenguaje = array.filter((empleado) =>
    empleado.lenguajes.includes(lenguaje)
  );

  return empleadosLenguaje.map((empleado) => empleado.nombre);
};

console.log(empleadesQueSabenLenguajes(empleades, "Python"));

// empleadesQueSabenLenguajes, que tome por parámetro un array de lenguajes y devuelva un array con aquelles empleades que sepan todos esos lenguajes

const empleadesQueSabenLenguajes1 = (array, lenguajes) => {
  const empleadosLenguaje = array.filter((empleado) =>
    lenguajes.every((lenguaje) => empleado.lenguajes.includes(lenguaje))
  );
  return empleadosLenguaje.map((empleado) => empleado.nombre);
};

console.log(empleadesQueSabenLenguajes1(empleades, ["Python", "Java", "Ruby"]));

// empleadesQueSabenAlgunosLenguajes, que tome por parámetro un array de lenguajes y devuelva un array con aquelles empleades que sepan al menos uno de esos lenguajes
const empleadesQueSabenAlgunosLenguajes = (array, lenguajes) => {
  const empleadosLenguaje = array.filter((empleado) =>
    lenguajes.some((lenguaje) => empleado.lenguajes.includes(lenguaje))
  );
  return empleadosLenguaje.map((empleado) => empleado.nombre);
};

console.log(empleadesQueSabenAlgunosLenguajes(empleades, ["Python", "Java"]));
// empleadesConMejorSueldo, que devuelva un array con los 10 mejores empleades pagos (investigar metodo sort)

const empleadesConMejorSueldo = (array) => {
  const empleadosOrdenadosPorSueldo = array.sort((a, b) => b.sueldo - a.sueldo);
  return empleadosOrdenadosPorSueldo.slice(0, 10);
};

console.log(empleadesConMejorSueldo(empleades));

// obtenerTitulosCompletos, que devuelva un array donde cada elemento es un string con la forma "nombre, puesto seniority, area", p.ej.: "Nadia Conrad, Senior Backend Developer, Desarrollo", habiendo un elemento por cada empleade (usar map)
const obtenerTitulosCompletos = (array) => {
  return array.map(
    (empleado) =>
      `${empleado.nombre}, ${empleado.pais},${empleado.edad}, ${empleado.area},${empleado.puesto}, ${empleado.seniority} ${empleado.sueldo},${empleado.haceGuardia},${empleado.lenguajes} `
  );
};

console.log(obtenerTitulosCompletos(empleades));

// obtenerInfoPersonal, que devuelva un array donde cada elemento es un objeto con las propiedades// nombre
// pais
// edad habiendo un elemento por cada empleade, y donde cada propiedad se corresponde a la propiedad del objeto original (usar map)
const obtenerInfoPersonal = (array) => {
  return array.map((empleado) => {
    const { nombre, pais, edad } = empleado;
    return {
      nombre,
      pais,
      edad,
    };
  });
};

console.log(obtenerInfoPersonal(empleades));

// obtenerInfoPuestos, que devuelva un array donde cada elemento es un objeto con las propiedades

// nombre
// area
// puesto
// seniority habiendo un elemento por cada empleade, y donde cada propiedad se corresponde a la propiedad del objeto original (usar map)

const obtenerInfoPuestos = (array) => {
  return array.map((empleado) => {
    const { nombre, area, puesto } = empleado;
    return {
      nombre,
      area,
      puesto,
    };
  });
};

console.log(obtenerInfoPuestos(empleades));

// obtenerInfoSeniority, que devuelva un array donde cada elemento es un objeto con las propiedades

// nombre
// seniority
// sueldo
const obtenerInfoSeniority = (array) => {
  return array.map((empleado) => {
    const { nombre, seniority, sueldo } = empleado;
    return {
      nombre,
      seniority,
      sueldo,
    };
  });
};

console.log(obtenerInfoSeniority(empleades));

// cantidadLenguajes habiendo un elemento por cada empleade, y donde cada propiedad se corresponde a la propiedad del objeto original, eecepto cantidadLenguajes, que es un número indicando la cantidad de lenguajes que sabe (usar map)
const cantidadLenguajes = (array) => {
  return array.map((empleado) => {
    const { nombre, lenguajes } = empleado; // Destructuración para obtener las propiedades deseadas
    const cantidad = lenguajes.length; // Obtiene la cantidad de lenguajes que sabe el empleado
    return { nombre, cantidadLenguajes: cantidad };
  });
};

console.log(cantidadLenguajes(empleades));

// obtenerInfoPagos, que devuelva una array donde cada elemento es un objeto con las propiedades

// nombre
// sueldoBruto
// obraSocial
// jubilacion
// sueldoNeto habiendo un elemento por cada empleade, donde
// sueldoBruto es el sueldo del objeto original
// obraSocial es el 3% del sueldoBruto
// jubilacion es el 11% del sueldoBruto
// sueldoNeto es el resultado de restarle a sueldoBruto los valores de obraSocial y jubilacion

const obtenerInfoPagos = (array) => {
  return array.map((empleado) => {
    const { nombre, sueldo } = empleado;
    const obraSocial = sueldo * 0.03;
    const jubilacion = sueldo * 0.11;
    const sueldoNeto = sueldo - obraSocial - jubilacion;
    return { nombre, sueldo, obraSocial, jubilacion, sueldoNeto };
  });
};

console.log(obtenerInfoPagos(empleades));

// obtenerEstadisticasSeniority que devuelva un objeto donde cada propiedad es un seniority y el valor la cantidad de empleades con dicho seniority
const obtenerEstadisticasSeniority = (array) => {
  const estadisticas = {};

  array.forEach((empleado) => {
    const { seniority } = empleado;
    if (estadisticas[seniority]) {
      estadisticas[seniority]++;
    } else {
      estadisticas[seniority] = 1;
    }
  });

  return estadisticas;
};

console.log(obtenerEstadisticasSeniority(empleades));
// obtenerEstadisticasLenguajes que devuelva un objeto donde cada propiedad es un lenguaje y el valor la cantidad de empleades que saben dicho lenguaje
const obtenerEstadisticasLenguajes = (array) => {
  const estadisticas = {};

  array.forEach((empleado) => {
    empleado.lenguajes.forEach((lenguaje) => {
      if (estadisticas[lenguaje]) {
        estadisticas[lenguaje]++;
      } else {
        estadisticas[lenguaje] = 1;
      }
    });
  });

  return estadisticas;
};

console.log(obtenerEstadisticasLenguajes(empleades));
