import { KeyboardArrowLeft, NewReleases, WarningAmberRounded } from "@mui/icons-material";
import CircleIconButton from "src/components/common/button/CircleIconButton";
import RoundedButton from "src/components/common/button/RoundedButton";
import { useState } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/material.css'

export default function ProfileVerification({
  onBack
}: {
  onBack: any
}) {

  const [phone, setPhone] = useState<any>()

  const handleConfigure = () => {

  }

  const handleVerificationSuccess = (token: any, ekey: any) => {

  }

  return (
    <div className="md:select-auto min-h-full select-none flex flex-col animate-slideFromRight">
      <div className="flex flex-row w-full items-center justify-between pt-3 pb-3 pl-2 pr-5 sticky top-0 bg-background z-20">
        <button className="flex items-center gap-1 group/icon-button" onClick={onBack}>
          <CircleIconButton iconComponent={<KeyboardArrowLeft />} className="!w-10 !h-10 border-transparent" />
          <span className="font-inter text-2xl leading-[120%] font-bold text-on-surface-1">Verification</span>
        </button>
      </div>

      <div className="flex flex-col">
        <div className="flex items-start relative px-5 pb-10">
          <p className="text-sm text-on-surface pt-2 sm:pt-5 max-w-[40ch]">We verify your identity to protect you and others from fraud and to comply with regulations.</p>
        </div>
        <div className="flex flex-col gap-y-3 p-5 relative">
          <div className="rounded-xl bg-surface-2 p-3 transition-colors duration-500 ring-2 ring-surface-5">
            <div className="flex items-start gap-x-4 text-on-surface">
              <div className="w-10 shrink-0 aspect-1 relative">
                <NewReleases className="!text-4xl text-surface-5" />
              </div>
              <div className="flex flex-col gap-y-1">
                <div className="text-base font-bold md:text-xl">Unverified</div>
                <ul>
                  <li className="flex items-center gap-x-2">
                    <div className="w-1.5 aspect-1 bg-on-surface"></div>
                    <div className="text-on-surface/70 text-sm">Restricted Rewards</div>
                  </li>
                  <li className="flex items-center gap-x-2">
                    <div className="w-1.5 aspect-1 bg-on-surface">
                    </div>
                    <div className="text-on-surface/70 text-sm">Small Withdrawals</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="rounded-xl bg-surface-2 p-3 transition-colors duration-500">
            <div className="flex items-start gap-x-4 text-on-surface">
              <div className="w-10 shrink-0 aspect-1 relative">
                <NewReleases className="!text-4xl text-success" />
              </div>
              <div className="flex flex-col gap-y-1">
                <div className="text-base font-bold md:text-xl">Level 1</div>
                <ul>
                  <li className="flex items-center gap-x-2">
                    <div className="w-1.5 aspect-1 bg-on-surface"></div>
                    <div className="text-on-surface/70 text-sm">Access to all rewards</div>
                  </li>
                  <li className="flex items-center gap-x-2">
                    <div className="w-1.5 aspect-1 bg-on-surface">
                    </div>
                    <div className="text-on-surface/70 text-sm">Medium Withdrawals</div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative mt-3">
              <div className="mt-4 flex flex-col items-center">
                <PhoneInput
                  placeholder="Enter your phone number"
                  value={phone}
                  onChange={value => setPhone(value)}
                  inputClass="!bg-surface-2 !w-full !py-4 !rounded-xl !border-surface-3"
                  containerClass="bg-surface-2"
                  dropdownClass="!bg-surface-5"
                />
              </div>
              <div className="mt-8 flex flex-col items-center">
                <HCaptcha
                  theme="dark"
                  sitekey="your-sitekey"
                  onVerify={handleVerificationSuccess}
                />
              </div>
              <div className="mt-4">
                <RoundedButton
                  text="Verify your number"
                  disabled={!phone}
                />
              </div>
            </div>
          </div>

          <div className="rounded-xl bg-surface-2 p-3 transition-colors duration-500">
            <div className="flex items-start gap-x-4 text-on-surface">
              <div className="w-10 shrink-0 aspect-1 relative opacity-40">
                <NewReleases className="!text-4xl text-success" />
              </div>
              <div className="flex flex-col gap-y-1">
                <div className="text-base font-bold md:text-xl opacity-40">Level 2</div>
                <ul>
                  <li className="flex items-center gap-x-2">
                    <div className="w-1.5 aspect-1 bg-on-surface"></div>
                    <div className="text-on-surface/70 text-sm">Access to all rewards</div>
                  </li>
                  <li className="flex items-center gap-x-2">
                    <div className="w-1.5 aspect-1 bg-on-surface">
                    </div>
                    <div className="text-on-surface/70 text-sm">Large Withdrawals</div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-4 opacity-40">
              <RoundedButton
                text="Verify identify"
                disabled={true}
              />
              <div className="text-xs text-on-surface/70 text-center pt-3">
                Complete <span className="font-bold">Level 1</span> verification first.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
