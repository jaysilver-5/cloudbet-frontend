export default function CheckableTabButton({
  text,
  icon,
  iconComponent,
  activeIcon,
  checked,
  onClick,
  ...props
}: Readonly<{
  text: any;
  icon?: any;
  iconComponent?: any;
  activeIcon?: any;
  checked?: boolean;
  onClick?: any;
  [key: string]: any
}>) {

  return (
    <div className="relative z-30 group cursor-pointer" onClick={() => onClick && onClick()}>
      <div
        className={`bg-surface-1 border-2 relative rounded-2xl overflow-hidden transition-all duration-200 ease-out group-active:scale-95
      ${checked ? 'border-secondary' : 'border-tertiary-2'}`}
      >
        <div className={`absolute inset-0 transition-all duration-300 ease-out bg-on-surface-1  opacity-0 ${checked ? '' : 'group-hover:opacity-[0.06] group-active:opacity-[0.12]'}`}></div>
        <div className={`absolute inset-0 transition-all duration-300 ease-out bg-secondary  ${checked ? 'opacity-30' : 'opacity-0'} `}></div>
        <div className="flex flex-col items-center px-4 py-3 gap-1.5 relative ">
          {icon &&
            <img src={(checked && activeIcon) ? activeIcon : icon} alt="icon" className="group-hover:scale-110 duration-200 ease-out icon-container size-icon-l muted-icon" />
          }
          {iconComponent && iconComponent}
          {text &&
            <span className={`font-Inter text-base leading-[140%] font-medium truncate max-w-full ${checked ? 'text-on-tertiary-1' : 'text-on-tertiary-3'}`}>{text}</span>
          }
        </div>
      </div>
    </div>
  );
}
