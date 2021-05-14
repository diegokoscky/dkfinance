import style from "./Card.module.scss";
import { Line } from "react-chartjs-2";

export default function CardGraphLine(props) {
    const data = {
        labels: props.items,
        datasets: [
            {
                label: "Performance mensal",
                data: props.values,
                backgroundColor: ["#F5365C"],
            },
        ],
    };

    return (
        <div className={style.card}>
            <div className={style.card__header}>
                <h2>{props.title}</h2>
            </div>
            <div className={style.card__body}>
                <Line data={data} />
            </div>
        </div>
    );
}
