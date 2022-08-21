import { Game } from "./Game";
import { Meta } from "./meta";

export interface GamesResponse {
    data: Game[]
    meta: Meta;
}