const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`
const main = document.querySelector('main')

document.addEventListener('DOMContentLoaded', function() {
    fetchTrainers()
})

function fetchTrainers(){
    fetch(TRAINERS_URL)
        .then(function(resp){
            return resp.json()
        })
        .then(function(trainers){
            for (const trainer of trainers){
                makeTrainerCard(trainer)
        }
})
}

function makeTrainerCard(trainer){
   const card = document.createElement('div')
    card.classList += "card"
    card.dataset["id"] = trainer.id

    const trainerName = document.createElement('p')
    trainerName.innerText = trainer.name
    card.appendChild(trainerName)

    const pokeButton = document.createElement('button')
    pokeButton.setAttribute("data-trainer-id", trainer.id)
    pokeButton.innerText = "Add Pokemon"
    card.appendChild(pokeButton)

    const pokeList = document.createElement('ul')
    for (const pokemon of trainer.pokemons){
    console.log(pokemon)
    }

    main.appendChild(card)
    }
