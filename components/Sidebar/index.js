import Link from "next/link";
import style from "./Sidebar.module.scss";
import {
    IoAlbumsOutline,
    IoBarcodeOutline,
    IoBuildOutline,
    IoCalendarOutline,
    IoFingerPrint,
    IoHomeOutline,
} from "react-icons/io5";
import { HiOutlineMenu, HiOutlineMenuAlt3 } from "react-icons/hi";
import { IconContext } from "react-icons/lib";

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
                                    <a>
                                        <IoHomeOutline /> Item 1
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/dashboard">
                                    <a href="">
                                        <IoAlbumsOutline /> Item 2
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/dashboard">
                                    <a href="">
                                        <IoBarcodeOutline /> Item 3
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/dashboard">
                                    <a href="">
                                        <IoCalendarOutline /> Item 4
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/dashboard">
                                    <a href="">
                                        <IoBuildOutline /> Item 5
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
