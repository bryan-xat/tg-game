import { useEffect, useState } from "react";
import { TabBar } from "antd-mobile";
import iconActivityActive from "@/assets/icon-activity-active.svg";
import iconActivity from "@/assets/icon-activity.svg";
import iconFriendsActive from "@/assets/icon-friends-active.svg";
import iconFriends from "@/assets/icon-friends.svg";
import iconGameActive from "@/assets/icon-game-active.svg";
import iconGame from "@/assets/icon-game.svg";
import Home from "@/pages/Home";
import Activity from "@/pages/Activity";
import Friends from "@/pages/Friends";
import { apiRegisterUser } from "@/api/users";
import "./App.css";

function App() {
  const tabs = [
    {
      key: "Game",
      icon: (active) =>
        active ? (
          <img src={iconGameActive} width={30} />
        ) : (
          <img src={iconGame} width={30} />
        ),
      page: <Home />,
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
  const [activeKey, setActiveKey] = useState(tabs[0].key);

  const updateUser = async () => {
    await apiRegisterUser({
      tgAccount: "5836525881",
      tgName: "guanCong420",
      inviteCode: "",
    });
  };

  useEffect(() => {
    updateUser()
  }, [])

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
