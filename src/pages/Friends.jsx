import imgFriends from "@/assets/img-friends.png";
import imgCopy from "@/assets/icon-copy.svg";
import "./Frinds.css";

const Friends = () => {
  return (
    <div className="page bg-main px-[16px]">
      <img src={imgFriends} width={148} className="mt-[30px]" />
      <div className="text-[16px] leading-[24px] font-semibold">
        Invite friend to earn rewards
      </div>
      <div className="friends-content">
        <div className="mb-[14px]">
          <div className="font-medium flex items-center">
            <div className="badge"></div>
            <span className="ml-[4px]">Invite a friend</span>
          </div>
          <div className="text-disable text-[12px]">
            +2,000 Sats and one chance to play
          </div>
        </div>
        <div>
          <div className="font-medium flex items-center">
            <div className="badge"></div>
            <span className="ml-[4px]">Invite a friend</span>
          </div>
          <div className="text-disable text-[12px]">
            +2,000 Sats and one chance to play
          </div>
        </div>
      </div>
      <div className="flex-1 flex items-end pb-[30vw]">
        <div className="flex items-center">
          <div className="btn w-[267px]">Invite a friend</div>
          <div className="icon-btn ml-[12px]">
            <img src={imgCopy} width={24} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Friends;
