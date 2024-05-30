import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Cards from "./components/Cards";
const App = () => {
  const [notes, setNotes] = useState([]);
  const getNotes = async () => {
    try {
      const response = await fetch(
        "https://firenote-86834-default-rtdb.firebaseio.com/note.json"
      );
      const data = await response.json();
      const modifiedNote = [];
      for (const key in data) {
        modifiedNote.push(data[key]);
      }
      setNotes(modifiedNote);
    } catch (error) {}
  };
  return (
    <main>
      <Navbar getNotes={getNotes} />
      <div className="flex-between constianer">
        <Form />
        <Cards notes={notes}/>
      </div>
    </main>
  );
};

export default App;
