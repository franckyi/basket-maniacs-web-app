import { Game } from "./Game";
import { Team } from "./Team";
import { Player } from "./Player";

export interface GameStats {
    "id": number;
    "ast": number;
    "blk": number;
    "dreb": number
    "fg3_pct": number
    "fg3a": number
    "fg3m": number
    "fg_pct": number
    "fga": number
    "fgm": number
    "ft_pct": number
    "fta": number
    "ftm": number
    "game": Game;
    "min": string;
    "oreb": number
    "pf": number
    "player": Player;
    "pts": number
    "reb": number
    "stl": number
    "team": Team;
    "turnover": number
}
