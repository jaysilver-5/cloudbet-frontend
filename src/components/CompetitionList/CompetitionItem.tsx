import { ArrowForwardIos } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { ICompetitionItem } from "src/types/CompetitionItem";

export default function CompetitionItem({
  item,
  href,
  onClick,
  isLast,
  ...props
}: Readonly<{
  item: ICompetitionItem;
  href?: string;
  onClick?: any;
  isLast?: boolean;
  [key: string]: any
}>) {

  const navigate = useNavigate();

  const handleClick = () => {
    if (href) {
      navigate(href);
    }
    if (onClick) {
      onClick(item);
    }
  }

  return (
    <div className="flex flex-col">
      <a className="transition-colors ease-out duration-300 hover:bg-on-surface-1/[0.08] active:bg-on-surface-1/[0.16] focus:bg-on-surface-1/[0.16] flex items-center gap-x-1 py-2.5 px-5" onClick={handleClick}>
        <div className="flex gap-x-3">
          {item.logo &&
            <img src={item.logo} alt="logo" className="icon-container size-icon-m default-icon" />
          }
          <span className="font-inter">{item.name}</span>
        </div>
        <div className="flex-1">
          {item.count &&
            <div className="rounded-full px-1 h-5 font-medium flex items-center justify-center gap-x-1 bg-surface-3 text-on-surface-1 w-fit font-medium">
              <span className="font-inter text-xs leading-[140%] !leading-5">{item.count}</span>
            </div>
          }
        </div>
        <div className="group/icon-button cursor-pointer rounded-full relative outline outline-offset-1 outline-2 outline-transparent transition-all ease-out duration-300 focus:outline-on-surface-1 active:outline-none disabled:pointer-events-none w-8 h-8 after:w-[42px] after:h-[42px] after:absolute after:left-1/2 after:top-1/2 after:-translate-x-1/2 after:-translate-y-1/2">
          <div className="text-on-surface-1 w-full h-full rounded-full flex justify-center items-center transition-all ease-out duration-300 group-hover/icon-button:bg-on-tertiary-2/[0.08] group-active/icon-button:bg-on-tertiary-2/[0.16] group-focus/icon-button:bg-transparent py-1">
            <ArrowForwardIos className="text-on-surface-3 !w-5 !h-5 group-disabled/icon-button:text-surface-disabled" />
          </div>
        </div>
      </a>
      {!isLast &&
        <div className="px-5"><div className="w-full h-0.5 bg-outline-2" role="separator" data-test-id="divider"></div></div>
      }
    </div>
  );
}
