export default function RoundedInput({
  placeholder,
  icon,
  iconComponent,
  value,
  onChange,
  disabled,
  tip,
  className,
  wrapperClassName,
  inputClassName,
  ...props
}: Readonly<{
  placeholder?: any;
  icon?: any;
  iconComponent?: any;
  value?: any;
  onChange?: any;
  disabled?: boolean;
  tip?: any;
  className?: any;
  wrapperClassName?: any;
  inputClassName?: any;
  [key: string]: any
}>) {

  return (
    <div className={`flex-1 h-full z-50 relative shrink-0 xl:w-[18rem] lg:px-0 transition-all duration-300 ${className}`}>
      <div className="flex flex-col gap-y-1">
        <div className={`w-full h-14 relative flex items-center border-2 border-surface-2 text-on-surface-3 focus-within:text-on-surface-1 transition-colors ease-out duration-200 [:hover&:not(:focus-within)]:border-surface-3 has-[.input:focus]:border-primary has-[.input:disabled]:opacity-[0.38] has-[.input:disabled]:text-on-surface-disabled has-[.input:read-only]:!border-surface-2 !rounded-full ${wrapperClassName}`}>
          <div className="absolute left-4">
            {iconComponent && iconComponent}
            {icon && <img src={icon} className="size-icon-l" />}
          </div>
          <input className={`input w-full h-full appearance-none font-inter text-base peer px-4 leading-14 input-reset bg-transparent read-only:text-on-surface-1 ring-transparent outline-transparent border-none focus:border-none focus:ring-transparent focus:placeholder-transparent placeholder-on-surface-3 disabled:text-on-surface-disabled disabled:placeholder-on-surface-disabled pl-[calc(theme("spacing.4")+theme("spacing.7")+theme("spacing[1.5]"))] !pl-[calc(theme("spacing.4")+theme("spacing.7")+theme("spacing[1.5]"))] focus:outline-none ${inputClassName}`} type="text" value={value} onChange={(e) => onChange && onChange(e.target.value)}></input>
          {(placeholder && !value) &&
            <span className='font-inter absolute text-on-surface-3 opacity-1 pointer-events-none transition-all ease-out duration-300 h-6 rounded-sm top-1/2 -translate-y-1/2 overflow-hidden whitespace-nowrap w-full truncate text-left pr-4 pl-[calc(theme("spacing.4")+theme("spacing.7")+theme("spacing[1.5]"))] peer-focus:opacity-0'>{placeholder}</span>
          }
        </div>
        {tip &&
          <span className="font-inter text-sm leading-[140%] px-4 transition-colors ease-out duration-300 min-h-5 text-on-surface-1">
            {tip}
          </span>
        }
      </div>
    </div>
  );
}
