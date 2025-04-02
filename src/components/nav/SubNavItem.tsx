import { useNavigate } from "react-router-dom";

export default function SubNavItem({
  text,
  icon,
  activeIcon,
  header = false,
  favoritable = false,
  isFavorite = false,
  badge,
  isActive,
  onClick,
  onToggleFavorite,
}: Readonly<{
  text: string;
  path?: string;
  isActive: boolean;
  icon?: any;
  activeIcon?: any;
  header?: boolean;
  favoritable?: boolean;
  badge?: any;
  isFavorite?: boolean;
  onClick?: any;
  onToggleFavorite?: any;
}>) {


  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  }

  const handleFavorite = (e: any) => {
    e.stopPropagation();
    if (onToggleFavorite) {
      onToggleFavorite();
    }
  }

  return (
    <div className="relative cursor-pointer" onClick={handleClick}>
      {header ?
        <>
          <div className="w-full h-0.5 bg-outline-2 my-2" role="separator"></div>
          <div className="flex items-center py-2 px-1.5">
            <div className="flex flex-1 flex-col pr-3 pl-1.5 items-start gap-1">
              <span className="font-inter text-lg font-bold leading-[120%] text-on-tertiary-2">{text}</span>
            </div>
            <div className="flex items-center justify-center">
            </div>
          </div>
        </>
        :
        <div className="group/sub-nav-element w-full flex items-center justify-between px-3 py-3.5 rounded-full relative transition-all duration-150 ease-out text-on-tertiary-3">
          <div className="w-full">
            <div className="flex items-center gap-x-3">
              <span className={`absolute inset-0 w-full h-full bg-on-surface-1 transition-all duration-300 rounded-full opacity-0 group-hover/sub-nav-element:opacity-[0.08] group-active/sub-nav-element:opacity-[0.16] ${isActive && 'opacity-[0.16]'}`}></span>
              {icon &&
                <img src={isActive ? activeIcon : icon} alt="navitem" className="w-[21px] h-[21px] icon-container size-icon-m muted-icon" />
              }
              <div className="grow text-left truncate overflow-ellipsis flex items-center gap-x-2">
                <span className={`font-Inter text-lg leading-[120%] font-medium truncate overflow-ellipsis ${isActive ? 'text-on-tertiary-1' : 'text-on-tertiary-3'}`}>{text}</span>
                {badge &&
                  <div className="rounded-full px-1 h-5 font-medium items-center justify-center gap-x-1 bg-surface-3 text-on-surface-1 inline-flex min-w-5"><span className="font-inter text-xs !leading-5">{badge}</span></div>
                }
              </div>

              {favoritable &&
                <div className="mr-1">
                  <div className="h-6 w-6 flex items-center justify-center transition-opacity ease-out duration-300">
                    <button className="group cursor-pointer" onClick={handleFavorite}>
                      <div className="relative h-8 w-8 rounded-xl after:w-[42px] after:h-[42px] after:absolute after:left-1/2 after:top-1/2 after:-translate-x-1/2 after:-translate-y-1/2">
                        <div className="text-on-tertiary-3 !w-full !h-full rounded-xl flex justify-center items-center transition-color ease-out duration-300 group-hover:bg-on-tertiary-3/[0.08] group-active:bg-on-tertiary-3/[0.16]">
                          {isFavorite ?
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-icon-s fill-on-tertiary-1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                            :
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-icon-s"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                          }
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              }
            </div>
          </div>
        </div>
      }
    </div>
  );
}
