import { IMatchItem } from "src/types/MatchItem";
import MatchItem from "./MatchItem";

export default function MatchList({
  items,
  onItemClick,
  onItemBet,
  separator,
  ...props
}: Readonly<{
  items: IMatchItem[];
  onItemClick?: any;
  onItemBet?: any;
  separator?: boolean;
  [key: string]: any
}>) {

  return (
    <div className="grid grid-cols-1 divide-y-2 divide-outline">
      {items?.map((item, index) => (
        <MatchItem
          key={index}
          item={item}
          onClick={onItemClick}
          onBet={onItemBet}
          separator={separator}
          logo={props.logo}
          type={props.type}
          title={props.title}
          description={props.description}
        />)
      )}
    </div>
  );
}
