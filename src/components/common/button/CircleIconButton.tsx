export default function CircleIconButton({
  icon,
  iconComponent,
  className,
  onClick,
  ...props
}: Readonly<{
  icon?: any;
  iconComponent?: any;
  className?: string;
  onClick?: any;
  [key: string]: any
}>) {

  return (
    <button
      onClick={() => onClick && onClick()}
      className={`group/icon-button cursor-pointer rounded-full relative outline outline-offset-1 outline-2 outline-transparent transition-all ease-out duration-300 focus:outline-on-surface-1 active:outline-none disabled:pointer-events-none border-2 border-tertiary-2 ring-on-surface-1 focus:bg-transparent disabled:border-surface-disabled/[0.12]  w-14 h-14 after:w-[42px] after:h-[42px] after:absolute after:left-1/2 after:top-1/2 after:-translate-x-1/2 after:-translate-y-1/2 ${className}`}
    >
      <div className="text-on-surface-1 w-full h-full rounded-full flex justify-center items-center transition-all ease-out duration-300 group-hover/icon-button:bg-on-tertiary-2/[0.08] group-active/icon-button:bg-on-tertiary-2/[0.16] group-focus/icon-button:bg-transparen">
        {icon &&
          <div className="!h-8">
            <img src={icon} alt="icon" className="w-8 h-8" />
          </div>
        }
        {iconComponent && iconComponent}
      </div>
    </button>
  );
}
