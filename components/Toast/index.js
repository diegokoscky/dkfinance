import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Toast from "react-bootstrap/Toast";

const ToastComponent = ({ msg, handleShow, bgColor }) => {
    return (
        <Toast onClose={handleShow} className={`${bgColor}`}>
            <Toast.Header className={`${bgColor}`}>
                <strong className="mr-auto">{msg.title}</strong>
            </Toast.Header>
            <Toast.Body>{msg.msg}</Toast.Body>
        </Toast>
    );
};

export default ToastComponent;
