export default function CheckableButton({
  text,
  icon,
  activeIcon,
  checked,
  onClick,
  disabled,
  className,
  textClassName,
  ...props
}: Readonly<{
  text?: any;
  icon?: any;
  activeIcon?: any;
  checked?: boolean;
  onClick?: any;
  disabled?: boolean;
  className?: any;
  textClassName?: any;
  [key: string]: any
}>) {

  return (
    <button
      onClick={() => onClick && onClick()}
      className={`flex flex-shrink-0 border-2 rounded-full items-center focus-visible:outline-none transition-colors ease-out duration-300 text-on-tertiary-3 px-3.5 gap-1.5 h-14 disabled:pointer-events-none disabled:opacity-[0.38] cursor-pointer
      ${checked ? 'border-secondary bg-secondary/30' : 'hover:bg-on-tertiary-2/[0.08] active:bg-on-tertiary-2/[0.16] border-tertiary-2'}
      ${className}`}
      disabled={disabled ? true : false}
    >
      {icon &&
        <img src={(checked && activeIcon) ? activeIcon : icon} alt="icon" className=" flex-shrink-0 icon-container size-icon-l default-icon" />
      }
      {text &&
        <div className="flex flex-col justify-center !leading-[3.5rem]">
          <span className={`font-Inter text-base leading-[140%] flex-shrink-0 font-medium text-nowrap ${textClassName}`}>{text}</span>
        </div>
      }
    </button>
  );
}
