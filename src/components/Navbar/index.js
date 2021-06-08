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
    IoCloseSharp,
} from "react-icons/io5";
import { CgMenuRightAlt } from "react-icons/cg";
import style from "./Navbar.module.scss";
import { useRouter } from "next/router";
import { destroyCookie } from "nookies";
import NavbarName from "../NavbarName";

export default function Navbar() {
    // Recebe o estado do toggleSidebar do AppProvider
    const { sidebar } = useContext(AppContext);
    const [sidebarToggle, setSidebarToggle] = sidebar;

    // Toggle sidebar
    const toggle = () => {
        setSidebarToggle(!sidebarToggle);
    };

    // Mostra a busca mobile
    const [showSearch, setShowSearch] = useState(false);
    const toggleSearch = () => {
        setShowSearch(!showSearch);
    };

    // Dropdown notificações
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

    // Dropdown perfil
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

    // Manipula os eventos de clique dos dropdowns
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

    // Inicializa o router para redirect
    const router = useRouter();

    // Faz o logout
    const handleLogout = () => {
        destroyCookie(null, "_adkf");
        destroyCookie(null, "_audkf");
        destroyCookie(null, "_apdkf");

        router.push("/");
    };

    return (
        <header>
            <nav className={style.navbar}>
                <div className="container">
                    <div className={style.navbar__wrapper + ` flex-between`}>
                        <div className={style.navbar__logo}>
                            <Link href="/dashboard">
                                <a className="flex-center">
                                    <IoFingerPrint />
                                    <span>DKFinance</span>
                                </a>
                            </Link>
                        </div>
                        <form
                            className={
                                showSearch ? style.navbar__search_mobile : ""
                            }
                        >
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
                                    aria-label="Buscar"
                                    className={
                                        `form-control ` +
                                        style.navbar__search_input
                                    }
                                />
                                {showSearch ? (
                                    <div
                                        className={
                                            style.navbar__close_search +
                                            ` flex-center`
                                        }
                                        onClick={toggleSearch}
                                        title="Fechar busca"
                                        aria-label="Fechar busca"
                                    >
                                        <IoCloseSharp />
                                    </div>
                                ) : (
                                    ""
                                )}
                            </div>
                        </form>
                        <div className={style.navbar__links + ` flex-center`}>
                            <ul className="flex-center">
                                <li className={style.navbar__sidebar_toggle}>
                                    <span
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
                                    </span>
                                </li>
                                <li
                                    className={style.navbar__search_toggle}
                                    onClick={toggleSearch}
                                >
                                    <span
                                        className={
                                            style.navbar__link_item +
                                            ` flex-center`
                                        }
                                        title="Buscar"
                                        aria-label="Buscar"
                                    >
                                        <IoSearchSharp />
                                    </span>
                                </li>
                                <li>
                                    <span
                                        className={
                                            style.navbar__link_item +
                                            ` flex-center`
                                        }
                                        title="Notificações"
                                        aria-label="Notificações"
                                        onClick={toggleDropNotification}
                                    >
                                        <IoNotificationsSharp />
                                    </span>
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
                                <span
                                    className="flex-center"
                                    title="Meu perfil e configurações"
                                    aria-label="Meu perfil e configurações"
                                    onClick={toggleDropProfile}
                                >
                                    <NavbarName />
                                </span>
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
                                                <a
                                                    className="flex-start"
                                                    onClick={handleLogout}
                                                >
                                                    <IoLogOutOutline /> Sair
                                                </a>
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
