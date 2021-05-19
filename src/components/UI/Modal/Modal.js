import React from "react";
import "./Modal.css";
import Wrapper from "../../../hoc/Wrapper";
import Backdrop from "../Backdrop/Backdrop";

const Modal = (props) => {
  return (
    // props.show && <div className="modal">{props.children}</div>
    <Wrapper>
      <div
        className="modal"
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.show ? "1" : "0",
        }}
      >
        {props.children}
      </div>
      <Backdrop show={props.show} click={props.modalClose} />
    </Wrapper>
  );
};

export default Modal;
