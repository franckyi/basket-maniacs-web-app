import { Game } from "./Game";
import { Meta } from "./meta";
import { GameStats } from "./stats";

export interface StatsResponse {
    data: GameStats[]
    meta: Meta;
}
