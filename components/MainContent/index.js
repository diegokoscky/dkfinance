import style from "./MainContent.module.scss";

export default function MainContent({ children }) {
    return <div className={style.main__content}>{children}</div>;
}
