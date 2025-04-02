import { styled } from "@mui/material/styles";
import { Button, ButtonProps } from "@mui/material";

const CustomButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText("#211c25"),
  backgroundColor: "#211c25",
  '&:hover': {
    backgroundColor: "#302c34",
  },
}));


export default function RoundedButton({
  text,
  variant = "contained",
  align = 'justify-center',
  leftImg,
  leftIcon,
  rightImg,
  className = '',
  imgClassName = '',
  textClassName = '',
  onClick,
  ...props
}: Readonly<{
  text?: string;
  variant?: 'text' | 'outlined' | 'contained';
  className?: string;
  align?: string;
  leftImg?: any;
  leftIcon?: any;
  rightImg?: any;
  imgClassName?: string;
  onClick?: any;
  [key: string]: any
}>) {

  return (
    <CustomButton
      variant={variant}
      className={`relative w-full !rounded-full h-[50px] ${className} !${align}`}
      onClick={() => onClick && onClick()}
      {...props}
    >
      {leftImg &&
        <img src={leftImg} alt="left" className={`${imgClassName} mr-2`} />
      }
      {leftIcon && leftIcon}
      {text &&
        <span className={`normal-case text-lg ${textClassName}`}>{text}</span>
      }
      {rightImg &&
        <img src={rightImg} alt="right" className={`${imgClassName}`} />
      }
    </CustomButton>
  );
}
