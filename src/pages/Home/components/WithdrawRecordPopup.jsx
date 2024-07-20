import PropTypes from "prop-types";
import imgEmpty from "@/assets/img-empty.png";
import Popup from "@/components/Popup";
import "./index.css";
import { useEffect, useState } from "react";
import { Skeleton, InfiniteScroll } from "antd-mobile";
import { firstUpperCase } from "@/utils";
import { coinType } from "@/config";
import { apiGetWithdrawRecords } from "@/api/users";

function WithdrawRecordPopup({ open, onClose, user }) {
  const [records, setRecords] = useState();
  const [pageData, setPageData] = useState({
    page: 0,
  });
  const skeletonLength = [1, 1, 1, 1];

  const getRecords = async () => {
    const res = await apiGetWithdrawRecords({
      tg_id: user.tg_id,
      page: pageData.page + 1,
      page_num: 10,
    });
    setRecords([...(records ?? []), ...res.records]);
    setPageData({ page: res.page, total: res.total });
  };

  useEffect(() => {
    if (open) {
      getRecords();
    }
  }, [open]);

  return (
    <Popup open={open} onClose={onClose} title="Record">
      <div className="pt-[14px]"></div>
      {records ? (
        records.length !== 0 ? (
          <>
            {records.map((item) => (
              <div className="record-item" key={item}>
                <div className="font-bold flex justify-between leading-[22px]">
                  <span>Withdraw {firstUpperCase(coinType)}</span>
                  <span>-10,000,000</span>
                </div>
                <div className="flex justify-between leading-[18px] text-[12px] mt-[2px]">
                  <span className="text-least">2004/02/12 23:26</span>
                  {item === 0 ? (
                    <span className="text-warning">Pending</span>
                  ) : (
                    <span className="text-primary">Success</span>
                  )}
                </div>
              </div>
            ))}
            <InfiniteScroll
              loadMore={getRecords}
              hasMore={pageData.total && pageData.total > records.length}
            />
          </>
        ) : (
          <>
            <img src={imgEmpty} width={180} className="mt-[65px]" />
            <span className="mt-[6px] text-secondary text-[12px]">No data</span>
          </>
        )
      ) : (
        <>
          {skeletonLength.map((_, index) => (
            <div className="record-item" key={index}>
              <div className="flex justify-between">
                <Skeleton animated className="skeleton" />
                <Skeleton animated className="skeleton" />
              </div>
              <div className="flex justify-between mt-[10px]">
                <Skeleton animated className="skeleton" />
                <Skeleton animated className="skeleton" />
              </div>
            </div>
          ))}
        </>
      )}
    </Popup>
  );
}

WithdrawRecordPopup.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  user: PropTypes.object,
};

export default WithdrawRecordPopup;
