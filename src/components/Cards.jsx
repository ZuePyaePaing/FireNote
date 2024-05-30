import React from "react";
import Card from "./Card";

const Cards = ({ notes }) => {
  return (
    <div className=" flex-center">
      {notes.map((note, index) => {
        return <Card key={index} note={note} />;
      })}
    </div>
  );
};

export default Cards;
