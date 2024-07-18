import PropTypes from "prop-types";
import imgSats from "@/assets/img-sats.png";
import iconArrowRight from "@/assets/icon-arrow-right.svg";
import imgMasonry from "@/assets/img-masonry.png";
import imgMoney from "@/assets/img-money.png";
import Popup from "@/components/Popup";
import "./index.css";
import WithdrawPopup from "./WithdrawPopup";
import WithdrawRecordPopup from "./WithdrawRecordPopup";
import { useState } from "react";

function WithdrawListPopup({ open, onClose }) {
  const [withdrawOpen, setWithdrawOpen] = useState(false);
  const [recordOpen, setRecordOpen] = useState(false);

  return (
    <>
      <Popup open={open} onClose={onClose} title="Withdraw">
        <div className="sats">
          <img src={imgSats} width={40} />
          <span className="text-[22px] font-bold ml-[4px]">10,000,000,000</span>
          <span className="text-[12px] text-disable ml-[2px]">Sats</span>
        </div>
        <div className="flex justify-between leading-[22px] w-full mt-[20px]">
          <span className=" font-bold ">Select Withdraw Amount</span>
          <div className="flex items-center" onClick={() => setRecordOpen(true)}>
            <span>Record</span>
            <img
              src={iconArrowRight}
              width={16}
              height={16}
              className="ml-[3px]"
            />
          </div>
        </div>
        <div className="withdraw-item">
          <img src={imgMoney} width={32} />
          <div className="flex-1 ml-[4px]">
            <div className="font-bold">240,000,000 Sats</div>
            <div className="text-disable text-[12px]">1/1 times</div>
          </div>
          <div className="withdraw-item-btn" onClick={() => setWithdrawOpen(true)}>
            <div className="flex items-center justify-center">
              <img src={imgMasonry} width={20} />
              <span className="text-[14px] font-bold leading-[22px]">100</span>
            </div>
            <div className="text-center text-[12px]">Withdraw</div>
          </div>
        </div>
      </Popup>
      <WithdrawPopup open={withdrawOpen} onClose={() => setWithdrawOpen(false)}/>
      <WithdrawRecordPopup open={recordOpen} onClose={() => setRecordOpen(false)}/>
    </>
  );
}

WithdrawListPopup.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
};

export default WithdrawListPopup;
