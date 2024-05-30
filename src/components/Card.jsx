import React from "react";

const Card = ({ note }) => {
  return (
    <div className=" bg-white padding-lg rounded-sm">
      <p className=" text-white">+ {note}</p>
    </div>
  );
};

export default Card;
