import { SubjectListStart } from "./js/subjectcreator.js";
import { SaveActivity } from "./js/cardcreator.js";
import { CardLoader, LoadCards } from "./js/cardloader.js";
import { darkmode } from "./js/darkmode.js";
import { GameService } from "./js/gameservice.js";
import { ProfileService } from "./js/profileservice.js";

CardLoader(LoadCards);
ProfileService();
darkmode();
GameService();
SubjectListStart();
SaveActivity();
