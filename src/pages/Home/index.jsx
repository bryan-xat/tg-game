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
import PropTypes from "prop-types";
import { apiGameEnd, apiGameStart } from "@/api/game";
import { showLoading } from "@/utils";
import Decimal from "decimal.js";

const Home = ({ user }) => {
  const [withdrawOpen, setWithdrawOpen] = useState(false);

  const startGame = async () => {
    if (user?.gameTimesBalance <= 0) return;
    const loading = showLoading();
    try {
      await apiGameStart({
        tg_id: user?.tg_id,
        startAt: Date.now(),
      });
      // eslint-disable-next-line no-undef
      gtag("event", "start_game", {
        event_name: "start_game",
      });
      window.location.href = playUrl;
    } finally {
      loading.close();
    }
  };

  const endGame = async () => {
    const loading = showLoading();
    try {
      await apiGameEnd({
        tg_id: user?.tg_id,
        endAt: Date.now(),
        score: 0,
      });
    } finally {
      loading.close();
    }
  };

  return (
    <div className="page">
      <div className="flex justify-between h-[68px] items-center w-full px-[10px]">
        <div className="tag">
          <div className="tag-content">
            <img src={imgMoney} width={32} />
            <span className="ml-[1px] font-extrabold">
              {user?.coinBalance !== undefined
                ? user.coinBalance > 1000
                  ? new Decimal(user?.coinBalance).div(1000).toString
                  : user.coinBalance
                : "-"}
            </span>
          </div>
        </div>
        <div className="flex items-center">
          <div className="tag">
            <div className="tag-content">
              <img src={imgClock} width={32} />
              <span className="ml-[1px] font-extrabold">
                {user?.gameTimesBalance ?? "-"}
              </span>
            </div>
          </div>
          <div className="tag ml-[8px]">
            <div className="tag-content">
              <img src={imgMasonry} width={32} />
              <span className="ml-[1px] font-extrabold">
                {user?.diamondBalance ?? "-"}
              </span>
            </div>
          </div>
        </div>
      </div>
      <img src={imgTitle} width={336} className="mt-[30px]" />
      <div className="flex-1 flex flex-col justify-end pb-[18vw]">
        <ClickableShrink>
          <div className="mt-[60px] relative" onClick={startGame}>
            <img src={imgBtnPlay} width={278} />
            <img
              src={imgBtnPlayText}
              className="absolute left-0 right-0 top-[18px] m-auto z-10"
              width={135}
            />
          </div>
        </ClickableShrink>
        <ClickableShrink>
          <div
            className="btn btn-withdraw mt-[10px] btn-big"
            onClick={() => setWithdrawOpen(true)}
          >
            <img src={imgWithdraw} width={36} />
            <span className="text-[18px] font-bold ml-[8px] text-main">
              Withdraw
            </span>
          </div>
        </ClickableShrink>
      </div>
      <WithdrawListPopup
        open={withdrawOpen}
        onClose={() => setWithdrawOpen(false)}
        user={user}
      />
    </div>
  );
};

Home.propTypes = {
  user: PropTypes.object,
};

export default Home;
