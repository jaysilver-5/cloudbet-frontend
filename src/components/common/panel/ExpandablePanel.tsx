import { useRef, useState } from "react";
import CheckableButton from "../button/CheckableButton";
import CircleIconButton from "../button/CircleIconButton";
import IconDot from "../../../assets/icons/horz_3dot.svg";
import { Popover, Tooltip } from "@mui/material";
import { InfoOutlined, KeyboardArrowDown, StarBorderRounded, StarRateRounded } from "@mui/icons-material";

export default function ExpandablePanel({
  icon,
  iconComponent,
  title,
  titleTip,
  badge,
  favoritable = false,
  isFavorite = false,
  stickable = true,
  stickyTop = '67px',
  expandable = true,
  headerGradient = true,
  noEdge = false,
  tabItems,
  selectedTab,
  noSubHeaderTitle = false,
  subHeaderTitle,
  subHeaderItems,
  subHeaderComponent,
  onSelectTab,
  onHeaderClick,
  onFavoriteClick,
  children,
  ...props
}: Readonly<{
  icon?: any;
  iconComponent?: any;
  title?: any;
  titleTip?: any;
  badge?: any;
  favoritable?: Boolean;
  isFavorite?: Boolean;
  stickable?: Boolean;
  stickyTop?: string;
  expandable?: Boolean;
  headerGradient?: Boolean;
  noEdge?: Boolean;
  tabItems?: any[];
  selectedTab?: any;
  onSelectTab?: any;
  noSubHeaderTitle?: Boolean;
  subHeaderTitle?: any;
  subHeaderItems?: string[];
  subHeaderComponent?: any;
  onHeaderClick?: any;
  onFavoriteClick?: any;
  children?: any;
  [key: string]: any
}>) {

  const [expanded, setExpanded] = useState(true);

  const buttonRef = useRef(null);
  const [anchorEl, setAnchorEl] = useState<any>(null);
  const handleShowMenu = () => {
    setAnchorEl(buttonRef.current);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);

  const getBarTabItems = () => {
    if (!tabItems) {
      return [];
    }
    const items = tabItems?.slice(0, 2);
    let selItem = tabItems?.slice(2).find(item => item.id == selectedTab);
    if (selItem) {
      items.push(selItem);
    } else if (tabItems.length > 2) {
      items.push(tabItems[2]);
    }
    return items;
  }
  const getMenuTabItems = () => {
    if (!tabItems) {
      return [];
    }
    let barItems = getBarTabItems();
    let menuItems = tabItems?.filter(item => !barItems.find(bitem => bitem.id == item.id));
    return menuItems;
  }

  return (
    <div>
      <div className={`bg-background z-10 ${stickable ? 'sticky' : ''}`} style={stickable ? { top: stickyTop } : {}}>
        <div className={`relative p-0.5 pb-0 rounded-4xl before:content-[''] before:absolute before:-z-[1] before:w-full before:h-full before:top-0 before:left-0 before:shadow before:rounded-t-4xl before:transition-opacity before:ease-in-out before:duration-300 before:opacity-0 bg-surface-2 rounded-bl-none rounded-br-none ${noEdge ? '!rounded-none !p-0' : ''}`}>
          <div className={`w-full h-full relative bg-background rounded-4xl-0.5 rounded-bl-none rounded-br-none ${noEdge ? '!rounded-none' : ''}`}>
            {headerGradient &&
              <div className={`w-full h-full top-0 left-0 absolute overflow-hidden rounded-4xl-0.5 rounded-bl-none rounded-br-none ${noEdge ? '!rounded-none' : ''}`}>
                <div className="w-full h-full transition-all ease-out duration-300 bg-gradient-to-b from-surface-1 to-background/0 max-h-[300px] !bg-background"></div>
              </div>
            }
            <div className="w-full h-full relative">
              <div className="py-2.5">
                <div className="flex items-center gap-x-3 pl-5 pr-5">
                  <div className="flex flex-grow text-left items-center gap-x-3 w-[80%] min-h-14 cursor-pointer" onClick={() => onHeaderClick && onHeaderClick()}>
                    {(icon || iconComponent) &&
                      <div className="relative flex justify-center aspect-1 overflow-hidden shrink-0 rounded-full !size-icon-xl">
                        {iconComponent ?
                          iconComponent
                          :
                          <img src={`/imgs/sports/${icon}.svg`} alt="icon" className="icon-container size-icon-xl default-icon" />
                        }
                      </div>
                    }
                    {title &&
                      <div className="flex items-center gap-x-2">
                        <span className="font-Inter text-2xl leading-[120%] text-on-surface font-bold mr-1">{title}</span>
                        {titleTip &&
                          <Tooltip title={titleTip} arrow>
                            <div className="group/icon-button cursor-pointer rounded-full relative outline outline-offset-1 outline-2 outline-transparent transition-all ease-out duration-300 focus:outline-on-surface-1 active:outline-none disabled:pointer-events-none w-8 h-8 focus:!outline-none after:w-[42px] after:h-[42px] after:absolute after:left-1/2 after:top-1/2 after:-translate-x-1/2 after:-translate-y-1/2">
                              <div className="text-on-surface-1 w-full h-full rounded-full flex justify-center items-center transition-all ease-out duration-300 group-hover/icon-button:bg-on-tertiary-2/[0.08] group-focus/icon-button:bg-transparent group-active/icon-button:!bg-on-tertiary-2/[0.08]">
                                <InfoOutlined className="text-on-surface-1 !w-5 !h-5 group-disabled/icon-button:text-surface-disabled" />
                              </div>
                            </div>
                          </Tooltip>
                        }
                        {badge &&
                          <div className="rounded-full px-1 h-5 font-medium flex items-center justify-center gap-x-1 bg-surface-3 text-on-surface-1">
                            <span className="font-inter text-xs !leading-5">{badge}</span>
                          </div>
                        }
                      </div>
                    }
                  </div>
                  {(favoritable || expandable) &&
                    <div className="flex min-h-14">
                      {favoritable &&
                        <div className="w-14 h-14 flex justify-center items-center">
                          <button className="group" type="button" onClick={() => onFavoriteClick && onFavoriteClick()}>
                            <div className="relative h-8 w-8 rounded-xl after:w-[42px] after:h-[42px] after:absolute after:left-1/2 after:top-1/2 after:-translate-x-1/2 after:-translate-y-1/2">
                              <div className="text-on-tertiary-3 !w-full !h-full rounded-xl flex justify-center items-center transition-color ease-out duration-300 group-hover:bg-on-tertiary-3/[0.08] group-active:bg-on-tertiary-3/[0.16]">
                                {isFavorite ?
                                  <StarRateRounded className="size-icon-s" />
                                  :
                                  <StarBorderRounded className="size-icon-s" />
                                }
                              </div>
                            </div>
                          </button>
                        </div>
                      }

                      {expandable &&
                        <div className="w-14 h-14 flex justify-center items-center">
                          <button className="group" type="button" onClick={() => setExpanded(!expanded)}>
                            <div className="relative h-8 w-8 rounded-xl after:w-[42px] after:h-[42px] after:absolute after:left-1/2 after:top-1/2 after:-translate-x-1/2 after:-translate-y-1/2 bg-surface-5">
                              <div className="text-on-tertiary-3 !w-full !h-full rounded-xl flex justify-center items-center transition-color ease-out duration-300 group-hover:bg-on-tertiary-3/[0.08] group-active:bg-on-tertiary-3/[0.16]">
                                <KeyboardArrowDown className={`w-5 h-5 transition-transform duration-150 ${expanded ? '-rotate-180' : ''}`} />
                              </div>
                            </div>
                          </button>
                        </div>
                      }
                    </div>
                  }
                </div>

                {/* tabbar */}
                {tabItems && tabItems?.length > 0 &&
                  <>
                    <div className="xl:hidden">
                      <div className="flex gap-x-2 overflow-x-scroll px-5 scrollbar-hide">
                        {tabItems.map((item, index) => (
                          <div key={index} className="flex flex-shrink-0">
                            <CheckableButton
                              icon={item.icon}
                              text={item.text}
                              checked={selectedTab == item.id}
                              onClick={() => onSelectTab(item.id)}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="hidden xl:block">
                      <div className="relative pt-1 pr-5 pb-3 pl-3 flex overflow-hidden">
                        <div className="flex flex-1 overflow-x-scroll no-scrollbar">
                          {getBarTabItems().map((item, index) => (
                            <div key={index} className="flex flex-shrink-0 px-2">
                              <CheckableButton
                                icon={item.icon}
                                text={item.text}
                                checked={selectedTab == item.id}
                                onClick={() => onSelectTab(item.id)}
                              />
                            </div>
                          ))}
                        </div>
                        <div className="relative" ref={buttonRef}>
                          <CircleIconButton icon={IconDot} onClick={handleShowMenu} />
                        </div>
                        <Popover
                          open={open}
                          anchorEl={anchorEl}
                          onClose={handleCloseMenu}
                          sx={{ background: "transparent", borderRadius: '15px' }}
                          anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                          }}
                          transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                          }}
                        >
                          <div className="flex flex-col rounded-2xl overflow-hidden focus:outline-none">
                            {getMenuTabItems().map((item, index) => (
                              <button
                                key={index}
                                onClick={() => { onSelectTab(item.id); handleCloseMenu(); }}
                                className="bg-surface-5 h-14 group/menu-item text-on-surface-1 ui-selected:text-on-tertiary-1"
                              >
                                <div className="w-full h-full whitespace-nowrap p-3 group-hover/menu-item:bg-on-surface-1/[0.08] group-active/menu-item:bg-on-surface-1/[0.16]">
                                  <div className="flex flex-row gap-x-3 items-center w-full h-full justify-end">
                                    <div className="flex-shrink-0">
                                      <img src={item.icon} alt="icon" className="size-icon-s icon-container size-icon-l default-icon" />
                                    </div>
                                    <span className="font-inter text-xl leading-[120%] font-medium truncate transition-colors duration-300 ease-out">{item.text}</span>
                                  </div>
                                </div>
                              </button>
                            ))}
                          </div>
                        </Popover>
                      </div>
                    </div>
                  </>
                }

                {/* subheader */}
                {(subHeaderComponent || subHeaderTitle || subHeaderItems) &&
                  <div>
                    <div className="px-5 mt-2.5">
                      {subHeaderComponent ? subHeaderComponent : <></>}
                      <div className={`w-full text-on-tertiary-3 gap-x-3 items-center ${noSubHeaderTitle ? 'px-5' : 'grid grid-cols-2'}`}>
                        {!noSubHeaderTitle &&
                          <div className="col-span-1">
                            {subHeaderTitle ? subHeaderTitle : <></>}
                          </div>
                        }

                        <div className="flex gap-x-3 text-center items-center h-7 col-span-1">
                          {subHeaderItems?.map((item, index) => (
                            <div key={index} className="flex-1 flex w-full items-center justify-center truncate">
                              <span className="font-inter text-sm leading-[140%] whitespace-nowrap text-ellipsis truncate font-medium">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                }
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`relative p-0.5 before:content-[''] before:absolute before:-z-[1] before:w-full before:h-full before:top-0 before:left-0 before:shadow before:rounded-t-4xl before:transition-opacity before:ease-in-out before:duration-300 before:opacity-0 bg-gradient-to-b from-surface-2 to-background/0 to-80% !py-0 rounded-none  ${noEdge ? '!p-0' : ''}`}>
        <div className="w-full h-full relative bg-background rounded-4xl-0.5">
          <div className="w-full h-full top-0 left-0 absolute overflow-hidden">
            <div className="w-full h-full transition-all ease-out duration-300 !bg-background"></div>
          </div>
          <div className="w-full h-full relative">
            {expanded &&
              <div className="transition duration-300 ease-out transform scale-100 opacity-100">
                <div className="text-on-surface">
                  <div className="w-full h-0.5 bg-outline-2" role="separator"></div>
                  {children}
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  );
}
