import { Team } from "./Team";
import { Meta } from "./meta";

export interface TeamsResponse {
    data: Team[]
    meta: Meta;
}