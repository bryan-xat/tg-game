import PropTypes from "prop-types";
import imgSats from "@/assets/img-sats.png";
import iconArrowRight from "@/assets/icon-arrow-right.svg";
import imgMasonry from "@/assets/img-masonry.png";
import imgMoney from "@/assets/img-money.png";
import Popup from "@/components/Popup";
import "./index.css";
import WithdrawPopup from "./WithdrawPopup";
import WithdrawRecordPopup from "./WithdrawRecordPopup";
import { useEffect, useState } from "react";
import ClickableShrink from "@/components/ClickableShrink";
import { coinType } from '@/config'
import { firstUpperCase, formatNumberWithCommas } from "@/utils";
import { apiGetWithdrawTimes } from "@/api/users";
import { SpinLoading } from 'antd-mobile'

function WithdrawListPopup({ open, onClose, user, onReload }) {
  const [recordOpen, setRecordOpen] = useState(false);
  const [selected, setSelected] = useState(null)
  const [withdraws, setWithdraws] = useState()

  const getwithdraws = async () => {
    const res = apiGetWithdrawTimes(user.tg_id);
    setWithdraws(res.times);
  }

  useEffect(() => {
    if (open) {
      getwithdraws();
    }
  }, [open])

  const closeWithdraw = () => setSelected(null);

  const onWithdraw = () => {
    closeWithdraw();
    setTimeout(() => setRecordOpen(true), 300);
    onReload();
  }

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
          {withdraws ? withdraws.map((item, index) => (
            <div className="withdraw-item" key={index}>
              <img src={imgMoney} width={32} />
              <div className="flex-1 ml-[4px]">
                <div className="font-bold">{formatNumberWithCommas(item.stats)} {firstUpperCase(coinType)}</div>
                <div className="text-disable text-[12px]">{item.times}/{item.max_times} times</div>
              </div>
              <ClickableShrink>
                <div
                  className="withdraw-item-btn"
                  onClick={() => setSelected(item)}
                >
                  <div className="flex items-center justify-center">
                    <img src={imgMasonry} width={20} />
                    <span className="text-[14px] font-bold leading-[22px]">
                      {item.diamond}
                    </span>
                  </div>
                  <div className="text-center text-[12px]">Withdraw</div>
                </div>
              </ClickableShrink>
            </div>
          )) : <SpinLoading className="mx-auto mt-[30px]"/>}
        </div>
      </Popup>
      <WithdrawPopup
        open={selected !== null}
        onClose={closeWithdraw}
        selected={selected}
        user={user}
        onWithdraw={onWithdraw}
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
  onReload: PropTypes.func,
};

export default WithdrawListPopup;
