import { ICasinoItem } from "src/types/CasinoItem";

export default function CasinoItem({
  item,
  onClick
}: {
  item: ICasinoItem;
  onClick?: any;
}) {

  return (
    <div className="transition-transform duration-800 ease-in-out transform delay-[0.08s] animate-spring">
      <div className="group relative cursor-pointer" onClick={() => onClick && onClick(item)}>
        <div className="TileImage-wrapper relative group">
          <div className="TileImage-border-wrapper group-hover:opacity-100 rounded-3xl transition-all transform-gpu duration-200 ease-out delay-300 absolute w-[calc(100%+0.5rem)] h-[calc(100%+0.5rem)] left-[-0.25rem] top-[-0.25rem] overflow-hidden brightness-110 opacity-0 bg-white">
            <img src={item.logo} alt={item.name} className="h-full w-full shadow object-cover object-center blur-[16px] scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t "></div>
          </div>
          <div className="aspect-[30/23] w-full rounded-3xl-1 relative overflow-hidden backface-fix transition-all transform-gpu ease-out duration-500 delay-200 bg-surface-1 z-1">
            <img src={item.logo} alt={item.name} className="h-full w-full rounded-3xl-1 object-cover object-center backface-fix  transition-all transform-gpu ease-out duration-500 delay-200 group-hover:scale-[1.05] group-hover:delay-300 group-hover:opacity-100" />

            {item.logo2 &&
              <div className="top-0 left-0 absolute z-10 w-full h-full transition duration-500 delay-500 opacity-0 hover:opacity-100">
                <div className="w-full h-full absolute top-0 left-0 transition-opacity duration-1000 delay-1000 ease-in-out opacity-100">
                  <img loading="lazy" src={item.logo2} alt={item.name} className="h-full w-full rounded-3xl-1 object-cover object-center backface-fix  transition-all transform-gpu ease-out duration-500 delay-200 group-hover:scale-[1.05] group-hover:delay-300 group-hover:opacity-100" />
                </div>
                <div className="z-10 w-full h-full absolute top-0 left-0 transition-opacity duration-1000 delay-1000 ease-in-out opacity-0">
                  <img loading="lazy" src={item.logo2} alt={item.name} className="h-full w-full rounded-3xl-1 object-cover object-center backface-fix  transition-all transform-gpu ease-out duration-500 delay-200 group-hover:scale-[1.05] group-hover:delay-300 group-hover:opacity-100" />
                </div>
              </div>
            }
          </div>
          <div>
            <div className="absolute w-full left-0 bottom-0 rounded-b-3xl-1 overflow-hidden flex-col bg-surface-1/0 backface-fix flex transition-all transform-gpu duration-200 ease-out delay-200">
              <div className="w-8 h-full right-0 top-0 absolute bg-gradient-to-l from-surface-2"></div>
            </div>
          </div>
          {/* pins */}

        </div>
        <div className="TileContent-wrapper  whitespace-nowrap px-1.5 pt-2 flex flex-col">
          <span className="font-inter text-base leading-[140%] font-medium text-on-surface-1 text-ellipsis overflow-hidden ">
            {item.name}
          </span>
          <span className="font-inter text-sm leading-[140%] font-medium text-on-surface-3 ">
            {item.studio}
          </span>
        </div>
      </div>
    </div>
  );
}
