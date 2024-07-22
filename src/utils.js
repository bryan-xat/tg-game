import { Toast } from "antd-mobile";
import { initUtils } from '@telegram-apps/sdk';

export const showLoading = () =>
  Toast.show({
    icon: "loading",
    content: "loading...",
    duration: 0,
    maskClickable: false,
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
  // window.Telegram?.WebApp?.initDataUnsafe?.user
  import.meta.env.DEV
      ? {
        id: 5836525881,
        first_name: "Bryan",
        last_name: "Cong",
        username: "guanCong420",
        language_code: "zh-hans",
        allows_write_to_pm: true,
      }
      : window.Telegram?.WebApp?.initDataUnsafe?.user;

export const copyText = (text) => {
  navigator.clipboard
    .writeText(text)
    .then(function () {
      Toast.show({
        icon: 'success',
        content: "Copy Success",
      });
    })
    .catch(function (err) {
      Toast.show({
        icon: 'fail',
        content: "Unable to copy",
      });
    });
};

export const showTgShare = (code) => {
  const utils = initUtils();
  const shareMessage = "Use my link to get 2000 $Sats";
  utils.shareURL(`https://t.me/satsbubble_bot?inviteCode=${code}`, shareMessage);
}

export const copyLink = (inviteCode) => copyText(`https://t.me/satsbubble_bot?inviteCode=${inviteCode}`)