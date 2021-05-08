import Link from "next/link";
import { useContext } from "react";
import { AppContext } from "../../providers/AppContext";
import {
    IoFingerPrint,
    IoMenu,
    IoNotificationsSharp,
    IoSearchOutline,
    IoSearchSharp,
} from "react-icons/io5";
import style from "./Navbar.module.scss";

export default function Navbar() {
    const [sidebarToggle, setSidebarToggle] = useContext(AppContext);

    const toggle = () => {
        setSidebarToggle(!sidebarToggle);
    };

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
                                            className="flex-center"
                                            title="Menu lateral"
                                            aria-label="Menu lateral"
                                            onClick={toggle}
                                        >
                                            <IoMenu />
                                        </a>
                                    </Link>
                                </li>
                                <li
                                    className={style.navbar__search_toggle}
                                    onClick={toggle}
                                >
                                    <Link href="#">
                                        <a
                                            className="flex-center"
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
                                            className="flex-center"
                                            title="Notificações"
                                            aria-label="Notificações"
                                        >
                                            <IoNotificationsSharp />
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                            <div className={style.navbar__profile}>
                                <Link href="#">
                                    <a
                                        className="flex-center"
                                        title="Meu perfil e configurações"
                                        aria-label="Meu perfil e configurações"
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
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}
