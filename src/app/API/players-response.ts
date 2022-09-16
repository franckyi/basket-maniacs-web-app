import { Player } from "./Player";
import { Meta } from "./meta";

export interface PlayersResponse {
    data: Player[]
    meta: Meta;
}