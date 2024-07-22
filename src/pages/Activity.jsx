import imgBox from "@/assets/img-box.png";
import imgListMoney from "@/assets/img-list-money.png";
import ClickableShrink from "@/components/ClickableShrink";
import "./Activity.css";
import { useEffect, useState } from "react";
import { apiCompleteTasks, apiGetTasks } from "@/api/users";
import PropTypes from "prop-types";
import { showLoading } from "@/utils";
import { SpinLoading } from "antd-mobile";

const Activity = ({ user }) => {
  const [tasts, setTasts] = useState();

  const getTasts = async () => {
    const res = await apiGetTasks(user.tg_id);
    setTasts(res.tasks);
  };

  useEffect(() => {
    getTasts();
  }, []);

  return (
    <div className="page bg-main">
      <div className="box">
        <img src={imgBox} width={120} height={120} />
        <div className="font-bold">Complete tasks, earn rewards</div>
      </div>
      <div className="px-[15px] w-full">
        {tasts?.map((item) => {
          const isNoReceive = item.status === 1;
          return (
            <div key={item.id} className="activity-item">
              <img
                src={imgListMoney}
                width={52}
                className={isNoReceive ? "" : "disable"}
              />
              <div className="flex-1 flex flex-col justify-center pl-[12px]">
                <div className="leading-[16px]">{item.description}</div>
                <div className="progress relative">
                  <div
                    className={`content ${isNoReceive ? "w-0" : "w-full"}`}
                  ></div>
                  <div className="progress-text">
                    <span className={isNoReceive ? "text-least" : ""}>
                      {isNoReceive ? "0" : "1"}
                    </span>
                    /1
                  </div>
                </div>
              </div>
              <ClickableShrink>
                <div
                  className={`btn-small ml-[24px] ${
                    isNoReceive ? "" : "disable"
                  }`}
                  onClick={async () => {
                    if (isNoReceive) {
                      const loading = showLoading();
                      try {
                        await apiCompleteTasks(user.tg_id, item.taskId);
                        await getTasts();
                      } finally {
                        loading.close();
                      }
                    }
                    window.location.href = item.url;
                  }}
                >
                  Receive
                </div>
              </ClickableShrink>
            </div>
          );
        }) ?? <SpinLoading className="mx-auto mt-[30px]" />}
      </div>
    </div>
  );
};

Activity.propTypes = {
  user: PropTypes.object,
};

export default Activity;
