import React, { useState } from "react";

const Form = () => {
  const [note, setNote] = useState("");

  const addNote = async (e) => {
    try {
      e.preventDefault();
      await fetch(
        "https://firenote-86834-default-rtdb.firebaseio.com/note.json",
        {
          method: "POST",
          body: JSON.stringify(note),
          headers: { "Content-Type": "application/json" },
        }
      );
      setNote("");
    } catch (error) {
      alert("Something went wrong.Try again later.");
    }
  };
  return (
    <div className=" w-xl">
      <form
        className="w-full flex-between padding-lg bg-white rounded-lg"
        onSubmit={addNote}
      >
        <input
          type="text"
          placeholder=" add note here"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          className=" padding-sm text-sm rounded-sm text-white"
        />
        <button className=" submit-btn" type="submit">
          Add Note
        </button>
      </form>
    </div>
  );
};

export default Form;
