import { KeyboardArrowLeft, WarningAmberRounded } from "@mui/icons-material";
import { useState } from "react";
import CircleIconButton from "src/components/common/button/CircleIconButton";
import RoundedButton from "src/components/common/button/RoundedButton";
import CustomSelect from "src/components/common/select/CustomSelect";

export default function ProfilePreferences({
  onBack
}: {
  onBack: any
}) {

  const [ghostMode, setGhostMode] = useState(0);
  const [timeZone, setTimeZone] = useState(0);
  const [oddsFormat, setOddsFormat] = useState(0);
  const [language, setLanguage] = useState('en');

  const handleGambling = () => {

  }

  const handleAPI = () => {

  }

  return (
    <div className="md:select-auto min-h-full select-none flex flex-col animate-slideFromRight">
      <div className="flex flex-row w-full items-center justify-between pt-3 pb-3 pl-2 pr-5 sticky top-0 bg-background z-20">
        <button className="flex items-center gap-1 group/icon-button" onClick={onBack}>
          <CircleIconButton iconComponent={<KeyboardArrowLeft />} className="!w-10 !h-10 border-transparent" />
          <span className="font-inter text-2xl leading-[120%] font-bold text-on-surface-1">Preferences</span>
        </button>
      </div>

      <div className="flex flex-col p-5">

        <section className="flex flex-col mb-8">
          <div className="rounded-full bg-surface-2 items-center flex justify-between py-1.5 min-h-16 pl-4 pr-1.5">
            <span className="font-inter text-xl leading-[120%] text-on-surface-1 font-bold">
              Ghost Mode
            </span>
            <div className="flex justify-end max-w-[75%]">
              <div className="flex">
                <CustomSelect
                  items={[
                    { label: "Partial", value: 0 },
                    { label: "On", value: 1 },
                    { label: "Off", value: 2 },
                  ]}
                  value={ghostMode}
                  onChange={setGhostMode}
                />
              </div>
            </div>
          </div>
          <div className="px-4 pt-1">
            <span className="font-inter text-sm leading-[140%] text-on-surface-3 text-balance">
              Your username and profile is only visible to you.
            </span>
          </div>
        </section>

        <section className="flex flex-col mb-8">
          <div className="rounded-full bg-surface-2 items-center flex justify-between py-1.5 min-h-16 pl-4 pr-1.5">
            <span className="font-inter text-xl leading-[120%] text-on-surface-1 font-bold">
              Time zone
            </span>
            <div className="flex justify-end max-w-[75%]">
              <div className="flex">
                <CustomSelect
                  items={[
                    { label: "-11:00 - Samoa", value: -11 },
                    { label: "-10:00 - Hawaii", value: -10 },
                    { label: "-9:00 - Alaska", value: -9 },
                    { label: "00:00 - Greenwitch Mean", value: 0 },
                    { label: "+01:00 - West Africa", value: 1 },
                  ]}
                  value={timeZone}
                  onChange={setTimeZone}
                />
              </div>
            </div>
          </div>
          <div className="px-4 pt-1">
            <span className="font-inter text-sm leading-[140%] text-on-surface-3 text-balance">
              All event start times will display in your preferred timezone.
            </span>
          </div>
        </section>

        <section className="flex flex-col mb-8">
          <div className="rounded-full bg-surface-2 items-center flex justify-between py-1.5 min-h-16 pl-4 pr-1.5">
            <span className="font-inter text-xl leading-[120%] text-on-surface-1 font-bold">
              Odds format
            </span>
            <div className="flex justify-end max-w-[75%]">
              <div className="flex">
                <CustomSelect
                  items={[
                    { label: "American", value: 0 },
                    { label: "Decimal", value: 1 },
                    { label: "Fractional", value: 2 },
                  ]}
                  value={oddsFormat}
                  onChange={setOddsFormat}
                />
              </div>
            </div>
          </div>
          <div className="px-4 pt-1">
            <span className="font-inter text-sm leading-[140%] text-on-surface-3 text-balance">
              Displayed for sports betting markets
            </span>
          </div>
        </section>

        <section className="flex flex-col mb-8">
          <div className="rounded-full bg-surface-2 items-center flex justify-between py-1.5 min-h-16 pl-4 pr-1.5">
            <span className="font-inter text-xl leading-[120%] text-on-surface-1 font-bold">
              Language
            </span>
            <div className="flex justify-end max-w-[75%]">
              <div className="flex">
                <CustomSelect
                  items={[
                    { icon: 'https://www.cloudbet.com/sports-data/country-flags/1x1/GB.svg', label: "English", value: 'en' },
                    { icon: 'https://www.cloudbet.com/sports-data/country-flags/1x1/ES.svg', label: "Español", value: 'es' },
                    { icon: 'https://www.cloudbet.com/sports-data/country-flags/1x1/DE.svg', label: "Deutsch", value: 'de' },
                  ]}
                  value={language}
                  onChange={setLanguage}
                  dropdownClassName="min-w-[200px]"
                  itemAlign="justify-start"
                />
              </div>
            </div>
          </div>
          <div className="px-4 pt-1">
            <span className="font-inter text-sm leading-[140%] text-on-surface-3 text-balance">
              Select your preferred language
            </span>
          </div>
        </section>

        <section className="flex flex-col mb-8">
          <div className="rounded-full bg-surface-2 items-center flex justify-between py-1.5 min-h-16 pl-4 pr-1.5">
            <span className="font-inter text-xl leading-[120%] text-on-surface-1 font-bold">
              Responsible gambling
            </span>
            <div className="flex justify-end max-w-[75%]">
              <div className="flex max-w-40">
                <RoundedButton
                  text={'Learn more'}
                  textClassName="text-on-tertiary !text-2xl font-bold"
                  className="!w-fit !bg-surface-2"
                  onClick={handleGambling}
                />
              </div>
            </div>
          </div>
          <div className="px-4 pt-1">
            <span className="font-inter text-sm leading-[140%] text-on-surface-3 text-balance">
              We are committed to Responsible Gambling
            </span>
          </div>
        </section>

        <section className="flex flex-col mb-8">
          <div className="rounded-full bg-surface-2 items-center flex justify-between py-1.5 min-h-16 pl-4 pr-1.5">
            <span className="font-inter text-xl leading-[120%] text-on-surface-1 font-bold">
              API Key
            </span>
            <div className="flex justify-end max-w-[75%]">
              <div className="flex max-w-40">
                <RoundedButton
                  text={'Learn more'}
                  textClassName="text-on-tertiary !text-2xl font-bold"
                  className="!w-fit !bg-surface-2"
                  onClick={handleAPI}
                />
              </div>
            </div>
          </div>
          <div className="px-4 pt-1">
            <span className="font-inter text-sm leading-[140%] text-on-surface-3 text-balance">
              Trading access
            </span>
          </div>
        </section>
      </div>
    </div>
  );
}
