import CompetitionItem from "./CompetitionItem";
import { ICompetitionItem } from "src/types/CompetitionItem";

export default function CompetitionList({
  items,
  onItemClick,
  ...props
}: Readonly<{
  items: ICompetitionItem[];
  onItemClick?: any;
  [key: string]: any
}>) {

  return (
    <div className="flex flex-col">
      {items.map((item, index) => (
        <CompetitionItem
          key={index}
          item={item}
          isLast={index == items.length - 1}
          onClick={onItemClick}
        />)
      )}
    </div>
  );
}
