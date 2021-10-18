const contentTarget = document.querySelector(".entry")
const eventHub = document.querySelector("#state-fair")

let totalTickets = 0

eventHub.addEventListener(
    "click",
    (clickEvent) => {
        const buttonClicked = clickEvent.target
        const rideEvent = new CustomEvent ("rideTicketPurchased")
        const foodEvent = new CustomEvent ("foodTicketPurchased")
        const gameEvent = new CustomEvent ("gameTicketPurchased")
        const sideshowEvent = new CustomEvent ("sideshowTicketPurchased")
        const fullPackageEvent = new CustomEvent ("fullPackageTicketPurchased")
        if (buttonClicked.id.startsWith("ride")) {
            eventHub.dispatchEvent(rideEvent)
            totalTickets += 1
        } else if (buttonClicked.id.startsWith("food")) {
            eventHub.dispatchEvent(foodEvent)
            totalTickets += 1
        } else if (buttonClicked.id.startsWith("game")) {
            eventHub.dispatchEvent(gameEvent)
            totalTickets += 1
        } else if (buttonClicked.id.startsWith("sideshow")) {
            eventHub.dispatchEvent(sideshowEvent)
            totalTickets += 1
        } else if (buttonClicked.id.startsWith("full")) {
            eventHub.dispatchEvent(fullPackageEvent)
            totalTickets += 1
        }
        TicketBooth() //the state of the variable totalTickets changes with each clickEvent so we need to re-call the function TicketBooth in order to rewrite the HTML for that section
    }
)


export const TicketBooth = () => {
    contentTarget.innerHTML = `
        <div class="ticketBooth">
        <button id="rideTicket">Ride Ticket</button>
        <button id="foodTicket">Food Ticket</button>
        <button id="gameTicket">Game Ticket</butonn>
        <button id="sideshowTicket">Sideshow Ticket</button>
        <button id="fullPackageTicket">Full Package Ticket</button>
        <div>Total Tickets Purchased: ${totalTickets} </div>
        </div>
    `
}

