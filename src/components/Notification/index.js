import style from "./Notification.module.scss";
import { useState, useEffect } from "react";
import { IoNotificationsSharp } from "react-icons/io5";

export default function Notification(props) {
    const [show, setShow] = useState(true);
    const [cor, setCor] = useState("default");

    const toggleNotification = () => {
        setShow(!show);
    };

    useEffect(() => {
        switch (props.tipo) {
            case "success":
                setCor("bg-green");
                break;

            case "danger":
                setCor("bg-red");
                break;

            case "warning":
                setCor("bg-orange");
                break;

            default:
                break;
        }
    }, []);

    return (
        <>
            {show ? (
                <div className={style.notification + ` flex-center`}>
                    <div className={style.notification__inner + ` ` + cor}>
                        <div className={style.notification__icon}>
                            <IoNotificationsSharp />
                        </div>
                        <div className={style.notification__content}>
                            <span className={style.notification__title}>
                                {props.title}
                            </span>
                            <span className={style.notification__text}>
                                {props.text}
                            </span>
                        </div>
                        <button
                            type="button"
                            className={style.notification__close}
                            title="Fechar"
                            aria-label="Fechar notificação"
                            onClick={toggleNotification}
                        >
                            ×
                        </button>
                    </div>
                </div>
            ) : (
                ""
            )}
        </>
    );
}
