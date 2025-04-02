import { useTranslation } from "react-i18next";

import SportsIcon from '../../assets/icons/nav/sports-active.svg';
import CasinoIcon from '../../assets/icons/nav/casino-active.svg';
import EsportsIcon from '../../assets/icons/nav/esports-active.svg';

const items = [
  { name: 'EPL', icon: SportsIcon },
  { name: 'NBA', icon: EsportsIcon },
  { name: 'NFL', icon: CasinoIcon },
  { name: 'NCAAM', icon: CasinoIcon },
  { name: 'NCAAF', icon: SportsIcon },
  { name: 'MLB', icon: CasinoIcon },
  { name: 'Tennis', icon: EsportsIcon },
  { name: 'Cricket', icon: SportsIcon },
  { name: 'Baseball', icon: CasinoIcon },
  { name: 'Basketball', icon: SportsIcon },
  { name: 'Volleyball', icon: EsportsIcon },
  { name: 'Table Tennis', icon: SportsIcon },
]

export default function Step4_Sports({
  selectedItems,
  onSelectItems,
}: {
  selectedItems: string[];
  onSelectItems: any;
}) {
  const t = useTranslation();

  const handleToggleItem = (item: string) => {
    if (selectedItems.includes(item)) {
      onSelectItems(selectedItems.filter(k => k != item));
    } else {
      onSelectItems([...selectedItems, item]);
    }
  }

  return (
    <div className="absolute h-full top-0 left-0 w-full">
      <section className="flex flex-col h-full lg:justify-center ">
        <header className=" text-center mb-4 px-10 lg:mt-3 lg:mb-3 ">
          <div className=" text-on-surface text-lg font-bold mb-3 sm:text-2xl ">
            Select your favorite sports
          </div>
        </header>
        <div className="overflow-y-auto scrollbar-hide ">
          <div className="grid grid-cols-2 gap-2 pb-[8rem] xs:grid-cols-3 lg:grid-cols-4 lg:gap-3 xl:grid-cols-5 xl:px-10 xl:gap-4">
            {items.map((item, index) => (
              <div className="group relative" key={index}>
                <div
                  className={`flex flex-col no-highlight w-full items-center justify-center p-4 rounded-2xl sm:rounded-3xl border-4 lg:p-5 transition-all ease-out duration-200 group outline-offset-4 active:scale-95 cursor-pointer
                ${selectedItems.includes(item.name) ? 'duration-500 bg-surface-1 border-secondary hover:border-secondary' : 'bg-surface-1 border-transparent hover:border-[#2e343b] '}`}
                  onClick={() => handleToggleItem(item.name)}
                >
                  <div className="absolute z-0 top-0 left-0 w-full h-full pointer-events-none rounded-2xl sm:rounded-3xl opacity-25"></div>
                  <div className="h-14 w-14 sm:w-20 sm:h-20 mx-auto text-center">
                    <img src={item.icon} alt="icon" className="dark:hidden object-contain h-full w-full" />
                  </div>
                  <div className="truncate mt-2 w-full">
                    <div className=" truncate text-sm font-medium text-on-surface-1 text-center ">{item.name}</div>
                  </div>
                  <div className="rounded-full flex items-center justify-center h-6 w-6 absolute right-2 top-2">
                    <div className={`absolute w-full h-full rounded-full bg-secondary transition-all duration-400 ease-[cubic-bezier(.5,.46,.69,1.4)] transform ${selectedItems.includes(item.name) ? 'scale-100' : 'scale-0'}`}></div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className={`w-4 h-4 text-white relative transition-all duration-200 ease-out transform ${selectedItems.includes(item.name) ? 'scale-100' : 'scale-0'}`}><path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd"></path></svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
