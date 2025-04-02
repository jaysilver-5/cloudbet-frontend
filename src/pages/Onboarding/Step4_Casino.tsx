import { useTranslation } from "react-i18next";

import SportsIcon from '../../assets/icons/nav/sports-active.svg';
import CasinoIcon from '../../assets/icons/nav/casino-active.svg';
import EsportsIcon from '../../assets/icons/nav/esports-active.svg';

const items = [
  { name: 'Video Poker', desc: 'Evolution', icon: SportsIcon },
  { name: 'Side Bet City', desc: 'Evolution', icon: EsportsIcon },
  { name: 'Lightning Sic Bo', desc: 'Evolution', icon: CasinoIcon },
  { name: 'Blackjack Lobby', desc: 'Evolution', icon: CasinoIcon },
  { name: 'Cloudbet Blackjack', desc: 'Evolution', icon: CasinoIcon },
  { name: 'Roulette Lobby', desc: 'Evolution', icon: CasinoIcon },
  { name: 'Game show Lobby', desc: 'Evolution', icon: CasinoIcon },
  { name: 'Gift Shop', desc: 'Evolution', icon: CasinoIcon },
  { name: 'Avitar', desc: 'Evolution', icon: CasinoIcon },
  { name: 'Money Wheel', desc: 'Evolution', icon: CasinoIcon },
  { name: 'Roulette', desc: 'Evolution', icon: CasinoIcon },
]

export default function Step4_Casino({
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
            What kind of games interest you?
          </div>
        </header>
        <div className="overflow-y-auto scrollbar-hide ">
          <div className="grid grid-cols-2 gap-2 pb-[8rem] sm:grid-cols-3 sm:gap-2 lg:gap-3 xl:grid-cols-4">
            {items.map((item, index) => (
              <div className="group relative" key={index}>
                <div
                  className={`flex flex-col no-highlight w-full items-center justify-center p-4 rounded-2xl sm:rounded-3xl border-4 lg:p-5 transition-all ease-out duration-200 group outline-offset-4 active:scale-95 cursor-pointer
                ${selectedItems.includes(item.name) ? 'duration-500 bg-surface-1 border-secondary hover:border-secondary' : 'bg-surface-1 border-transparent hover:border-[#2e343b] '}`}
                  onClick={() => handleToggleItem(item.name)}
                >
                  <div className=" mx-auto transition text-center overflow-hidden bg-black rounded-xl w-full aspect-[4/3] relative sm:rounded-2xl ">
                    <img src={item.icon} alt="icon" className="z-10 object-cover h-full w-full" />
                  </div>
                  <div className=" relative z-20 px-1 pt-3 pb-1 w-full max-w-xs">
                    <div className="text-left">
                      <div className=" truncate text-sm font-normal tracking-wide text-on-surface-1 ">{item.name}</div>
                      <div className=" truncate text-xs font-normal tracking-wide text-on-surface-3 mb-0 ">{item.desc}</div>
                    </div>
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
