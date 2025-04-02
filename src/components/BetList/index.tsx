import { IMatchItem } from "src/types/MatchItem";
import BetItem from "./BetPair";
import BetPair from "./BetPair";

export default function BetList({
  items,
  onItemBet,
  separator,
  ...props
}: Readonly<{
  items: any[];
  onItemBet?: any;
  separator?: boolean;
  [key: string]: any
}>) {

  return (
    <div className="grid grid-cols-1">
      {items?.map((item, index) => (
        <BetPair
          bets={item}
          onBet={onItemBet}
          separator={separator}
        />)
      )}
    </div>
  );
}
