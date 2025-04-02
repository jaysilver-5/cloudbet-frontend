import { IBetItem } from "./BetItem";

interface ITeam {
  name: string;
  logo?: any;
  win?: number;             // win round count (or goal)
}

export interface IMatchItem {
  id: any;                  // match id
  competition?: any;        // competition id
  date: Date;               // start date/time
  isLive?: Boolean;         // is ongoing match
  round?: string;           // current round (when isLive = true)
  currentTime?: string;     // current ongoing time (when isLive = true)
  currentStatus?: string;   // current match status (when isLive = true)
  home_team: ITeam;
  away_team: ITeam;
  bets: (number | IBetItem)[];
  betslip?: number;
  betDisabled?: Boolean;
  betLocked?: Boolean;
};
