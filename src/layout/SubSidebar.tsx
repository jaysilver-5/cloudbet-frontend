import { useLocation, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";
import SubNavItem from "src/components/nav/SubNavItem";
import { useDispatch } from "react-redux";
import { showRightDrawer } from "src/redux/actions/uiAction";
import { RDRAWER_MYBETS } from "src/redux/types";

export default function SubSidebar({
  isShow,
  parent
}: {
  isShow: boolean;
  parent: any;
}) {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [activeItem, setActiveItem] = useState<any>(null);

  useEffect(() => {
    if (parent?.children) {
      for (const item of parent?.children) {
        if (item.path && pathname.startsWith(parent.path + item.path)) {
          setActiveItem(item);
          // break;
        }
      }
    }

    if (!parent || !pathname.startsWith(parent?.path)) {
      setActiveItem(null);
    }
  }, [parent, pathname]);


  const handleItemClick = (item: any) => {
    if (item.path) {
      navigate(parent.path + item.path);
    }
    if (item.action == "mybets") {
      dispatch(showRightDrawer(RDRAWER_MYBETS));
    }
  }

  const handleToggleFavorite = (item: any) => {

  }

  return (
    <div className={`left-full flex-1 top-0 h-full z-[10] bg-surface-1 overflow-hidden transition-all duration-250 ease-out md:absolute md:w-96 md:block ${isShow ? 'translate-x-0' : '-translate-x-full'}`}>
      <div className={`flex flex-grow flex-col overflow-hidden min-h-screen h-screen transition-all duration-200 delay-50 ${isShow ? 'translate-x-0' : '-translate-x-1/3'}`}>
        <div className="h-full overflow-y-auto scrollbar-custom px-2 py-4 transition ease-out duration-300">
          {parent?.children.map((item: any) => (
            <SubNavItem
              {...item}
              parent={parent}
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
  );
}
