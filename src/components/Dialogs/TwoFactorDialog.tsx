import { Close, ContentCopy } from "@mui/icons-material";
import CircleIconButton from "../common/button/CircleIconButton";
import CustomModal from "../common/modal/CustomModal";
import RoundedButton from "src/components/common/button/RoundedButton";
import { useState } from "react";
import QRCode from "react-qr-code";
import { TextField } from "@mui/material";

export default function TwoFactorDialog({
  open,
  onClose
}: {
  open: boolean;
  onClose: any;
}) {

  const [authCode, setAuthCode] = useState('mp225sgzeyfvwm5eocoptoa5ytdmqiuscisedhlx32c7zfobuaaaqluyeily743p');

  return (
    <CustomModal onClose={onClose} open={open} className={"lg:max-w-4xl xl:max-w-4xl"}>
      <div className="mx-auto flex-grow w-full">
        <div className="flex flex-col w-full h-full relative max-w-full">
          <div className="flex justify-between gap-x-3 items-start pl-4 pr-3 py-3 bg-surface-3  rounded-t-3xl md:rounded-t-2xl md:p-4 xl:pl-6">
            <div>
              <div className="text-xl md:text-2xl font-bold text-on-surface mb-2">2-Factor Authentication</div>
              <div className="text-xs md:text-sm text-on-surface/70">
                <p className="mb-1">2-factor authentication enhances the security of your account by requiring verification, using your phone, when signing in or withdrawing funds.</p>
              </div>
            </div>
            <div className="sm:hidden">
              <CircleIconButton iconComponent={<Close />} className="!w-10 !h-10" onClick={onClose} />
            </div>
          </div>
          <div className="max-h-[75vh] overflow-auto scrollbar-custom md:max-h-[80vh]">
            <div className="px-2 md:px-3 w-full mb-2 mt-2">
              <div className="bg-surface-2 rounded-xl p-3 xl:p-4">
                <div className="text-base md:text-xl font-bold text-on-surface mb-1.5">
                  1. Write down your one-time recovery code. Store it in a safe place.
                </div>
                <div className="pt-2 pb-1 w-full mt-3  border-t-2 border-surface-5">
                  <div className="text-3xl font-roboto tabular-nums text-on-surface">
                    11105858
                  </div>
                  <p className="text-xxs md:text-xs text-on-surface/50">
                    If you lose your phone, you will not be able to access your account or make any withdrawals without this code.</p>
                </div>
              </div>
            </div>
            <div className="px-2 md:px-3 w-full mb-3">
              <div className="bg-surface-2 rounded-xl p-3 xl:p-4">
                <div className="text-base md:text-xl font-bold text-on-surface mb-1.5">2. Connect Google Authenticator to your account.</div>
                <p className="text-xs md:text-sm text-on-surface/70 mb-1">Google Authenticator is available in the Apple App Store and Google Play Store.</p>
                <div className="pt-3 pb-1 w-full mt-3 gap-5 flex flex-col sm:flex-row md:items-center border-t-2 border-surface-5">
                  <div className="hidden shrink-0 w-40 p-2 aspect-1 rounded-xl bg-surface-5 md:block">
                    <QRCode
                      style={{ height: "100%", width: "auto" }}
                      value={authCode}
                      viewBox={`0 0 256 256`}
                    />
                  </div>
                  <div>
                    <div className="hidden text-base font-bold text-on-surface md:block">Scan the QR code</div>
                    <p className="hidden text-on-surface/70 md:block py-2">or</p>
                    <div className="text-sm font-bold md:text-base text-on-surface">Copy this code to Google Authenticator:</div>
                    <div className="flex items-center gap-x-3 w-full mt-1 md:mt-0">
                      <div className="text-sm break-words overflow-hidden text-on-surface">{authCode}</div>
                      <CircleIconButton iconComponent={<ContentCopy />} className="!w-10 !h-10 !text-primary" onClick={onClose} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-2 md:px-3 w-full mb-2 mt-2">
              <div className="bg-surface-2 rounded-xl p-3 xl:p-4">
                <div className="text-base md:text-xl font-bold text-on-surface mb-1.5">
                  3. Safe withdrawal bitcoin wallet
                  <span className="text-on-surface/70 text-sm font-normal inline-block pl-1">Optional</span>
                </div>
                <p className="text-xs md:text-sm text-on-surface/70">Enter an optional safe withdrawal bitcoin wallet address.</p>
                <div className="mt-3">
                  <div className="flex flex-col gap-y-1">
                    <TextField
                      label="Bitcoin Address"
                      value={""}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="px-2 md:px-3 w-full mb-3 mt-2">
              <div className="bg-surface-2 rounded-xl p-3 xl:p-4">
                <div className="text-base md:text-xl font-bold text-on-surface mb-1.5">4. Enter the code</div>
                <p className="text-xs md:text-sm text-on-surface/70">Enter the 6 digit code from your Google Authenticator mobile app:</p>
                <div className="mt-3">
                  <div className="flex gap-x-2">
                    <TextField value={""} inputProps={{ className: 'text-center' }} />
                    <TextField value={""} inputProps={{ className: 'text-center' }} />
                    <TextField value={""} inputProps={{ className: 'text-center' }} />
                    <TextField value={""} inputProps={{ className: 'text-center' }} />
                    <TextField value={""} inputProps={{ className: 'text-center' }} />
                    <TextField value={""} inputProps={{ className: 'text-center' }} />
                  </div>
                </div>
                <div className="mt-5 flex gap-x-2 justify-center ">
                  <RoundedButton
                    text={`Configure`}
                    className="!bg-primary !w-40"
                    textClassName="text-on-primary"
                    onClick={() => { }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CustomModal>
  );
}
