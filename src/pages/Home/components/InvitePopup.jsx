import PropTypes from "prop-types";
import Popup from "@/components/Popup";
import ClickableShrink from "@/components/ClickableShrink";
import "./index.css";
import { copyLink, copyText } from "@/utils";
import { showTgShare } from "@/utils";

const InvitePopup = ({ open, onClose, user }) => {
  return (
    <Popup open={open} onClose={onClose} title="Invite a Fren" height="300px">
      <div className="invite-content font-semibold text-center text-[12px]">
        <div>+2,000 Sats and one chance to play(Invite a friend)</div>
      </div>
      <ClickableShrink
        className="mt-[10px] w-full"
        onClick={() => copyLink(user.tg_id)}
      >
        <div className="btn w-full btn-main">Copy Link</div>
      </ClickableShrink>
      <ClickableShrink className="mt-[10px] w-full">
        <div className="btn w-full" onClick={showTgShare}>
          Send
        </div>
      </ClickableShrink>
    </Popup>
  );
};

InvitePopup.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  user: PropTypes.object,
};

export default InvitePopup;
