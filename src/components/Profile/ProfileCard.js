import "react-toggle/style.css";
import style from "./ProfileCard.module.scss";
import Toggle from "react-toggle";
import { useContext, useEffect } from "react";
import { HiMoon, HiSun } from "react-icons/hi";
import { AppContext } from "../../providers/AppContext";
import { setCookie, destroyCookie } from "nookies";

export default function ProfileCard() {
    // Recebe o estado do Tema do AppProvider
    const { theme } = useContext(AppContext);
    const [nightMode, setNightMode] = theme;

    const handleNightMode = () => {
        setNightMode(!nightMode);
    };

    // Cria ou destrói o cookie de tema sempre que o nightMode se altera
    useEffect(() => {
        if (nightMode) {
            setCookie(null, "NIGHTM", true, {
                maxAge: 86400 * 30 * 12 * 12,
                path: "/",
            });
        } else {
            destroyCookie(null, "NIGHTM");
        }
    }, [nightMode]);

    return (
        <div className={style.profile__card}>
            <div
                className={style.profile__card_inner + ` flex-center f-column`}
            >
                <div
                    className={
                        style.profile__card_header + ` flex-center f-column`
                    }
                >
                    <div className={style.profile__card_header_bg}></div>
                    <div className={style.profile__card_header_img}>
                        <img
                            src="/images/profile-card-img.jpg"
                            alt="Imagem de Perfil"
                            className="circle-img"
                        />
                    </div>
                </div>
                <div className={style.profile__card_body}>
                    <span>Diego Koscky</span>
                    <div
                        className={
                            style.profile__card_body_info + ` flex-around`
                        }
                    >
                        <div>
                            <span>10</span>
                            <span className="tag--primary">Ações</span>
                        </div>
                        <div>
                            <span>5</span>
                            <span className="tag--primary">FIIs</span>
                        </div>
                        <div>
                            <span>30%</span>
                            <span className="tag--primary">Lucro</span>
                        </div>
                    </div>
                </div>
                <div className={style.profile__card_footer}>
                    <div>
                        <label className="flex-center">
                            <Toggle
                                defaultChecked={nightMode}
                                icons={{
                                    checked: <HiMoon />,
                                    unchecked: (
                                        <HiSun
                                            className={
                                                style.profile__light_theme
                                            }
                                        />
                                    ),
                                }}
                                onChange={handleNightMode}
                            />
                            <span>Night Mode</span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
}
