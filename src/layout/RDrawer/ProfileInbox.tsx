import { KeyboardArrowLeft, WarningAmberRounded } from "@mui/icons-material";
import { useState } from "react";
import CircleIconButton from "src/components/common/button/CircleIconButton";
import RoundedButton from "src/components/common/button/RoundedButton";

export default function ProfileInbox({
  onBack
}: {
  onBack: any
}) {

  const [messages, setMessages] = useState<any>([]);

  return (
    <div className="md:select-auto min-h-full select-none flex flex-col animate-slideFromRight">
      <div className="flex flex-row w-full items-center justify-between pt-3 pb-3 pl-2 pr-5 sticky top-0 bg-background z-20">
        <button className="flex items-center gap-1 group/icon-button" onClick={onBack}>
          <CircleIconButton iconComponent={<KeyboardArrowLeft />} className="!w-10 !h-10 border-transparent" />
          <span className="font-inter text-2xl leading-[120%] font-bold text-on-surface-1">Inbox</span>
        </button>
      </div>

      {messages?.length == 0 &&
        <div className="flex flex-col text-center items-center pt-24 lg:pt-28">
          <div className="w-40 relative"><svg width="219" height="204" viewBox="0 0 219 204" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto"><path d="M15.28 79.08v1.44M10.96 83.39h1.44M15.28 87.23v-1.44M19.6 83.39h-1.44" stroke="#5A5F66" stroke-width="2.92" stroke-linecap="round" opacity="1" transform-origin="15.28000020980835px 83.15500259399414px"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M147.19 76.59c2.47-.77 6.26-3.8 7.14-7.06.8 2.88 4.14 6.28 7.16 6.54-3.39 1.2-6.63 4.77-7.15 7.58-.35-2.86-4.83-6.65-7.15-7.06" fill="#3F4750" opacity="1" transform-origin="154.34000396728516px 76.59000015258789px"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M199.89 104.87c1.24-.39 3.13-1.9 3.57-3.52.4 1.44 2.07 3.15 3.58 3.28-1.7.6-3.32 2.38-3.58 3.78-.18-1.43-2.43-3.33-3.57-3.53" fill="#3F4750" opacity="1" transform-origin="203.46500396728516px 104.8800048828125px"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M42.09 55.16c0 1.79-1.45 3.23-3.23 3.23-1.78 0-3.23-1.44-3.23-3.23 0-1.78 1.45-3.23 3.23-3.23 1.78 0 3.23 1.45 3.23 3.23" fill="#3F4750" opacity="1" transform-origin="38.86000061035156px 55.15999984741211px"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M193.22 47.93c0 2.98-2.42 5.4-5.4 5.4-2.98 0-5.4-2.42-5.4-5.4 0-2.98 2.42-5.4 5.4-5.4 2.98 0 5.4 2.42 5.4 5.4" fill="#3F4750" opacity="1" transform-origin="187.82000732421875px 47.93000030517578px"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M28.13 131.3c-2.06.79-4.37-.25-5.15-2.32-.78-2.06.25-4.37 2.32-5.16 2.06-.79 4.37.25 5.15 2.32.78 2.06-.25 4.37-2.32 5.16Z" stroke="#5A5F66" stroke-width="2.92" stroke-linecap="round" opacity="1" transform-origin="26.714998245239258px 127.55999374389648px"></path><path d="M103.97 21.12l-.11.11c-.54.61-.19 1.62.65 1.73l4.71.58-4.16 15.52c-.26.98.88 1.72 1.66 1.07l17.82-15.04.11-.11c.54-.61.19-1.62-.65-1.73l-5.67-.7 5.1-15.34c.33-.99-.84-1.8-1.65-1.13L103.97 21.12Z" fill="#5A5F66" opacity="1" transform-origin="114.25500106811523px 23.10497283935547px"></path><path d="M70.16 61.91l-.02.1c-.07.51.46.92.92.67l2.65-1.37 3.33 9.55c.21.61 1.07.59 1.24-.06l3.94-14.13.02-.1c.07-.51-.46-.92-.92-.67l-3.2 1.65-2.78-9.79c-.18-.63-1.08-.63-1.26 0l-3.94 14.13Z" fill="#5A5F66" opacity="1" transform-origin="76.19000625610352px 59.29524230957031px"></path><path d="M174.66 132.16l-.06.07c-.28.39.01.96.5.97l2.81.02-1.4 9.41c-.09.6.62 1.03 1.03.59l9.46-10.04.06-.07c.28-.39-.01-.96-.5-.97l-3.38-.03 1.97-9.37c.13-.61-.6-1.01-1.03-.55l-9.46 10.05Z" fill="#3F4750" opacity="1" transform-origin="180.83000946044922px 132.69553756713867px"></path><g opacity="1" transform-origin="106.67500305175781px 124.83000183105469px"><path d="M142.94 155.91H70.41c-2.35 0-4.25-1.55-4.25-3.47V97.22c0-1.91 1.9-3.47 4.25-3.47h72.53c2.35 0 4.25 1.55 4.25 3.47v55.22c0 1.91-1.9 3.47-4.25 3.47Z" fill="#C3C7CF"></path><path d="M118.25 133.05c-.91.91-2.39.91-3.31 0l-6.21-6.21c-1.14-1.14-2.98-1.14-4.12 0l-6.21 6.21c-.91.91-2.39.91-3.31 0-.91-.91-.91-2.39 0-3.31l6.21-6.21c1.14-1.14 1.14-2.98 0-4.12l-6.21-6.21c-.91-.91-.91-2.39 0-3.31.91-.91 2.39-.91 3.31 0l6.21 6.21c1.14 1.14 2.98 1.14 4.12 0l6.21-6.21c.91-.91 2.39-.91 3.31 0 .91.91.91 2.39 0 3.31l-6.21 6.21c-1.14 1.14-1.14 2.98 0 4.12l6.21 6.21c.91.91.91 2.39 0 3.31Z" fill="#8D9199"></path></g><path fill-rule="evenodd" clip-rule="evenodd" d="M52.06 123.22l49.09 32.44c3.34 2.21 7.68 2.21 11.02 0l49.09-32.44v58.48c0 5.52-4.48 10-10 10H62.06c-5.52 0-10-4.48-10-10v-58.48Z" fill="#73777F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M101.31 145.7c3.27-2.08 7.45-2.08 10.72 0l49.94 31.28v4.72c0 5.52-4.48 10-10 10H62.06c-5.52 0-10-4.48-10-10v-4.72l49.25-31.28Z" fill="#8D9199"></path></svg><div className="w-full h-5 bg-background absolute left-0 bottom-0"></div><div className="w-full h-1/2 bg-gradient-to-t from-background absolute left-0 bottom-5"></div></div>
          <div className=" -mt-4 relative"><div className="text-xl text-on-surface-1 font-bold leading-none mb-1.5">No Messages</div><p className="text-sm text-on-surface-3 mb-5">Please check back later</p></div>
        </div>
      }
    </div>
  );
}
