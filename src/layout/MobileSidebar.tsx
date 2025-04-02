import { Link, useLocation, useNavigate } from "react-router-dom"
import { navitemList } from "src/utils/constants";
import { useEffect, useRef, useState } from "react";
import NavItem from "src/components/nav/NavItem";
import ImgLogo from "../assets/logo4.svg";
import ImgSupport from "../assets/icons/nav/support.svg";
import SubSidebar from "./SubSidebar";
import { useHover } from "usehooks-ts";
import RoundedInput from "src/components/common/input/RoundedInput";
import { Close, Search } from "@mui/icons-material";
import CircleIconButton from "src/components/common/button/CircleIconButton";
import SubNavItem from "src/components/nav/SubNavItem";

export default function MobileSidebar({
  open,
  onClose,
}: {
  open: boolean;
  onClose: any;
}) {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const [selectedTabItem, setSelectedTabItem] = useState<any>(null);
  const [activeItem, setActiveItem] = useState<any>(null);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    for (const item of navitemList) {
      if (item.children.length > 0 && item.path && pathname.startsWith(item.path)) {
        setSelectedTabItem(item);

        for (const child of item.children) {
          if (child.path && pathname.startsWith(item.path + child.path)) {
            setActiveItem(child);
            // break;
          }
        }
        return;
      }
    }
    setSelectedTabItem(navitemList[0]);
  }, [pathname]);

  const handleSelectTabItem = (item: any) => {
    setSelectedTabItem(item);
  }

  const handleItemClick = (item: any) => {
    if (item.path) {
      navigate(selectedTabItem.path + item.path);
      onClose();
    }
  }

  const handleToggleFavorite = (item: any) => {

  }

  const handleSupport = () => {

  }

  return (
    <div className="transition-all ease-out">
      <nav className={`fixed flex flex-col z-navbarMobile left-0 right-0 transition-all duration-300 ease-in-out transform w-full bg-background top-0 h-full ${!open && '-translate-x-full opacity-0 scale-x-0'}`}>
        <div className="flex flex-col flex-1 overflow-hidden">
          <div className="flex flex-col overflow-hidden flex-1">
            <div className="flex items-center justify-between px-5 py-2.5 gap-x-3">
              <RoundedInput
                iconComponent={<Search className="!text-3xl" />}
                placeholder={"Search"}
                value={searchText}
                onChange={(value: any) => setSearchText(value)}
                className={"!w-full"}
                wrapperClassName={"bg-background"}
              />
              <CircleIconButton iconComponent={<Close />} className="!w-14 !h-14 bg-tertiary-2" onClick={onClose} />
            </div>
            <div className="flex-1 overflow-y-auto overflow-x-hidden rounded-4xl">
              <div className="flex items-center px-8 relative z-[1]">
                {navitemList.filter(item => item.children.length > 0).map(item => (
                  <button
                    type="button"
                    className="flex-1 text-center py-4 relative"
                    onClick={() => handleSelectTabItem(item)}
                  >
                    <span className={`font-inter text-xl leading-[120%] font-bold transition-colors ${item.key == selectedTabItem?.key ? 'text-on-tertiary-1' : 'text-on-surface-3'} `}>{item.text}</span>
                    {item.key == selectedTabItem?.key &&
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-on-tertiary-1/0 via-on-tertiary-1 to-on-tertiary-1/0"></div>
                    }
                  </button>
                ))}
              </div>

              <div className="p-0.5 rounded-4xl before:content-[''] before:absolute before:-z-[1] before:w-full before:h-full before:top-0 before:left-0 before:shadow before:rounded-t-4xl before:transition-opacity before:ease-in-out before:duration-300 before:opacity-0 bg-gradient-to-b from-surface-2 to-background/0 to-80% !sticky top-0 -mt-0.5">
                <div className="w-full h-full relative bg-background rounded-4xl-0.5">
                  <div className="w-full h-full top-0 left-0 absolute overflow-hidden rounded-4xl-0.5">
                    <div className="w-full h-full transition-all ease-out duration-300 bg-gradient-to-b from-surface-1 to-background/0 max-h-[300px]" data-test-id="card-inner-content-container-background"></div>
                  </div>
                  <div className="w-full h-full relative">
                    <div className="w-dvw h-[30dvh]"></div></div>
                </div>
              </div>

              <div className="static -mt-[30dvh]">
                <div className="opacity: 1; transform: none;">
                  <div className="flex flex-col gap-y-0.5 md:block flex-1 md:whitespace-nowrap p-1.5 sm:p-0">
                    {selectedTabItem?.children.map((item: any) => (
                      <SubNavItem
                        {...item}
                        parent={selectedTabItem}
                        isActive={item.key == activeItem?.key}
                        key={item.key}
                        onClick={() => handleItemClick(item)}
                        onToggleFavorite={() => handleToggleFavorite(item)}
                        isFavorite={false}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>











      {/* <div className="w-28 z-[11] h-full flex flex-col relative h-100 border-r-2 bg-background border-surface-1  pb-4">
        <Link className="mx-auto h-20 w-full flex items-center justify-center" to="/sports">
          <div className="relative !w-16">
            <img src={ImgLogo} alt="logo" className="relative w-full" />
          </div>
        </Link>

        <div className="flex h-full flex-col justify-between">
          <div className="py-3 flex flex-col gap-1.5 text-center">
            {navitemList.map(item => (
              <NavItem
                {...item}
                isActive={item.key == activeItem?.key}
                key={item.key}
                onClick={() => handleItemClick(item)}
              />
            ))}
          </div>
        </div>

        <NavItem
          key="support"
          isActive={false}
          text="Support"
          icon={ImgSupport}
          onClick={handleSupport}
        />
      </div>

      <SubSidebar
        isShow={showSubSidebar}
        parent={subSidebarParent}
      /> */}
    </div>
  );
}
