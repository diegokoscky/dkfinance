import Link from "next/link";
import { useContext } from "react";
import { AppContext } from "../../providers/AppContext";
import style from "./Sidebar.module.scss";
import {
    IoAlbumsOutline,
    IoBarcodeOutline,
    IoBuildOutline,
    IoCalendarOutline,
    IoFingerPrint,
    IoHomeOutline,
    IoLogOutOutline,
} from "react-icons/io5";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

export default function Sidebar() {
    const [sidebarToggle, setSidebarToggle] = useContext(AppContext);

    return (
        <aside
            className={
                sidebarToggle
                    ? style.sidebar + ` ` + style.sidebar__open
                    : style.sidebar
            }
        >
            <nav>
                <div className={style.sidebar__header + ` flex-between`}>
                    <Link href="/dashboard">
                        <a className={style.sidebar__logo}>
                            <IoFingerPrint /> DKFinance
                        </a>
                    </Link>
                    <div className={style.sidebar__toggler}>
                        <HiOutlineMenuAlt3 />
                    </div>
                </div>

                <div className={style.sidebar__content}>
                    <div className={style.sidebar__inner}>
                        <ul>
                            <li>
                                <Link href="/dashboard">
                                    <a className="flex-start">
                                        <IoHomeOutline />
                                        <span>Item 1</span>
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/dashboard">
                                    <a className="flex-start">
                                        <IoAlbumsOutline />
                                        <span>Item 2</span>
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/dashboard">
                                    <a className="flex-start">
                                        <IoBarcodeOutline />
                                        <span>Item 3</span>
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/dashboard">
                                    <a className="flex-start">
                                        <IoCalendarOutline />
                                        <span>Item 4</span>
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/dashboard">
                                    <a className="flex-start">
                                        <IoBuildOutline />
                                        <span>Item 5</span>
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    <a className="flex-start">
                                        <IoLogOutOutline />
                                        <span>Sair</span>
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </aside>
    );
}
