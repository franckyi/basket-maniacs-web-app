import { Game } from "./game";
import { Meta } from "../types/meta";

export interface GamesResponse {
    data: Game[]
    meta: Meta;
}