import CustomModal from "../common/modal/CustomModal";
import RoundedButton from "src/components/common/button/RoundedButton";
import QRCode from "react-qr-code";

import CircleIconButton from "../common/button/CircleIconButton";
import { Close, InfoOutlined, KeyboardArrowLeft, Search } from "@mui/icons-material";
import { useEffect, useState } from "react";
import CheckableButton from "../common/button/CheckableButton";
import { ClickAwayListener, FormControl, InputLabel, MenuItem, Select, TextField, Tooltip } from "@mui/material";
import { useCopyToClipboard, useMediaQuery } from "usehooks-ts";
import RoundedInput from "../common/input/RoundedInput";
import { coins, networks } from "src/utils/constants";
import QRCodeDefaultImage from "../../assets/imgs/deposit/qrcode.svg"
import { apiCall } from "src/utils";
import { BACKEND_URL } from "src/utils/config";
import { useAuth } from "../../../src/context/authContext/index";
import { toast } from "react-toastify";

// Define the Network type
interface Network {
  chain_id: number;
  name: string;
  currency: string;
  base: string;
}

export default function DepositDialog({
  open,
  onClose
}: {
  open: boolean;
  onClose: any;
}) {

  const { user } = useAuth();

  const isMobile = useMediaQuery('(max-width: 480px)')

  const [selectedCoin, setSelectedCoin] = useState<any>('');
  const [coinNetworks, setCoinNetworks] = useState<Network[]>([]);
  const [selectedNetwork, setSelectedNetwork] = useState(0);
  const [isShowMore, setIsShowMore] = useState(false);

  const [searchText, setSearchText] = useState("");

  const [walletAddress, setWalletAddress] = useState("");
  const [copiedText, copy] = useCopyToClipboard()

  const [tooltipShow, setTooltipShow] = useState(false);
  const [errorMessage, setErrorMesage] = useState("");

  const handleTooltipClose = () => {
    setTooltipShow(false);
  };

  const handleTooltipOpen = () => {
    copy(walletAddress)
      .then(() => {
        setTooltipShow(true);
      })
      .catch(error => {
        console.error('Failed to copy!', error)
      })
  };

  const getDisplayCoins = () => {
    let temp = coins.slice(0, isMobile ? 1 : 3);
    let extra = null;
    for (const coin of coins.slice(isMobile ? 1 : 3)) {
      if (coin.name == selectedCoin) {
        extra = coin;
        break;
      }
    }
    if (extra) {
      temp.push(extra);
    } else {
      temp.push(coins[(isMobile ? 1 : 3)]);
    }
    return temp;
  }
  const [showNetworkDropdown, setShowNetworkDropdown] = useState(false);

  const handleCoinSelect = (item: {
    name: string;
    logo: string;
    networks: number[];
  }) => {
    let availableNetworks = networks.filter(network => item.networks.includes(network.chain_id));

    setCoinNetworks(availableNetworks);
    setSelectedCoin(item.name);
    if (availableNetworks.length === 1) setSelectedNetwork(availableNetworks[0].chain_id);
    setIsShowMore(false);
  }

  const handleNetworkSelect = (chain_id: any) => {
    let network = networks.filter(item => item.chain_id == Number(chain_id))[0];
    setSelectedNetwork(network.chain_id)
  }

  const getWalletAddress = async (user_id: string, blockchain: string) => {
    try {
      console.log(user_id, blockchain)
      let data = await apiCall(BACKEND_URL + "/deposit/get-wallet", "POST", { user_id, base_chain: blockchain })
      if (data.status) {
        setWalletAddress(data.walletAddress);
        setErrorMesage("");
      } else {
        setWalletAddress("");
        setErrorMesage(data.message);
      }

    } catch (error: any) {
      console.log(error.message)
      setWalletAddress("");
      setErrorMesage(error.message)
    }

  }

  useEffect(() => {
    if (selectedNetwork != 0) {
      let network = networks.filter(item => item.chain_id == Number(selectedNetwork))[0];
      // Get wallet address
      console.log(user)
      if (user?.user_id) {
        getWalletAddress(user.user_id, network.base)
      }

    }
  }, [selectedNetwork])


  return (
    <CustomModal onClose={onClose} open={open}>
      <div className="mx-auto flex-grow w-full sm:max-w-4xl lg:max-w-3xl xl:max-w-2xl">
        {isShowMore ?
          <div className="flex flex-col h-full relative">
            <div className="flex flex-col sticky top-0 left-0 z-20 rounded-lg sm:rounded-none p-5 bg-surface-1">
              <div className="flex justify-between items-center h-10 sm:gap-x-0 gap-x-3">
                <div className="flex items-center justify-between flex-1">
                  <div className="flex items-center h-full gap-x-3">
                    <CircleIconButton iconComponent={<KeyboardArrowLeft />} className="!w-10 !h-10" onClick={() => setIsShowMore(false)} />
                    <span className="font-inter text-2xl leading-[120%] font-bold">Search coins</span>
                  </div>
                </div>
                <div className="sm:hidden">
                  <CircleIconButton iconComponent={<Close />} className="!w-10 !h-10" onClick={onClose} />
                </div>
              </div>
              <div className="mt-6">
                <div className="flex flex-col gap-y-1">
                  <RoundedInput
                    iconComponent={<Search className="!text-3xl" />}
                    placeholder={"Search for a coin or local currency ..."}
                    value={searchText}
                    onChange={(value: any) => setSearchText(value)}
                    className={"!w-full"}
                    wrapperClassName={"bg-background"}
                  />
                </div>
              </div>
            </div>
            <div className="justify-between transition-all flex-1 sm:flex-auto duration-200 ease-out flex flex-col opacity-100 overflow-y-hidden sm:h-[55vh] h-full">
              <div className="grid gap-4 w-full p-5 overflow-y-scroll items-start scrollbar-custom auto-rows-min grid-cols-3 sm:grid-cols-4">
                {coins.filter(item => item.name.toLowerCase().includes(searchText.toLowerCase())).map((item, index) => (
                  <div key={index}>
                    <CheckableButton
                      icon={item.logo}
                      text={item.name}
                      className={"w-full"}
                      onClick={() => { handleCoinSelect(item) }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          :
          <div className="flex flex-col w-full h-full relative max-w-full">
            <div className="flex flex-col sticky top-0 left-0 z-20 rounded-lg sm:rounded-none p-5 bg-surface-1">
              <div className="flex justify-between items-center h-10 sm:gap-x-0 gap-x-3">
                <span className="font-inter text-2xl leading-[120%] font-bold">Deposit Funds</span>
                <div className="sm:hidden">
                  <CircleIconButton iconComponent={<Close />} className="!w-10 !h-10" onClick={onClose} />
                </div>
              </div>
              <div className="flex overflow-x-scroll justify-between scrollbar-hide pt-6 gap-x-2">
                <div className="flex gap-x-2">
                  {getDisplayCoins().map((item, index) => (
                    <div key={index}>
                      <CheckableButton
                        icon={item.logo}
                        text={item.name}
                        checked={item.name == selectedCoin}
                        onClick={() => { handleCoinSelect(item) }}
                      />
                    </div>
                  ))}
                </div>
                <div className="relative shrink-0">
                  <CheckableButton
                    text={"More"}
                    onClick={() => setIsShowMore(true)}
                  />
                </div>
              </div>
            </div>
            <div className="justify-between transition-all flex-1 sm:flex-auto duration-200 ease-out flex flex-col opacity-100 overflow-y-hidden sm:h-[55vh] w-full text-on-surface relative h-full sm:h-auto sm:overflow-y-hidden">
              <div className="flex-col items-center transition-all duration-200 p-5 bg-background opacity-100">
                <div className="w-full flex flex-col gap-y-8">
                  <div className="flex flex-col gap-y-1">
                    <FormControl fullWidth>
                      <InputLabel>Network</InputLabel>
                      <Select
                        placeholder="Please select"
                        value={selectedNetwork}
                        label="Network"
                        onChange={(event) => { handleNetworkSelect(event?.target.value) }}
                        displayEmpty
                      >
                        {coinNetworks.map((item) => (
                          <MenuItem key={item.chain_id} value={item.chain_id}>
                            {item.name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </div>

                  <div className="h-48 w-full relative">
                    <div className="w-full h-full flex items-center justify-center">
                      {walletAddress ? (
                        <QRCode
                          style={{ height: "100%", width: "auto" }}
                          value={walletAddress}
                          viewBox={`0 0 256 256`}
                        />
                      ) : (
                        <img src={QRCodeDefaultImage} alt="QRCODE" style={{ height: "100%", width: "auto" }} />
                      )}
                      {errorMessage && <div className="absolute text-red-500 bg-white p-2 rounded">{errorMessage}</div>}
                    </div>
                  </div>

                  <div className="relative flex flex-col gap-y-2 transition-[transform,opacity] ease-out duration-300 translate-y-0 opacity-100">
                    <TextField
                      label="Deposit Address"
                      value={walletAddress}
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                    <ClickAwayListener onClickAway={handleTooltipClose}>
                      <Tooltip
                        title="Copied"
                        onClose={handleTooltipClose}
                        open={tooltipShow}
                        placement="top"
                        arrow
                      >
                        <RoundedButton
                          text={'Copy'}
                          textClassName="text-on-tertiary !text-xl font-bold"
                          className="!w-fit !h-10 !bg-surface-2 !py-3 !absolute right-2 top-2"
                          onClick={handleTooltipOpen}
                        />
                      </Tooltip>
                    </ClickAwayListener>
                  </div>
                </div>
              </div>
              <div className="fixed z-wpReminder animate-[slideUp_500ms] transition-all duration-300 ease-linear md:animate-none md:transition-none md:bottom-0 md:z-auto md:static bottom-0 w-screen md:w-auto">
                <div className="w-full flex-grow bg-surface-1 rounded-t-4xl">
                  <div className="p-5 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <InfoOutlined className="!text-3xl text-on-surface-1" />
                      <div className="flex flex-col">
                        <span className="font-inter text-xs leading-[140%] font-Midnight uppercase text-on-surface-1">Welcome Package</span>
                        <span className="font-inter text-xs leading-[140%] text-on-surface-3">Deposit any amount to activate your Welcome Package.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
      </div>
    </CustomModal>
  );
}
