import { Meta } from "../types/meta";
import { Player } from "./player";

export interface PlayersResponse {
    data: Player[]
    meta: Meta;
}