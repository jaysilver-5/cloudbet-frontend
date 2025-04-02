import { useTranslation } from "react-i18next";

import SportsIcon from '../../assets/icons/nav/sports-active.svg';
import CasinoIcon from '../../assets/icons/nav/casino-active.svg';
import EsportsIcon from '../../assets/icons/nav/esports-active.svg';

const kinds = [
  { name: 'sports', icon: SportsIcon },
  { name: 'esports', icon: EsportsIcon },
  { name: 'casino', icon: CasinoIcon },
]

export default function Step3({
  selectedKinds,
  onSelectKinds,
}: {
  selectedKinds: string[];
  onSelectKinds: any;
}) {
  const t = useTranslation();

  const handleToggleKind = (kind: string) => {
    if (selectedKinds.includes(kind)) {
      onSelectKinds(selectedKinds.filter(k => k != kind));
    } else {
      onSelectKinds([...selectedKinds, kind]);
    }
  }

  return (
    <div className="absolute h-full top-0 left-0 w-full">
      <section className="flex flex-col h-full pb-40">
        <header className=" text-center px-6 lg:px-12 lg:mt-3 lg:mb-6 ">
          <div className=" text-on-surface text-lg font-bold mb-3 sm:text-2xl ">
            What are you interested in?
          </div>
          <div className="text-base sm:text-xl text-on-surface-2">
            Select one or more
          </div>
        </header>
        <ul className=" my-auto lg:flex lg:justify-center xl:px-10 ">
          {kinds.map((item, index) => (
            <li className="my-4 lg:p-2 lg:w-4/12 lg:flex-1" key={index}>
              <div
                className={`flex no-highlight items-center justify-between space-x-5 w-full p-3.5 border-2 rounded-4xl sm:border-4  lg:space-x-4 transition-all ease-out duration-200 group outline-offset-4 active:scale-95 bg-transparent cursor-pointer
                ${selectedKinds.includes(item.name) ? 'duration-500 border-secondary hover:border-secondary ' : 'border-surface-2'}`}
                onClick={() => handleToggleKind(item.name)}
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full transition-all duration-200 bg-surface-2">
                  <img src={item.icon} alt="icon" className="w-7 h-7" />
                </div>
                <div className="flex-1 truncate">
                  <div className="flex items-center space-x-2">
                    <div className=" truncate text-2xl font-medium text-on-surface-1 ">{item.name}</div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
