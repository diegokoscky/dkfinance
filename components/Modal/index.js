import style from "./Modal.module.scss";
import { useState } from "react";

export default function Modal(props) {
    const [show, setShow] = useState(true);

    const toggleModal = () => {
        setShow(!show);
    };

    return (
        <>
            {show ? (
                <div className={style.modal}>
                    <div className={style.modal__inner}>
                        <div className={style.modal__content}>
                            <div className={style.modal__header}>
                                <h4>Título do modal</h4>
                                <button
                                    type="button"
                                    className={style.modal__close}
                                    onClick={toggleModal}
                                >
                                    ×
                                </button>
                            </div>
                            <div className={style.modal__body}>
                                <p>
                                    Far far away, behind the word mountains, far
                                    from the countries Vokalia and Consonantia,
                                    there live the blind texts. Separated they
                                    live in Bookmarksgrove right at the coast of
                                    the Semantics, a large language ocean.
                                </p>
                            </div>
                            <div className={style.modal__footer}>
                                <button
                                    type="button"
                                    className={
                                        `btn btn--primary ` + style.modal__close
                                    }
                                    onClick={toggleModal}
                                >
                                    Fechar
                                </button>
                            </div>
                        </div>
                    </div>
                    <div
                        className={style.modal__backdrop}
                        onClick={toggleModal}
                    ></div>
                </div>
            ) : (
                ""
            )}
        </>
    );
}
