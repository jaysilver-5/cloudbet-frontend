import { KeyboardArrowDown } from "@mui/icons-material";
import { Popover } from "@mui/material";
import { useRef, useState } from "react";
import { styled } from '@mui/material/styles';


const StyledPopover = styled(Popover)(({ theme }) => ({
  '& .MuiPaper-root': {
    background: 'transparent',
  }
}));

export default function CustomSelect({
  value,
  items,
  className,
  dropdownClassName,
  itemAlign = 'justify-end',
  iconClassName,
  onChange,
}: {
  value?: any;
  items?: any[];
  className?: any;
  dropdownClassName?: any;
  itemAlign?: any;
  iconClassName?: any;
  onChange?: any;
}) {

  const buttonRef = useRef(null);
  const [anchorEl, setAnchorEl] = useState<any>(null);
  const handleShowMenu = () => {
    setAnchorEl(buttonRef.current);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);

  return (
    <div className="relative">
      <div className="w-full h-full">
        <button
          ref={buttonRef}
          onClick={handleShowMenu}
          className="group/text-button text-on-tertiary-1 relative transition-all ease-out duration-300 hover:bg-on-tertiary-1/[0.08] active:bg-on-tertiary-1/[0.08] active:outline-transparent rounded-full outline outline-offset-1 outline-2 outline-transparent focus:outline-on-surface-1 focus:bg-transparent disabled:text-surface-disabled disabled:pointer-events-none min-h-11 px-3 after:w-full after:h-[42px] after:absolute after:left-1/2 after:top-1/2 after:-translate-x-1/2 after:-translate-y-1/2"
        >
          <div className="gap-x-3 transition-transform ease-out duration-300 group-active/text-button:scale-95 w-full h-full flex flex-row items-center justify-center">
            {items?.find(item => item.value == value)?.icon &&
              <div className="relative rounded-full flex justify-center aspect-1 overflow-hidden">
                <img src={items?.find(item => item.value == value)?.icon} alt="icon" className="icon-container size-icon-l default-icon" />
              </div>
            }
            <span className="font-inter text-xl leading-[120%] font-medium">
              {items?.find(item => item.value == value)?.label ?? ''}
            </span>
            <KeyboardArrowDown className={`transition-transform duration-300 ease-out !w-5 !h-5 ${open && '-rotate-180'}`} />
          </div>
        </button>
        <StyledPopover
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
          <div className={`flex flex-col rounded-2xl overflow-hidden focus:outline-none ${dropdownClassName}`}>
            {items?.map((item, index) => (
              <button
                key={index}
                onClick={() => { onChange && onChange(item.value); handleCloseMenu(); }}
                className={`bg-surface-5 h-14 group/menu-item ${item.value === value ? 'text-on-tertiary-1' : 'text-on-surface-1'}`}
              >
                <div className="w-full h-full whitespace-nowrap p-3 group-hover/menu-item:bg-on-surface-1/[0.08] group-active/menu-item:bg-on-surface-1/[0.16]">
                  <div className={`flex flex-row gap-x-3 items-center w-full h-full ${itemAlign}`}>
                    {item.icon &&
                      <div className="flex-shrink-0 rounded-full overflow-hidden">
                        <img src={item.icon} alt="icon" className="icon-container size-icon-l default-icon" />
                      </div>
                    }
                    <span className="font-inter text-xl leading-[120%] font-medium truncate transition-colors duration-300 ease-out">
                      {item.label}
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </StyledPopover>
      </div>
    </div>
  );
}
