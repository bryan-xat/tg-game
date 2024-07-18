import imgBox from "@/assets/img-box.png";
import imgListMoney from "@/assets/img-list-money.png";
import "./Activity.css";

const Activity = () => {
  return (
    <div className="page bg-main">
      <div className="box">
        <img src={imgBox} width={120} />
        <div>Complete tasks, earn rewards</div>
      </div>
      <div className="px-[15px] w-full">
        <div className="activity-item">
          <img src={imgListMoney} width={52} />
          <div className="flex-1 flex flex-col justify-center pl-[12px]">
            <div className="leading-[16px]">Get 100000 sats for the opening game.</div>
            <div className="progress">
              <div className="content w-[100px]"></div>
            </div>
          </div>
          <div className="btn-small ml-[24px]">Receive</div>
        </div>
        <div className="activity-item">
          <img src={imgListMoney} width={52} />
          <div className="flex-1 flex flex-col justify-center pl-[12px]">
            <div className="leading-[16px]">Get 100000 sats for the opening game.</div>
            <div className="progress">
              <div className="content w-[100px]"></div>
            </div>
          </div>
          <div className="btn-small ml-[24px]">Receive</div>
        </div>
      </div>
    </div>
  );
};

export default Activity;
