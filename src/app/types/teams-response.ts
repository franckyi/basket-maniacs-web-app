import { Team } from "./team";
import { Meta } from "../types/meta";

export interface TeamsResponse {
    data: Team[]
    meta: Meta;
}