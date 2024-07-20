import { useEffect, useState } from "react";
import { TabBar, Toast } from "antd-mobile";
import iconActivityActive from "@/assets/icon-activity-active.svg";
import iconActivity from "@/assets/icon-activity.svg";
import iconFriendsActive from "@/assets/icon-friends-active.svg";
import iconFriends from "@/assets/icon-friends.svg";
import iconGameActive from "@/assets/icon-game-active.svg";
import iconGame from "@/assets/icon-game.svg";
import Home from "@/pages/Home";
import Activity from "@/pages/Activity";
import Friends from "@/pages/Friends";
import { apiGetUser, apiRegisterUser } from "@/api/users";
import "./App.css";
import { getTgUser, showLoading } from "./utils";

function App() {
  const [user, setUser] = useState();

  const [activeKey, setActiveKey] = useState("Game");

  const updateUser = async () => {
    const loading = showLoading();
    const tgUser = getTgUser();
    try {
      await apiRegisterUser({
        tg_id: tgUser.id,
        username: tgUser.username,
        firstName: tgUser.first_name,
        lastName: tgUser.last_name,
        languageCode: tgUser.language_code,
        inviteCode: "",
      });
    } finally {
      try {
        const res = await apiGetUser(tgUser.id);
        setUser(res.userInfo);
      } finally {
        loading.close();
      }
    }
  };

  const onReload = async () => {
    const res = await apiGetUser(user.tg_id);
    setUser(res.userInfo);
  };

  useEffect(() => {
    updateUser();
  }, []);

  const tabs = [
    {
      key: "Game",
      icon: (active) =>
        active ? (
          <img src={iconGameActive} width={30} />
        ) : (
          <img src={iconGame} width={30} />
        ),
      page: <Home user={user} onReload={onReload} />,
    },
    {
      key: "Activity",
      icon: (active) =>
        active ? (
          <img src={iconActivityActive} width={30} />
        ) : (
          <img src={iconActivity} width={30} />
        ),
      page: <Activity />,
    },
    {
      key: "Friends",
      icon: (active) =>
        active ? (
          <img src={iconFriendsActive} width={30} />
        ) : (
          <img src={iconFriends} width={30} />
        ),
      page: <Friends />,
    },
  ];

  return (
    <div className="app">
      {tabs.find((item) => item.key === activeKey).page}
      <TabBar
        activeKey={activeKey}
        onChange={setActiveKey}
        safeArea
        className="bg-main"
      >
        {tabs.map((item) => (
          <TabBar.Item key={item.key} icon={item.icon} title={item.key} />
        ))}
      </TabBar>
    </div>
  );
}

export default App;
