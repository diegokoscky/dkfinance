import style from "./Modal.module.scss";
import { useContext } from "react";
import { AppContext } from "../../providers/AppContext";
import Image from "next/image";

export default function Modal(props) {
    // Recebe o estado do modal do AppProvider
    const { modal } = useContext(AppContext);
    const [show, setShow] = modal;

    const closeModal = () => {
        setShow(false);
    };

    return (
        <div className={style.modal}>
            <div className={style.modal__inner}>
                <div className={style.modal__content}>
                    <div className={style.modal__header}>
                        <h4>{props.title}</h4>
                        <button
                            type="button"
                            className={style.modal__close}
                            onClick={closeModal}
                            title="Fechar"
                        >
                            ×
                        </button>
                    </div>
                    <div className={style.modal__body}>
                        {props.image ? (
                            <Image
                                src={`/images/` + props.image}
                                alt="Imagem do modal"
                                width="auto"
                                height="auto"
                            />
                        ) : (
                            ""
                        )}

                        {props.icon ? (
                            <Image
                                src={`/icons/` + props.icon}
                                alt="Ícone do modal"
                                width="auto"
                                height="auto"
                            />
                        ) : (
                            ""
                        )}

                        {props.titleText ? <h4>{props.titleText}</h4> : ""}

                        {props.text ? <p>{props.text}</p> : ""}
                    </div>
                    <div className={style.modal__footer}>
                        <button
                            type="button"
                            className={
                                `btn btn--secondary btn--sm ` +
                                style.modal__close
                            }
                            onClick={closeModal}
                        >
                            {props.button}
                        </button>
                    </div>
                </div>
            </div>
            <div className={style.modal__backdrop} onClick={closeModal}></div>
        </div>
    );
}
