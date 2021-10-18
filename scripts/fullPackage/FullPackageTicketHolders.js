
const eventHub = document.querySelector("#state-fair")

const ridesTarget = document.querySelector(".rides")
const foodTarget = document.querySelector(".food")
const gamesTarget = document.querySelector(".games")
const sideshowTarget = document.querySelector(".sideshow")

export const FullPackageTicketHolders = () => {
    eventHub.addEventListener("fullPackageTicketPurchased", () => {
        ridesTarget.innerHTML += `<div class="bigSpender person"></div>`
        foodTarget.innerHTML += `<div class="bigSpender person"></div>`
        gamesTarget.innerHTML += `<div class="bigSpender person"></div>`
        sideshowTarget.innerHTML += `<div class="bigSpender person"></div>`

    })
}