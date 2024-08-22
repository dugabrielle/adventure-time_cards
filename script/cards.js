let allCharacters = [];
let initialCount = 0;
const InitialCards = 4;
const totalCards = 4;

function createCard(character) {
    const card = document.createElement("div");
    card.classList.add("card");

    const img = document.createElement("img");
    img.src = character.img;
    img.alt = character.name;

    const title = document.createElement("h3");
    title.textContent = character.name;

    const specie = document.createElement("h3");
    specie.textContent = character.species;

    const gender = document.createElement("h3");
    gender.textContent = character.sex;

    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(specie);
    card.appendChild(gender);

    return card;
}
function fetchCharacters() {
    fetch("https://dugabrielle.github.io/characters-json-repo/characters.json")
        .then(response => response.json())
        .then(characters => {
            allCharacters = characters;
            displayCards(); // Exibe os primeiros cards
        })
        .catch(error => console.error('Erro ao buscar personagens:', error));
}

function displayCards() {
    const container = document.querySelector("#characters-div");
    container.innerHTML = ""; // Limpa o container antes de adicionar novos cards

    const end = Math.min(initialCount + InitialCards, allCharacters.length);
    for (let i = initialCount; i < end; i++) {
        const character = allCharacters[i];
        container.appendChild(createCard(character));
    }

    initialCount = end;
    document.querySelector("#moreCards").style.display = (initialCount < allCharacters.length) ? "block" : "none";
}

function moreCards() {
    const end = Math.min(initialCount + totalCards, allCharacters.length);
    for (let i = initialCount; i < end; i++) {
        const character = allCharacters[i];
        document.querySelector("#characters-div").appendChild(createCard(character));
    }

    initialCount += totalCards;
    document.querySelector("#moreCards").style.display = (initialCount < allCharacters.length) ? "block" : "none";
}

fetchCharacters();

