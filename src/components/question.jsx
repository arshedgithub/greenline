import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const display = "d-none";

const Question = ({ question }) => {
  const [show, setShow] = useState(true);

  window.addEventListener("resize", () => {
    if (window.innerWidth < 450) setShow(false);
  });

  return (
    <div className="col p-2">
      <p
        className="fw-bolder"
        onClick={() => setShow(!show)}
        style={{ cursor: "pointer" }}
      >
        {question[0]}&nbsp;&nbsp;&nbsp;
        <FontAwesomeIcon icon={show ? faChevronDown : faChevronRight} />
      </p>
      <div className={!show ? display : ""} style={{ fontSize: "2.2vh" }}>
        <p>{question[1]}</p>
        <p>{question[2]}</p>
      </div>
    </div>
  );
};

export default Question;
