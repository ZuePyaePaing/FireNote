import React from "react";
const Navbar = ({ getNotes }) => {
  return (
    <div className=" constianer">
      <div className=" w-full flex-between">
        <h2 className="title">Fire Note</h2>
        <button className="submit-btn" onClick={getNotes}>
          Show Note
        </button>
      </div>
    </div>
  );
};

export default Navbar;
