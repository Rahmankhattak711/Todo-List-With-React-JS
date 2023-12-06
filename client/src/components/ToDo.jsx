import axios from "axios";
import React from "react";
import { baseURL } from "../utils/constant";

const ToDo = ({ text, id, setUpdateUI, setShowPopup, setPopupContent }) => {
  const deleteTodo = () => {
    axios.delete(`${baseURL}/delete/${id}`).then((res) => {
      console.log(res.data);
      setUpdateUI((prevState) => !prevState);
    });
  };

  return (
    <div className="toDo">
      {text}
      <div className="icons">
        <div onClick={deleteTodo} className="cursor-pointer">X</div>
      </div>
    </div>
  );
};

export default ToDo;
