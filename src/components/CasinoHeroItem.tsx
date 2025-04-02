import { KeyboardArrowRight } from "@mui/icons-material"

export default function CasinoHeroItem({
  title,
  description,
  actionName = "Let's Go",
  image,
  titleClassName = "text-brand-purple-light",
  bgClassName = "bg-brand-purple",
  svgClassName = "text-brand-purple",
  actionClassName = "",
  onClick
}: {
  title: string;
  description?: string;
  actionName?: string;
  image?: any;
  titleClassName?: string;
  bgClassName?: string;
  svgClassName?: string;
  actionClassName?: string;
  onClick?: any;
}) {

  return (
    <a onClick={() => onClick && onClick()} className="relative w-full group group/icon-button py-4 pb-8 md:pb-6 block">
      <div className="relative group/card p-1 rounded-4xl before:content-[''] before:absolute before:-z-[1] before:w-full before:h-full before:top-0 before:left-0 before:shadow before:rounded-t-4xl before:transition-opacity before:ease-in-out before:duration-300 before:opacity-0 bg-surface-1">
        <div className="rounded-4xl absolute top-0 left-0 w-full h-full overflow-hidden">
          <div>
            <div className={`transition-[transform,opacity] duration-500 ease-out absolute transform-gpu w-full h-full translate-x-full -translate-y-full opacity-0 blur-xl group-hover/card:translate-x-0 group-hover/card:translate-y-0 group-hover/card:opacity-100 ${bgClassName}`}></div>
            <div className={`absolute transform-gpu w-full h-full translate-x-1/2 -translate-y-3/4 rounded-full ${bgClassName} blur-3xl`}></div>
          </div>
        </div>
        <div className="w-full h-full relative bg-background rounded-4xl-1">
          <div className="w-full h-full top-0 left-0 absolute overflow-hidden rounded-4xl-1">
            <div className="w-full h-full transition-all ease-out duration-300 bg-gradient-to-b from-surface-1 to-background/0 max-h-[300px] relative " ></div>
          </div>
          <div className="w-full h-full relative rounded-3xl">
            <div className="absolute overflow-hidden w-full h-full inset-0 rounded-4xl-1 bg-surface-1 transition-all duration-300 group-hover:bg-surface-2">
              <div className="w-full !absolute !top-0 !-right-[30%] scale-105 transition-all duration-200 ease-out group-hover:scale-125 group-hover:duration-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 376 170" className={`relative w-full ${svgClassName}`}><g fill="currentColor" clip-path="url(#default_svg__a)"><path d="M316.248.583c-32.457 56.328-32.457 112.69 0 169.018H375.5c-49.131-55.847-49.68-112.175 0-169.018zM158.014 169.635h59.492c-10.567-56.328-10.567-112.69 0-169.018h-59.492c10.533 57.427 10.67 111.626 0 169.018"></path><path d="M296.487.583h-59.252c-10.945 56.328-10.945 112.69 0 169.018h59.252c-27.036-55.847-27.413-112.14 0-169.018m-236.769 0c32.457 56.328 32.457 112.69 0 169.018H.5C49.631 113.754 50.18 57.426.5.583h59.252z"></path><path d="M79.48.583h59.252c10.945 56.328 10.945 112.69 0 169.018H79.48c27.036-55.847 27.413-112.14 0-169.018"></path></g><defs><clipPath id="default_svg__a"><path fill="#fff" d="M.5.583h375v169.052H.5z"></path></clipPath></defs></svg>
              </div>
              <div className="bg-gradient-to-t from-background to-transparent absolute w-full h-full inset-0"></div>
              <div className="bg-gradient-to-r from-background to-transparent absolute w-4/5 h-full inset-0 via-background  opacity-90"></div>
            </div>
            <div className="flex h-44 justify-between items-stretch relative">
              <div className="p-5 flex flex-col justify-between basis-1/2 relative">
                <div className="flex flex-col gap-2">
                  <span className={`font-inter text-xl leading-[120%] font-Midnight uppercase ${titleClassName}`}>
                    {title}
                  </span>
                  <span className="font-inter text-sm leading-[140%] text-on-surface-2 text-balance">
                    {description}
                  </span>
                </div>
                <div className="mt-auto flex items-center gap-2 pointer-events-none select-none relative">
                  <button className="group/icon-button cursor-pointer rounded-full relative outline outline-offset-1 outline-2 outline-transparent transition-all ease-out duration-300 focus:outline-on-surface-1 active:outline-none disabled:pointer-events-none bg-tertiary-2 focus:bg-tertiary-2 disabled:bg-surface-disabled/[0.12] w-6 h-6 after:w-[42px] after:h-[42px] after:absolute after:left-1/2 after:top-1/2 after:-translate-x-1/2 after:-translate-y-1/2">
                    <div className="text-on-surface-1 w-full h-full rounded-full flex justify-center items-center transition-all ease-out duration-300 group-hover/icon-button:bg-on-tertiary-2/[0.08] group-active/icon-button:bg-on-tertiary-2/[0.16] group-focus/icon-button:bg-tertiary-2 group-disabled/icon-button:bg-transparent">
                      <KeyboardArrowRight className="!w-4 !h-4 group-disabled/icon-button:text-surface-disabled" />
                    </div>
                  </button>
                  <span className={`font-inter text-base leading-[140%] text-on-surface-2 transition-all duration-200 ease-out group-hover:text-on-surface-1 ${actionClassName}`}>
                    {actionName}
                  </span>
                </div>
              </div>

              <div className="absolute w-[90%] h-[120%] right-0 bottom-0 rounded-br-4xl-1 backface-fix overflow-hidden">
                <img src={image} alt="Carousel Tile" loading="eager" className="absolute bottom-0 right-0 h-[90%] w-auto max-w-none origin-bottom-right transition-transform transform-gpu duration-300 ease-out group-hover:scale-105 group-hover:duration-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}
