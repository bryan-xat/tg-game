import React from 'react';
import { motion } from 'framer-motion';
import PropTypes from "prop-types";

const ClickableShrink = ({ children, className }) => {
  const [isShrunk, setIsShrunk] = React.useState(false);

  const handleClick = () => {
    setIsShrunk(true);
    setTimeout(() => setIsShrunk(false), 200); // 200ms 后还原
  };

  return (
    <motion.div
      onClick={handleClick}
      animate={{ scale: isShrunk ? 0.9 : 1 }}
      transition={{ duration: 0.2 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

ClickableShrink.propTypes = {
  children: PropTypes.element,
  className: PropTypes.string,
};

export default ClickableShrink;
