
const contentTarget = document.querySelector(".rides")
const eventHub = document.querySelector("#state-fair")

export const RideTicketHolders = () => {
    eventHub.addEventListener(" ", rideEvent => {

        contentTarget.innerHTML += `<div class="rider person"></div>`
        
    })
}
