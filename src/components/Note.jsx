import React from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import styled from "styled-components";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <Wrapper>
      <div className="note">
        <div className="checkbox">
          <label for="finished">completed? </label>
          <input type="checkbox" name="finished" />
        </div>
        <h1>{props.title}</h1>
        <img
          src={props.imgUrl}
          className="image"
          alt="reference for exercise"
        />
        <p>
          <span className="bold">Reps: </span>
          {props.reps}
        </p>
        <p>
          <span className="bold">Sets: </span>
          {props.sets}
        </p>
        <p>
          <span className="bold">Notes/Tips: </span>
          {props.tips}
        </p>
        <button onClick={handleClick}>
          <DeleteForeverIcon />
        </button>
      </div>
    </Wrapper>
  );
}

export default Note;

const Wrapper = styled.section`
  .checkbox {
    /* width: 100%; */
    margin-left: 50%;
    color: rgb(138, 137, 137);
  }

  .image {
    margin-left: 9.5px;
    width: 200px;
  }
`;
