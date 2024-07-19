import imgTitle from "@/assets/img-title.png";
import imgMoney from "@/assets/img-money.png";
import imgClock from "@/assets/img-clock.png";
import imgMasonry from "@/assets/img-masonry.png";
import imgBtnPlay from "@/assets/img-btn-play.png";
import imgBtnPlayText from "@/assets/img-btn-play-text.png";
import imgWithdraw from "@/assets/img-withdraw.png";
import { playUrl } from "@/config";
import WithdrawListPopup from "./components/WithdrawListPopup";
import { useState } from "react";
import ClickableShrink from "@/components/ClickableShrink";

const Home = () => {
  const [withdrawOpen, setWithdrawOpen] = useState(false);

  return (
    <div className="page">
      <div className="flex justify-between h-[68px] items-center w-full px-[10px]">
        <div className="tag">
          <div className="tag-content">
            <img src={imgMoney} width={32} />
            <span className="ml-[1px]">100000k</span>
          </div>
        </div>
        <div className="flex items-center">
          <div className="tag">
            <div className="tag-content">
              <img src={imgClock} width={32} />
              <span className="ml-[1px]">700</span>
            </div>
          </div>
          <div className="tag ml-[8px]">
            <div className="tag-content">
              <img src={imgMasonry} width={32} />
              <span className="ml-[1px]">300</span>
            </div>
          </div>
        </div>
      </div>
      <img src={imgTitle} width={336} className="mt-[30px]" />
      <div className="flex-1 flex flex-col justify-end pb-[18vw]">
        <ClickableShrink>
          <a className="mt-[60px] relative" href={playUrl}>
            <img src={imgBtnPlay} width={278} />
            <img
              src={imgBtnPlayText}
              className="absolute left-0 right-0 top-[5px] m-auto"
            />
          </a>
        </ClickableShrink>
        <ClickableShrink>
          <div
            className="btn btn-withdraw mt-[10px] btn-big"
            onClick={() => setWithdrawOpen(true)}
          >
            <img src={imgWithdraw} />
            <span className="text-[18px] font-semibold ml-[8px] text-main">
              Withdraw
            </span>
          </div>
        </ClickableShrink>
      </div>
      <WithdrawListPopup
        open={withdrawOpen}
        onClose={() => setWithdrawOpen(false)}
      />
    </div>
  );
};

export default Home;
