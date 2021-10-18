
const contentTarget = document.querySelector(".food")
const eventHub = document.querySelector("#state-fair")

export const FoodTicketHolders = () => {
    eventHub.addEventListener("click", foodEvent => {
        contentTarget.innerHTML += `<div class="eater person"></div>`
    })
}
