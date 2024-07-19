import PropTypes from "prop-types";
import Popup from "@/components/Popup";
import imgMoney from "@/assets/img-money.png";
import iconArrowDown from "@/assets/icon-arrow-down.svg";
import imgMasonry from "@/assets/img-masonry.png";
import { ActionSheet, Input, Toast } from "antd-mobile";
import "./index.css";
import { useRef, useState } from "react";
import ClickableShrink from "@/components/ClickableShrink";
import { apiWithdraw } from "@/api/users";
import { formatNumberWithCommas, showLoading } from "@/utils";
import { coinType, networks } from "@/config";

function WithdrawPopup({ open, onClose, selected, user }) {
  const [networkOpen, setNetworkOpen] = useState(false);
  const [network, setNetwork] = useState(networks[0]);
  const inputRef = useRef();

  const onWithdrawPopup = async () => {
    const loading = showLoading();
    try {
      await apiWithdraw({
        tg_id: user.tg_id,
        amount: selected.amount,
        currencyType: coinType,
        walletAddress: inputRef.current.nativeElement.value,
        network,
      });
      Toast.show({
        icon: 'success',
        content: 'Withdraw submitted successfully',
      })
    } finally {
      loading.close();
    }
  };

  return (
    <>
      <Popup open={open} onClose={onClose} title="Withdraw">
        <div className="w-full mt-[36px] select-title">Select network</div>
        <div className="w-full text-[12px] leading-[18px] mt-[8px]">
          Via BEP-20,contract information:***aebb00
        </div>
        <div className="select mt-[2px]" onClick={() => setNetworkOpen(true)}>
          <div className="flex-1">{network}</div>{" "}
          <img src={iconArrowDown} width={16} />
        </div>
        <div className="w-full mt-[36px] select-title">Withdraw to address</div>
        <Input
          className="select mt-[8px]"
          placeholder="Enter address"
          ref={inputRef}
        />
        <div className="flex justify-between items-center w-full mt-[22px] leading-[22px]">
          <span className="text-[12px] text-disable">Withdrawal amount</span>
          <div className="flex items-start">
            <span className="font-bold">
              {formatNumberWithCommas(selected?.amount)}
            </span>
            <img src={imgMoney} width={20} className="ml-[4px]" />
          </div>
        </div>
        <div className="flex justify-between items-center w-full mt-[8px] leading-[22px]">
          <span className="text-[12px] text-disable">Spend dimonds</span>
          <div className="flex items-start">
            <span className="font-bold">{selected?.masonry}</span>
            <img src={imgMasonry} width={20} className="ml-[4px]" />
          </div>
        </div>
        <div className="flex-1 flex items-end w-full pb-[4vw]">
          <ClickableShrink className="w-full">
            <div className="btn w-full" onClick={onWithdrawPopup}>
              Withdraw
            </div>
          </ClickableShrink>
        </div>
      </Popup>
      <ActionSheet
        visible={networkOpen}
        actions={networks.map((item) => ({
          text: item,
          key: item,
        }))}
        onClose={() => setNetworkOpen(false)}
        onAction={(action) => {
          setNetwork(action.key);
          setNetworkOpen(false);
        }}
        cancelText="Cancel"
      />
    </>
  );
}

WithdrawPopup.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  selected: PropTypes.object,
  user: PropTypes.object,
};

export default WithdrawPopup;
