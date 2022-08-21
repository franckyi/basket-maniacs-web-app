import { Players } from "./players";
import { Meta } from "./meta";

export interface PlayersResponse {
    data: Players[]
    meta: Meta;
}