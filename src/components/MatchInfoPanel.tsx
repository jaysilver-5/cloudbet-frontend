import { ICompetitionItem } from "src/types/CompetitionItem";
import { IMatchItem } from "src/types/MatchItem";
import { getFormattedDay, getFormattedTime } from "src/utils";

export default function MatchInfoPanel({
  competitionInfo,
  matchInfo
}: {
  competitionInfo?: ICompetitionItem,
  matchInfo?: IMatchItem
}) {

  return (
    <div>
      <div className={`relative p-0.5 rounded-3xl before:content-[''] before:absolute before:-z-[1] before:w-full before:h-full before:top-0 before:left-0 before:shadow before:rounded-t-4xl before:transition-opacity before:ease-in-out before:duration-300 before:opacity-0 ${matchInfo?.isLive ? 'bg-surface-1' : 'bg-transparent'}`}>
        {matchInfo?.isLive &&
          <div className="rounded-3xl absolute top-0 left-0 w-full h-full overflow-hidden">
            <div>
              <div className="absolute transform-gpu w-full h-full -translate-x-1/2 -translate-y-3/4 rounded-full bg-secondary blur-2xl" data-test-id="card-gradient-element"></div>
            </div>
            <div>
              <div className="absolute transform-gpu w-full h-full translate-x-1/2 -translate-y-3/4 rounded-full bg-secondary blur-2xl" data-test-id="card-gradient-element"></div>
            </div>
          </div>
        }

        <div className="w-full h-full relative bg-background rounded-3xl-0.5">
          <div className="w-full h-full top-0 left-0 absolute overflow-hidden rounded-3xl-0.5">
            <div className={`w-full h-full transition-all ease-out duration-300 bg-surface-2 ${matchInfo?.isLive ? '!bg-surface-3' : '!bg-surface-1/40'}`}></div>
          </div>

          <div className="w-full h-full relative">
            <div className="p-5">
              <div className="flex flex-col gap-y-3 rounded-3xl">
                <div className="flex flex-row gap-x-3 items-center">
                  {competitionInfo?.logo &&
                    <div className="relative flex justify-center aspect-1 overflow-hidden shrink-0 rounded-full size-icon-s">
                      <img alt="Competition Icon" loading="lazy" decoding="async" data-nimg="fill" className="object-contain"
                        src={competitionInfo?.logo}
                      />
                    </div>
                  }
                  <span className="font-inter text-xs leading-[140%] text-on-surface-3">
                    {competitionInfo?.name}
                  </span>
                  <div className="flex gap-x-1 items-center"></div>
                </div>
                <div className="flex flex-row gap-x-0.5 justify-between">
                  <div className="max-w-xs flex-1">
                    <div className="relative">
                      <div className="h-full w-full flex flex-col gap-y-1 justify-center">
                        {/* home_team */}
                        <div className="flex flex-col justify-center">
                          <div className="flex items-center gap-x-3">
                            <div className="flex items-center gap-x-3 overflow-hidden mr-auto text-on-surface-1">
                              <div className="flex items-center flex-shrink-0 aspect-1 relative rounded-full overflow-hidden size-icon-l">
                                {matchInfo?.home_team?.logo &&
                                  <div className="relative transition-opacity duration-300 ease-in-out opacity-100 w-full h-full">
                                    <img alt="FC Shakhtar Donetsk" loading="eager" decoding="async" data-nimg="fill" className="object-cover"
                                      src={matchInfo?.home_team?.logo}
                                    />
                                  </div>
                                }
                              </div>
                              <span className="font-inter text-base leading-[140%] font-bold truncate text-on-surface-1">
                                {matchInfo?.home_team?.name}
                              </span>
                            </div>
                            <div className="flex gap-x-1.5 items-center">
                              <div className="flex gap-x-2 items-center font-medium">
                                {/* score */}
                                <div className="min-w-6 flex items-center justify-center">
                                  <span className="font-inter text-base leading-[140%] text-on-surface">
                                    {matchInfo?.home_team?.win}
                                  </span>
                                </div>
                              </div>
                              <div className="w-1.5 h-2"></div>
                            </div>
                          </div>
                        </div>

                        {/* away_team */}
                        <div className="flex flex-col justify-center">
                          <div className="flex items-center gap-x-3">
                            <div className="flex items-center gap-x-3 overflow-hidden mr-auto text-on-surface-1">
                              <div className="flex items-center flex-shrink-0 aspect-1 relative rounded-full overflow-hidden size-icon-l">
                                {matchInfo?.away_team?.logo &&
                                  <div className="relative transition-opacity duration-300 ease-in-out opacity-100 w-full h-full">
                                    <img alt="FC Shakhtar Donetsk" loading="eager" decoding="async" data-nimg="fill" className="object-cover"
                                      src={matchInfo?.away_team?.logo}
                                    />
                                  </div>
                                }
                              </div>
                              <span className="font-inter text-base leading-[140%] font-bold truncate text-on-surface-1">
                                {matchInfo?.away_team?.name}
                              </span>
                            </div>
                            <div className="flex gap-x-1.5 items-center">
                              <div className="flex gap-x-2 items-center font-medium">
                                {/* score */}
                                <div className="min-w-6 flex items-center justify-center">
                                  <span className="font-inter text-base leading-[140%] text-on-surface">
                                    {matchInfo?.away_team?.win}
                                  </span>
                                </div>
                              </div>
                              <div className="w-1.5 h-2"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="max-w-32 500:max-w-none justify-end flex items-center">
                    <div className="flex flex-col gap-y-0.5 text-right">
                      {matchInfo?.isLive ?
                        <p className="flex flex-col gap-y-1">
                          <span className="font-inter text-base leading-[140%] text-on-tertiary-1 font-bold animate-blink max-w-32 500:max-w-none">
                            {matchInfo?.currentTime}
                          </span>
                          {matchInfo?.currentStatus &&
                            <span className="font-inter text-sm leading-[140%] text-on-surface-3">
                              {matchInfo?.currentStatus}
                            </span>
                          }
                        </p>
                        :
                        <>
                          <span className="font-inter text-base leading-[140%] text-on-surface-1 font-bold max-w-32 500:max-w-none">
                            {getFormattedDay(matchInfo?.date)}
                          </span>
                          <span className="font-inter text-sm leading-[140%] text-on-surface-3">
                            {getFormattedTime(matchInfo?.date)}
                          </span>
                        </>
                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
