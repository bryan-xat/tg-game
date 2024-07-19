import imgFriends from "@/assets/img-friends.png";
import imgCopy from "@/assets/icon-copy.svg";
import "./Frinds.css";
import ClickableShrink from "@/components/ClickableShrink";

const Friends = () => {
  return (
    <div className="page bg-main px-[16px]">
      <img src={imgFriends} width={148} className="mt-[30px]" />
      <div className="text-[16px] leading-[24px] font-bold">
        Invite friend to earn rewards
      </div>
      <div className="friends-content">
        <div className="mb-[14px]">
          <div className="font-medium flex items-center">
            <div className="badge"></div>
            <span className="ml-[4px] font-bold">Invite a friend</span>
          </div>
          <div className="text-disable text-[12px]">
            +2,000 Sats and one chance to play
          </div>
        </div>
        <div>
          <div className="font-medium flex items-center">
            <div className="badge"></div>
            <span className="ml-[4px] font-bold">Invite a friend</span>
          </div>
          <div className="text-disable text-[12px]">
            +2,000 Sats and one chance to play
          </div>
        </div>
      </div>
      <div className="flex items-center mt-[30px]">
        <ClickableShrink className="btn w-[267px]">
          Invite a friend
        </ClickableShrink>
        <ClickableShrink className="icon-btn ml-[12px]">
          <img src={imgCopy} width={24} />
        </ClickableShrink>
      </div>
    </div>
  );
};

export default Friends;
