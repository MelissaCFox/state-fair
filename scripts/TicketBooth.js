const contentTarget = document.querySelector(".entry")
const eventHub = document.querySelector("#state-fair")


eventHub.addEventListener(
    "click",
    (clickEvent) => {
        const buttonClicked = clickEvent.target
        if (buttonClicked.id.startsWith("ride")) {
//what is done if they click on the right thing
            const rideEvent = new CustomEvent ("rideTicketPurchased", {
                detail: {
                    ticketPurchased: "Ride"
                }
            })
            eventHub.dispatchEvent(rideEvent)
            console.log("Made it this far")
        }
    }
)



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

