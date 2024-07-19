import imgBox from "@/assets/img-box.png";
import imgListMoney from "@/assets/img-list-money.png";
import ClickableShrink from "@/components/ClickableShrink";
import "./Activity.css";
import { firstUpperCase } from "@/utils";
import { coinType } from "@/config";

const Activity = () => {
  return (
    <div className="page bg-main">
      <div className="box">
        <img src={imgBox} width={120} />
        <div className="font-bold">Complete tasks, earn rewards</div>
      </div>
      <div className="px-[15px] w-full">
        <div className="activity-item">
          <img src={imgListMoney} width={52} className=""/>
          <div className="flex-1 flex flex-col justify-center pl-[12px]">
            <div className="leading-[16px]">Get 100000 {firstUpperCase(coinType)} for the opening game.</div>
            <div className="progress">
              <div className="content w-[100px]"></div>
            </div>
          </div>
          <ClickableShrink>
            <div className="btn-small ml-[24px]">Receive</div>
          </ClickableShrink>
        </div>
        <div className="activity-item">
          <img src={imgListMoney} width={52} style={{
              filter: 'grayscale(100%)',
            }}/>
          <div className="flex-1 flex flex-col justify-center pl-[12px]">
            <div className="leading-[16px]">Get 100000 {firstUpperCase(coinType)} for the opening game.</div>
            <div className="progress">
              <div className="content w-[100px]"></div>
            </div>
          </div>
          <ClickableShrink>
            <div className="btn-small ml-[24px] text-disable" style={{
              filter: 'grayscale(100%)',
            }}>Receive</div>
          </ClickableShrink>
        </div>
      </div>
    </div>
  );
};

export default Activity;
