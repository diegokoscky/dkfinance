import Link from "next/link";
import { useState, useContext, useEffect, useRef } from "react";
import { AppContext } from "../../providers/AppContext";
import {
    IoFingerPrint,
    IoMenu,
    IoNotificationsSharp,
    IoSearchOutline,
    IoSearchSharp,
    IoLogOutOutline,
    IoBuildOutline,
    IoPersonOutline,
    IoNotificationsOffOutline,
} from "react-icons/io5";
import { CgMenuRightAlt } from "react-icons/cg";
import style from "./Navbar.module.scss";

export default function Navbar() {
    // TOGGLE SIDEBAR
    const [sidebarToggle, setSidebarToggle] = useContext(AppContext);
    const toggle = () => {
        setSidebarToggle(!sidebarToggle);
    };

    // DROPDOWN NOTIFICAÇÕES
    const [dropNotification, setDropNotification] = useState(false);
    const toggleDropNotification = () => {
        setDropNotification(!dropNotification);
    };

    const notificationNode = useRef();

    const handleNotificationNode = (e) => {
        if (notificationNode.current.contains(e.target)) {
            // Clique dentro
            return;
        }
        // Clique fora
        setDropNotification(false);
    };

    // DROPDOWN PERFIL
    const [dropProfile, setDropProfile] = useState(false);
    const toggleDropProfile = () => {
        setDropProfile(!dropProfile);
    };

    const profileNode = useRef();

    const handleProfileNode = (e) => {
        if (profileNode.current.contains(e.target)) {
            // Clique dentro
            return;
        }
        // Clique fora
        setDropProfile(false);
    };

    // MANIPULA OS EVENTOS DE CLIQUE DOS DROPDOWNS
    useEffect(() => {
        // Adiciona o evento na montagem
        document.addEventListener("mousedown", handleNotificationNode);
        document.addEventListener("mousedown", handleProfileNode);

        // Remove o evento na desmontagem
        return () => {
            document.removeEventListener("mousedown", handleNotificationNode);
            document.removeEventListener("mousedown", handleProfileNode);
        };
    }, []);

    return (
        <header>
            <nav className={style.navbar}>
                <div className="container">
                    <div className="flex-between">
                        <div className={style.navbar__logo}>
                            <Link href="/dashboard">
                                <a>
                                    <IoFingerPrint /> DKFinance
                                </a>
                            </Link>
                        </div>
                        <form>
                            <div
                                className={
                                    style.navbar__search_container +
                                    ` flex-center`
                                }
                            >
                                <div
                                    className={
                                        style.navbar__search_icon +
                                        ` flex-center`
                                    }
                                >
                                    <IoSearchOutline />
                                </div>
                                <input
                                    type="text"
                                    name="search"
                                    placeholder="Buscar"
                                    className={
                                        `form-control ` +
                                        style.navbar__search_input
                                    }
                                />
                            </div>
                        </form>
                        <div className={style.navbar__links + ` flex-center`}>
                            <ul className="flex-center">
                                <li className={style.navbar__sidebar_toggle}>
                                    <Link href="#">
                                        <a
                                            className={
                                                style.navbar__link_item +
                                                ` flex-center`
                                            }
                                            title="Menu lateral"
                                            aria-label="Menu lateral"
                                            onClick={toggle}
                                        >
                                            {sidebarToggle ? (
                                                <CgMenuRightAlt />
                                            ) : (
                                                <IoMenu />
                                            )}
                                        </a>
                                    </Link>
                                </li>
                                <li
                                    className={style.navbar__search_toggle}
                                    onClick={toggle}
                                >
                                    <Link href="#">
                                        <a
                                            className={
                                                style.navbar__link_item +
                                                ` flex-center`
                                            }
                                            title="Buscar"
                                            aria-label="Buscar"
                                        >
                                            <IoSearchSharp />
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <a
                                            className={
                                                style.navbar__link_item +
                                                ` flex-center`
                                            }
                                            title="Notificações"
                                            aria-label="Notificações"
                                            onClick={toggleDropNotification}
                                        >
                                            <IoNotificationsSharp />
                                        </a>
                                    </Link>
                                    <div
                                        ref={notificationNode}
                                        className={
                                            dropNotification
                                                ? style.navbar__dropdown +
                                                  ` show`
                                                : style.navbar__dropdown
                                        }
                                    >
                                        <div
                                            className={
                                                style.navbar__dropdown_wrapper
                                            }
                                        >
                                            <ul>
                                                <li>
                                                    <Link href="#">
                                                        <a className="flex-start">
                                                            <IoNotificationsOffOutline />
                                                            Nenhuma notificação
                                                        </a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <div className={style.navbar__profile}>
                                <Link href="#">
                                    <a
                                        className="flex-center"
                                        title="Meu perfil e configurações"
                                        aria-label="Meu perfil e configurações"
                                        onClick={toggleDropProfile}
                                    >
                                        <img
                                            src="/images/profile-img.jpg"
                                            alt="Imagem de Perfil"
                                            className={
                                                style.profile__img +
                                                ` circle-img`
                                            }
                                        />
                                        <span>Diego Koscky</span>
                                    </a>
                                </Link>
                                <div
                                    ref={profileNode}
                                    className={
                                        dropProfile
                                            ? style.navbar__dropdown + ` show`
                                            : style.navbar__dropdown
                                    }
                                >
                                    <div
                                        className={
                                            style.navbar__dropdown_wrapper
                                        }
                                    >
                                        <ul>
                                            <li>
                                                <Link href="/perfil">
                                                    <a className="flex-start">
                                                        <IoPersonOutline />
                                                        Perfil
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <a className="flex-start">
                                                        <IoBuildOutline />
                                                        Configurações
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/">
                                                    <a className="flex-start">
                                                        <IoLogOutOutline /> Sair
                                                    </a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}
