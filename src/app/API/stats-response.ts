import { Game } from "./Game";
import { Meta } from "./meta";

export interface StatsResponse {
    data: Game[]
    meta: Meta;
}
