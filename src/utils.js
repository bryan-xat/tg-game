import { Toast } from "antd-mobile";

export const showLoading = () =>
  Toast.show({
    icon: "loading",
    content: "loading...",
    duration: 0,
  });

export function formatNumberWithCommas(num) {
  if (typeof num !== "number") {
    return num;
  }

  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function firstUpperCase(str) {
  return str[0].toUpperCase() + str.slice(1, str.length);
}

export const getTgUser = () =>
  JSON.parse(
    import.meta.env.DEV
      ? JSON.stringify({
          id: 5836525881,
          first_name: "Bryan",
          last_name: "Cong",
          username: "guanCong420",
          language_code: "zh-hans",
          allows_write_to_pm: true,
        })
      : window.Telegram?.WebApp?.initDataUnsafe?.user
  );

export const copyText = (text) => {
  navigator.clipboard
    .writeText(text)
    .then(function () {
      Toast.success("Text copied to clipboard.");
    })
    .catch(function (err) {
      Toast.error("Unable to copy text.");
    });
};

export const showTgShare = (code) => {
  const shareMessage = "Use my link to get 2000 $Sats";
  const tg = window.Telegram?.WebApp;
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
  tg?.onEvent("popupClosed", (button_id) => {
    if (button_id === "send") {
      // 执行分享操作
      tg.sendData(
        JSON.stringify({
          action: "share",
          url: `${window.location.origin}?inviteCode=${code}`,
          text: shareMessage,
        })
      );
    }
  });
}

export const copyLink = (inviteCode) => copyText(`${window.location.origin}?inviteCode=${inviteCode}`)