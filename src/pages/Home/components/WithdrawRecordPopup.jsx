import PropTypes from "prop-types";
import Popup from "@/components/Popup";
import imgMoney from "@/assets/img-money.png";
import iconArrowDown from "@/assets/icon-arrow-down.svg";
import imgMasonry from "@/assets/img-masonry.png";
import { ActionSheet, Input } from "antd-mobile";
import "./index.css";
import { useState } from "react";

function WithdrawRecordPopup({ open, onClose }) {
  const [networkOpen, setNetworkOpen] = useState(false);
  const [network, setNetwork] = useState();

  return (
    <>
      <Popup open={open} onClose={onClose} title="Record">
        
      </Popup>
    </>
  );
}

WithdrawRecordPopup.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
};

export default WithdrawRecordPopup;
