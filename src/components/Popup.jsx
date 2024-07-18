import PropTypes from "prop-types";
import { Popup as AntdPopup } from "antd-mobile";
import './Popup.css'

function Popup({ open, onClose, title, children }) {
  return (
    <AntdPopup
      visible={open}
      bodyStyle={{
        borderTopLeftRadius: "16px",
        borderTopRightRadius: "16px",
        height: "100vh",
      }}
      onClose={onClose}
      closeOnMaskClick
      showCloseButton
    >
      <div className="page px-[15px] text-[14px] h-full">
        <div className="popup-title">{title}</div>
        {children}
      </div>
    </AntdPopup>
  );
}

Popup.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  children: PropTypes.element,
  title: PropTypes.string,
};

export default Popup;