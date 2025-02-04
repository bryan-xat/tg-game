import imgFriends from "@/assets/img-friends.png";
import imgCopy from "@/assets/icon-copy.svg";
import "./Frinds.css";
import ClickableShrink from "@/components/ClickableShrink";
import { showTgShare, copyLink } from "@/utils";
import PropTypes from "prop-types";

const Friends = ({ user }) => {
  const onInviteFriend = () => {
    showTgShare(user.tg_id);
  };

  return (
    <div className="page bg-main px-[16px]">
      <img src={imgFriends} width={148} height={112.88} className="mt-[30px]" />
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
            earn 2000 Sats and 2 diamonds with a maximum of 20 diamonds per day
          </div>
        </div>
      </div>
      <div className="flex items-center mt-[30px]">
        <ClickableShrink>
          <div className="btn w-[267px]" onClick={onInviteFriend}>
            Invite a friend
          </div>
        </ClickableShrink>
        <ClickableShrink className="icon-btn ml-[12px]">
          <img src={imgCopy} width={24} onClick={() => copyLink(user.tg_id)} />
        </ClickableShrink>
      </div>
    </div>
  );
};

Friends.propTypes = {
  user: PropTypes.object,
};

export default Friends;
