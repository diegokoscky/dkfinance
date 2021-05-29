import style from "./Forbidden.module.scss";
import Link from "next/link";
import Image from "next/image";

export default function Forbidden() {
    return (
        <>
            <div className={style.modal}>
                <div className={style.modal__inner}>
                    <div
                        className={
                            style.modal__content +
                            ` ` +
                            style.forbidden__content
                        }
                    >
                        <div
                            className={
                                style.modal__header +
                                ` ` +
                                style.forbidden__header
                            }
                        >
                            <Image
                                src="/icons/forbidden.svg"
                                alt="Acesso negado"
                                width="auto"
                                height="auto"
                            />
                            <h4>Acesso Negado!</h4>
                        </div>
                        <div
                            className={
                                style.modal__body + ` ` + style.forbidden__body
                            }
                        >
                            <p>
                                Para acessar essa área, você deve fazer o login.
                            </p>
                        </div>
                        <div
                            className={
                                style.modal__footer +
                                ` ` +
                                style.forbidden__footer
                            }
                        >
                            <Link href="/">
                                <a
                                    className={
                                        `btn btn--primary btn--sm ` +
                                        style.modal__close
                                    }
                                >
                                    Voltar para o login
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={style.modal__backdrop}></div>
            </div>
        </>
    );
}
