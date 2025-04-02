import { Close } from "@mui/icons-material";
import { Dialog } from "@mui/material";
import { styled } from '@mui/material/styles';
import CircleIconButton from "../button/CircleIconButton";


const CustomDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    background: 'transparent',
    overflow: 'hidden',
    padding: 20,
    boxShadow: 'none',
    width: '100%',
    maxWidth: 'inherit',
  }
}));


export default function CustomModal({
  open,
  onClose,
  className = '',
  children
}: {
  open: boolean;
  onClose: any;
  className?: any;
  children?: any;
}) {

  return (
    <CustomDialog onClose={onClose} open={open}>
      <div className={`relative mx-auto h-screen sm:h-auto sm:max-w-4xl lg:max-w-3xl xl:max-w-2xl w-full ${className}`}>
        <div className="absolute z-40 sm:block sm:-top-2 sm:-right-2 hidden">
          <CircleIconButton
            iconComponent={<Close />}
            className="!w-10 !h-10 !bg-tertiary-2 !ring-0 !outline-none"
            onClick={onClose} />
        </div>

        <div className="relative p-0.5 rounded-4xl before:content-[''] before:absolute before:-z-[1] before:w-full before:h-full before:top-0 before:left-0 before:shadow before:rounded-t-4xl before:transition-opacity before:ease-in-out before:duration-300 before:opacity-0 bg-surface-1 h-full max-sm:p-0">
          <div className="w-full h-full relative bg-background rounded-4xl-0.5 max-sm:rounded-none text-on-surface-1 overflow-hidden">
            <div className="w-full h-full top-0 left-0 absolute  rounded-4xl-0.5 max-sm:rounded-none text-on-surface-1 overflow-hidden">
              <div className="w-full h-full transition-all ease-out duration-300  !bg-background max-sm:rounded-none" ></div>
            </div>
            <div className="w-full h-full relative">
              <div className="flex flex-col h-full relative">
                <div className="justify-between transition-all flex-1 sm:flex-auto duration-200 ease-out flex flex-col opacity-100 overflow-y-hidden sm:h-[55vh] !h-full overflow-hidden rounded-4xl-1">
                  {children}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CustomDialog >
  );
}
