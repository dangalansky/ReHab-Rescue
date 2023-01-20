import React, { useState } from "react";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import Zoom from "@mui/material/Zoom";
import Fab from "@mui/material/Fab";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const [zoom, setZoom] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      reps: "",
      sets: "",
      tips: "",
      imgUrl: "",
    });
    event.preventDefault();
  }

  function handleClick() {
    setZoom(!zoom);
  }

  return (
    <div>
      <form className="create-note">
        <input
          name="title"
          onClick={handleClick}
          onChange={handleChange}
          value={note.title}
          placeholder="Add New Exercise"
          className="create-title"
        />
        {zoom ? (
          <>
            <textarea
              name="reps"
              onChange={handleChange}
              value={note.reps}
              placeholder="Number of Reps"
              rows={zoom ? "3" : "1"}
              className="create-number"
            />
            <textarea
              name="sets"
              onChange={handleChange}
              value={note.sets}
              placeholder="Number of Sets"
              rows={zoom ? "3" : "1"}
              className="create-number"
            />
            <textarea
              name="tips"
              onChange={handleChange}
              value={note.tips}
              placeholder="Notes/Tips?"
              rows={zoom ? "3" : "1"}
            />
            <textarea
              name="imgUrl"
              onChange={handleChange}
              value={note.imgUrl}
              placeholder="Reference Image URL (optional)"
              rows={zoom ? "3" : "1"}
            />
          </>
        ) : null}

        <Zoom in={zoom} timeout={1000}>
          <Fab onClick={submitNote}>
            <NoteAddIcon fontSize="medium" />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
