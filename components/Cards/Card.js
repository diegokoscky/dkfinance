import style from "./Card.module.scss";

export default function Card(props) {
    return (
        <div className={style.card}>
            <div className={style.card__header}>
                <h2>{props.title}</h2>
            </div>
            <div className={style.card__body}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque ullamcorper mauris eget justo tristique cursus.
                    Fusce sed tincidunt dolor. Nullam at placerat nisi. Etiam
                    porta ac eros vel sollicitudin.
                </p>
            </div>
        </div>
    );
}
