import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useHover } from "usehooks-ts";

export default function NavItem({
  text,
  icon,
  activeIcon,
  isActive,
  onClick,
  onHover,
}: Readonly<{
  text: string;
  path?: string;
  icon?: any;
  activeIcon?: any;
  isActive: boolean;
  onClick?: any;
  onHover?: any;
}>) {

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  }

  const hoverRef = useRef(null)
  const isHover = useHover(hoverRef);
  useEffect(() => {
    if (isHover && onHover) {
      onHover();
    }
  }, [isHover]);

  return (
    <div className="relative z-30 group w-full block px-1.5 cursor-pointer" ref={hoverRef} onClick={handleClick}>
      <div className="relative py-3 flex flex-col items-center gap-2  duration-200 ease-out group-active:scale-95 ">
        <div className="rounded-2xl absolute inset-0 w-full h-full bg-on-surface-1 transition-all duration-300  opacity-0 group-hover:opacity-5"></div>
        <div className="relative">
          <img src={isActive ? activeIcon : icon} alt="navitem" className="w-[28px] h-[28px] group-hover:scale-110 duration-200 ease-out icon-container size-icon-xl muted-icon" />
        </div>
        <span className={`font-Inter text-sm leading-[140%] font-medium relative ${isActive ? 'text-on-tertiary-1' : 'text-on-tertiary-3'}`}>{text}</span>
      </div>
      <div className={`absolute h-full w-[2px] top-0 left-full bg-gradient-to-b from-on-tertiary-1/0 via-on-tertiary-1 to-on-tertiary-1/0 transition-opacity duration-200 ease-out ${isActive ? 'opacity-100' : 'opacity-0'} `}></div>
    </div>
  );
}
