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
import ClickableShrink from "@/components/ClickableShrink";
import { coinType, withdraws } from '@/config'
import { firstUpperCase, formatNumberWithCommas } from "@/utils";

function WithdrawListPopup({ open, onClose, user }) {
  const [recordOpen, setRecordOpen] = useState(false);
  const [selected, setSelected] = useState(null)

  return (
    <>
      <Popup open={open} onClose={onClose} title="Withdraw">
        <div className="sats">
          <img src={imgSats} width={40} />
          <span className="text-[22px] font-bold ml-[4px]">
            {user?.coinBalance}
          </span>
          <span className="text-[12px] text-disable ml-[2px]">{firstUpperCase(coinType)}</span>
        </div>
        <div className="flex justify-between leading-[22px] w-full mt-[20px] mb-[16px]">
          <span className=" font-bold ">Select Withdraw Amount</span>
          <div
            className="flex items-center"
            onClick={() => setRecordOpen(true)}
          >
            <span>Record</span>
            <img
              src={iconArrowRight}
              width={16}
              height={16}
              className="ml-[3px]"
            />
          </div>
        </div>
        <div className="flex-1 hide-scrollbar w-full">
          {withdraws.map((item, index) => (
            <div className="withdraw-item" key={index}>
              <img src={imgMoney} width={32} />
              <div className="flex-1 ml-[4px]">
                <div className="font-bold">{formatNumberWithCommas(item.amount)} {firstUpperCase(coinType)}</div>
                <div className="text-disable text-[12px]">{item.times} times</div>
              </div>
              <ClickableShrink>
                <div
                  className="withdraw-item-btn"
                  onClick={() => setSelected(item)}
                >
                  <div className="flex items-center justify-center">
                    <img src={imgMasonry} width={20} />
                    <span className="text-[14px] font-bold leading-[22px]">
                      {item.masonry}
                    </span>
                  </div>
                  <div className="text-center text-[12px]">Withdraw</div>
                </div>
              </ClickableShrink>
            </div>
          ))}
        </div>
      </Popup>
      <WithdrawPopup
        open={selected !== null}
        onClose={() => setSelected(null)}
        selected={selected}
        user={user}
      />
      <WithdrawRecordPopup
        open={recordOpen}
        onClose={() => setRecordOpen(false)}
        user={user}
      />
    </>
  );
}

WithdrawListPopup.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  user: PropTypes.object,
};

export default WithdrawListPopup;
