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
  JSON.parse(window.Telegram?.WebApp?.initDataUnsafe?.user ?? JSON.stringify({
    id: 5836525881,
    first_name: "Bryan",
    last_name: "Cong",
    username: "guanCong420",
    language_code: "zh-hans",
    allows_write_to_pm: true,
  }));
