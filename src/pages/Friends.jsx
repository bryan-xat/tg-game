import imgFriends from "@/assets/img-friends.png";
import imgCopy from "@/assets/icon-copy.svg";
import "./Frinds.css";
import ClickableShrink from "@/components/ClickableShrink";
import { useEffect } from "react";

const Friends = () => {
  const tg = window.Telegram?.WebApp;
  const shareMessage = "Use my link to get 2000 $Sats";

  const onInviteFriend = () => {

    tg?.showPopup({
      title: "Share with",
      message: shareMessage,
      buttons: [
        {
          id: "send",
          type: "default",
          text: "Send",
          callback_data: "send",
        },
        {
          id: "cancel",
          type: "destructive",
          text: "Cancel",
          callback_data: "cancel",
        },
      ],
    });
  };

  useEffect(() => {
    // 处理弹窗按钮点击事件
    tg?.onEvent("popupClosed", (button_id) => {
      if (button_id === "send") {
        // 执行分享操作
        tg.sendData(
          JSON.stringify({
            action: "share",
            url: window.location.origin,
            text: shareMessage,
          })
        );
      }
    });
  }, []);

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
        <ClickableShrink>
          <div className="btn w-[267px]" onClick={onInviteFriend}>Invite a friend</div>
        </ClickableShrink>
        <ClickableShrink className="icon-btn ml-[12px]">
          <img src={imgCopy} width={24} />
        </ClickableShrink>
      </div>
    </div>
  );
};

export default Friends;
