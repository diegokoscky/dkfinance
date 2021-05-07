import Link from "next/link";
import { IoNotificationsOutline, IoSearchOutline } from "react-icons/io5";
import style from "./Navbar.module.scss";

export default function Navbar() {
    return (
        <header>
            <nav className={style.navbar}>
                <div className="container">
                    <div className="flex-between">
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
                            <ul>
                                <li>
                                    <Link href="">
                                        <a className="flex-center">
                                            <IoNotificationsOutline />
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                            <div className={style.navbar__profile}>
                                <Link href="">
                                    <a className="flex-center">
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
