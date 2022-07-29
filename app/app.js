import { SaveActivity } from "./js/cardcreator.js";
import { CardLoader, LoadCards } from "./js/cardloader.js";
import { DarkMode, ScrollTop } from "./js/interface.js";
import { GameService } from "./js/gameservice.js";
import { ProfileService } from "./js/profileservice.js";

CardLoader(LoadCards);
ProfileService();
DarkMode();
GameService();
SaveActivity();
ScrollTop();
