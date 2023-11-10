const pokemon = [
  {
    nome: "Pikachu",
    tipo: "Elettrico",
    livello: 25,
    mossa: "Scarica",
    simili: [
      { nome: "Raichu", tipo: "Elettrico", livello: 45 },
      { nome: "Pichu", tipo: "Elettrico", livello: 5 },
    ],
    dettagli: { altezza: "0.4m", peso: "6kg" },
  },
  {
    nome: "Bulbasaur",
    tipo: "Erba/Veleno",
    livello: 20,
    mossa: "Erbopolvere",
    simili: [
      { nome: "Ivysaur", tipo: "Erba/Veleno", livello: 40 },
      { nome: "Venusaur", tipo: "Erba/Veleno", livello: 60 },
    ],
    dettagli: { altezza: "0.7m", peso: "6.9kg" },
  },
  {
    nome: "Charmander",
    tipo: "Fuoco",
    livello: 18,
    mossa: "Braciere",
    simili: [
      { nome: "Charmeleon", tipo: "Fuoco", livello: 36 },
      { nome: "Charizard", tipo: "Fuoco/Volo", livello: 56 },
    ],
    dettagli: { altezza: "0.6m", peso: "8.5kg" },
  },
  {
    nome: "Raikou",
    tipo: "Elettrico",
    livello: 40,
    mossa: "Assorbivolt",
    simili: [
      { nome: "Zapdos", tipo: "Elettrico/Volante", livello: 50 },
      { nome: "Jolteon", tipo: "Elettrico", livello: 35 },
    ],
    dettagli: {
      altezza: "1.9m",
      peso: "178kg",
      descrizione:
        "Raikou è uno dei leggendari cani elettrici. Si dice che porti con sé tempeste e fulmini.",
    },
  },
];

// Exercise 1 - Create a new array containing only the names of the Pokémon.
const nomiPokemon = pokemon.map(function (pokemon) {
  return pokemon.nome;
});
console.log("Exercise 1 - Pokémon Names:");
console.log(nomiPokemon);

// Exercise 2 - Create a new array containing only the Electric-type Pokémon.
const pokemonElettrici = pokemon.filter((pok) => pok.tipo === "Elettrico");
console.log("\nExercise 2 - Electric-type Pokémon:");
console.log(pokemonElettrici);

// Exercise 3 - Modify Pikachu's ability to "Fulmine."
pokemon.forEach(function (pokemon) {
  if (pokemon.nome === "Pikachu") {
    pokemon.mossa = "Fulmine";
  }
});
console.log("\nExercise 3 - Modified Pikachu's Ability:");
console.log(pokemon.find((pokemon) => pokemon.nome === "Pikachu").mossa);

// Exercise 4 - Calculate the total weight of all Pokémon in the array.
const pesoTotale = pokemon.reduce(function (acc, pokemon) {
  return acc + parseFloat(pokemon.dettagli.peso);
}, 0);
console.log("\nExercise 4 - Total Weight of All Pokémon:");
console.log(pesoTotale + "kg");

// Exercise 5 - Find the Pokémon with the "Erba/Veleno" type.
const pokemonErbaVeleno = pokemon.find(function (pokemon) {
  return pokemon.tipo === "Erba/Veleno";
});
console.log("\nExercise 5 - Pokémon with 'Erba/Veleno' Type:");
console.log(pokemonErbaVeleno);

// Exercise 6 - Check if all Pokémon in the array have a level below 30.
const livelloInferioreA30 = pokemon.every(function (pokemon) {
  return pokemon.livello < 30;
});
console.log("\nExercise 6 - All Pokémon Have Level Below 30:");
console.log(livelloInferioreA30);

// Exercise 7 - Calculate the sum of levels of all Pokémon.
const sommaLivelli = pokemon.reduce(function (acc, pokemon) {
  return acc + pokemon.livello;
}, 0);
console.log("\nExercise 7 - Sum of All Pokémon Levels:");
console.log(sommaLivelli);

// Exercise 8 - Create a new array containing the names of Pokémon with a level above 20.
const nomiLivelloAlto = pokemon
  .filter(function (pokemon) {
    return pokemon.livello > 20;
  })
  .map(function (pokemon) {
    return pokemon.nome;
  });
console.log("\nExercise 8 - Pokémon with Level Above 20:");
console.log(nomiLivelloAlto);

// Exercise 9 - Modify Charmander's level to 25.
pokemon.forEach(function (pokemon) {
  if (pokemon.nome === "Charmander") {
    pokemon.livello = 25;
  }
});
console.log("\nExercise 9 - Modified Charmander's Level:");
console.log(pokemon.find((pokemon) => pokemon.nome === "Charmander").livello);
