// ES 5
// es 1  -  crea un nuovo array contenente solo i nomi dei Pokémon.
// es 2 -   crea un nuovo array contenente solo i Pokémon con il tipo "Elettrico."
// es 3 -   Modifica l'abilità di "Pikachu" in "Fulmine."
// es 4 -   calcola il peso totale di tutti i Pokémon nell'array.
// es 5  -  trova il Pokémon con il tipo "Erba/Veleno."
// es 6 -   verifica se tutti i Pokémon nell'array hanno un livello inferiore a 30
// es 7 -    calcola la somma dei livelli di tutti i Pokémon
// es 8 -    crea un nuovo array contenente i nomi dei Pokémon che hanno un livello superiore a 20
// es 9 -    Modifica il livello di "Charmander" a 25.

const pokemons = [
  {
    nome: "Pikachu",
    tipo: "Elettrico",
    livello: 25,
    abilità: "Scarica",
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
    abilità: "Erbopolvere",
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
    abilità: "Braciere",
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
    abilità: "Assorbivolt",
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
