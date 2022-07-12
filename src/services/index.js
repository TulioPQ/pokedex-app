import axios from "axios";

const pokeImageUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/'
const pokeListUrl = 'https://pokeapi.co/api/v2/pokemon/'
const pokeListQuantity = 10

async function getPokes(pokeCards) {
    const offset = pokeCards.length
    let pokeList = []
    await axios.get(`${pokeListUrl}?limit=${pokeListQuantity}&offset=${offset}`).then((response) => {
        pokeList = response.data.results
    })
    
    return [...pokeCards, ...pokeList]
}

const getPokeImage = (pokeNumeber) => {
    return `${pokeImageUrl}${pokeNumeber}.png`
}

async function getPokeData(pokeName) {
    let pokeData = {}
    await axios.get(`${pokeListUrl}${pokeName}/`).then((response) => {
        pokeData = response.data
    })
    return pokeData
}

async function getAbilityDetails(detailsUrl) {
    let abilitiesDetails = []
    await axios.get(detailsUrl).then((response) => {
        abilitiesDetails = response.data.effect_entries
    })
    const details = await abilitiesDetails?.filter((value) => value.language.name === 'en')
    return details[0].effect
}

export { getPokes, getPokeData, getPokeImage, getAbilityDetails }