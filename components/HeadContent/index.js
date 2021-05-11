import style from "./HeadContent.module.scss";

export default function HeadContent(props) {
    return (
        <div className={style.head__content}>
            <div className="container">
                <div className={style.head__content_inner}>
                    <h1>{props.title}</h1>
                </div>
            </div>
        </div>
    );
}
