import Link from "next/link";
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
import { HiOutlineMenu, HiOutlineMenuAlt3 } from "react-icons/hi";

export default function Sidebar() {
    return (
        <aside className={style.sidebar}>
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
                                        <IoHomeOutline /> Item 1
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/dashboard">
                                    <a className="flex-start">
                                        <IoAlbumsOutline /> Item 2
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/dashboard">
                                    <a className="flex-start">
                                        <IoBarcodeOutline /> Item 3
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/dashboard">
                                    <a className="flex-start">
                                        <IoCalendarOutline /> Item 4
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/dashboard">
                                    <a className="flex-start">
                                        <IoBuildOutline /> Item 5
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
            </nav>
        </aside>
    );
}
