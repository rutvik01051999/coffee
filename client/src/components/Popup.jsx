import React from 'react';
import '../css/popup.css'; // Optional: Styling for popup

const Popup = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "popup display-block" : "popup display-none";

  return (
    <div className={showHideClassName}>
      <div className="popup-main">
        {children}
        <button onClick={handleClose}>Close</button>
      </div>
    </div>
  );
};

export default Popup;
