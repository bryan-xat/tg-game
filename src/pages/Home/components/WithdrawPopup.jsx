import PropTypes from "prop-types";
import Popup from "@/components/Popup";
import imgMoney from "@/assets/img-money.png";
import iconArrowDown from "@/assets/icon-arrow-down.svg";
import imgMasonry from "@/assets/img-masonry.png";
import { ActionSheet, Input } from "antd-mobile";
import "./index.css";
import { useState } from "react";
import ClickableShrink from "@/components/ClickableShrink";

function WithdrawPopup({ open, onClose }) {
  const [networkOpen, setNetworkOpen] = useState(false);
  const [network, setNetwork] = useState();

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
        <Input className="select mt-[8px]" placeholder="Enter address" />
        <div className="flex justify-between items-center w-full mt-[22px] leading-[22px]">
          <span className="text-[12px] text-disable">Withdrawal amount</span>
          <div className="flex items-start">
            <span className="font-bold">100,000,000,000</span>
            <img src={imgMoney} width={20} className="ml-[4px]" />
          </div>
        </div>
        <div className="flex justify-between items-center w-full mt-[8px] leading-[22px]">
          <span className="text-[12px] text-disable">Spend dimonds</span>
          <div className="flex items-start">
            <span className="font-bold">200</span>
            <img src={imgMasonry} width={20} className="ml-[4px]" />
          </div>
        </div>
        <div className="flex-1 flex items-end w-full pb-[4vw]">
          <ClickableShrink className="w-full">
            <div className="btn w-full">Withdraw</div>
          </ClickableShrink>
        </div>
      </Popup>
      <ActionSheet
        visible={networkOpen}
        actions={[
          { text: "ERC20", key: "ERC20" },
          { text: "Tron", key: "Tron" },
        ]}
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
};

export default WithdrawPopup;
