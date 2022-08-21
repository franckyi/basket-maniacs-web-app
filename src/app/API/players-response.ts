import { Player } from "./players";
import { Meta } from "./meta";

export interface PlayersResponse {
    data: Player[]
    meta: Meta;
}