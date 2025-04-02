
import { useTranslation } from "react-i18next";

export default function Step0() {
  const t = useTranslation();

  return (
    <div className="absolute h-full top-0 left-0 w-full">
      <section className="h-full">
        <div className="h-full flex items-center justify-center pb-[8rem]">
          <div className="relative">
            <h1 className=" px-10 font-Midnight uppercase text-on-surface-1 text-3xl mb-3 sm:text-4xl leading-[110%] ">Welcome to the Club</h1>
          </div>
        </div>
      </section>
    </div>
  );
}
