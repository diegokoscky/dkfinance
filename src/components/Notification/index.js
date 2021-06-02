import style from "./Notification.module.scss";
import { useState, useEffect, useContext } from "react";
import { IoNotificationsSharp } from "react-icons/io5";
import { AppContext } from "../../providers/AppContext";

export default function Notification(props) {
    // Recebe o estado do notification do AppProvider
    const { notification } = useContext(AppContext);
    const [show, setShow] = notification;

    const closeNotification = () => {
        setShow(false);
    };

    // Define a cor da notificação
    const [cor, setCor] = useState("default");
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
                    onClick={closeNotification}
                >
                    ×
                </button>
            </div>
        </div>
    );
}
