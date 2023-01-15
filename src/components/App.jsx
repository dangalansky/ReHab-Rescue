import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import styled from "styled-components";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <Wrapper>
      <div>
        <Header />
        <CreateArea onAdd={addNote} />
        {notes.map((noteItem, index) => {
          return (
            <Note
              key={index}
              id={index}
              title={noteItem.title}
              reps={noteItem.reps}
              sets={noteItem.sets}
              tips={noteItem.tips}
              imgUrl={noteItem.imgUrl}
              onDelete={deleteNote}
            />
          );
        })}
        <Footer />
      </div>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.section`
  Footer {
    margin-bottom: 0;
  }
`;
