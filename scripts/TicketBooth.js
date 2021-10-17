const contentTarget = document.querySelector(".entry")
const eventHub = document.querySelector("#state-fair")

eventHub.addEventListener()
//add event listner where it: checks if the ride ticket button was pressed, if so: create custom event that describes what happened :
// const rideEvent = new CustomEvent("rideTicketPurchased")
// dispatch the rideEvent to the "event hub"


// Altered example taken from W3 schools for event listener on a button
// document.getElementById("rideTicket").addEventListener("click", function() {
//     const rideEvent = new CustomEvent("rideTicketPurchased");
//   });


export const TicketBooth = () => {
    contentTarget.innerHTML = `
        <div class="ticketBooth">
        <button id="rideTicket">Ride Ticket</button>
        </div>
    `
}

