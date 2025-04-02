import { Link, useLocation, useNavigate } from "react-router-dom"
import { navitemList } from "src/utils/constants";
import { useEffect, useRef, useState } from "react";
import NavItem from "src/components/nav/NavItem";
import ImgLogo from "../assets/logo4.svg";
import ImgSupport from "../assets/icons/nav/support.svg";
import SubSidebar from "./SubSidebar";
import { useHover } from "usehooks-ts";

export default function Sidebar() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const [activeItem, setActiveItem] = useState<any>(null);

  const [showSubSidebar, setShowSubSidebar] = useState(false);
  const [subSidebarParent, setSubSidebarParent] = useState<any>(null);

  useEffect(() => {
    navitemList.forEach((item) => {
      if (item.path && pathname.startsWith(item.path)) {
        setActiveItem(item);
      }
    });
    setShowSubSidebar(false);
  }, [pathname]);

  const handleHoverNavItem = (item: any) => {
    if (item.children?.length > 0) {
      setShowSubSidebar(true);
      setSubSidebarParent(item);
    }
  }

  const handleItemClick = (item: any) => {
    if (item.path) {
      navigate(item.path);
    }
  }

  const handleSupport = () => {

  }

  const hoverRef = useRef(null)
  const isHover = useHover(hoverRef);
  useEffect(() => {
    if (!isHover) {
      setShowSubSidebar(false);
    }
  }, [isHover]);

  return (
    <div ref={hoverRef} className="w-full h-[100vh] fixed z-navbar md:z-[60] left-0 top-0 hidden bg-background md:sticky md:flex  md:flex-col md:w-auto transition-top duration-200">
      <div className="w-28 z-[11] h-full flex flex-col relative h-100 border-r-2 bg-background border-surface-1  pb-4">
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
                onHover={() => handleHoverNavItem(item)}
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
      />
    </div>
  );
}
