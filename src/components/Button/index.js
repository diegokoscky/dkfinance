import style from "./Button.module.scss";
import { useContext } from "react";
import { AppContext } from "../../providers/AppContext";
import ReactLoading from "react-loading";

export default function Button(props) {
    // Recebe o estado do loading do AppProvider
    const { loadingButton } = useContext(AppContext);
    const [show, setShow] = loadingButton;

    return (
        <button
            type={props.type}
            className={props.appear}
            title={props.text}
            disabled={show}
        >
            {props.text}
            {props.loading && show ? (
                <span className={style.button__loading}>
                    <ReactLoading type="bubbles" color="#fff" />
                </span>
            ) : (
                ""
            )}
        </button>
    );
}
