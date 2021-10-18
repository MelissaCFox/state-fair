// Import and invoke the ticket booth component function
import { TicketBooth } from "./TicketBooth.js";
import { RideTicketHolders} from "./rides/RideTicketHolders.js"
import {FoodTicketHolders} from "./food/FoodHolders.js"
import { GameTicketHolders } from "./games/GameTicketHolders.js";
import { SideshowTicketHolders } from "./sideshow/SideshowTicketHolders.js";
import { FullPackageTicketHolders } from "./fullPackage/FullPackageTicketHolders.js";

TicketBooth()
RideTicketHolders()
FoodTicketHolders()
GameTicketHolders()
SideshowTicketHolders()
FullPackageTicketHolders()