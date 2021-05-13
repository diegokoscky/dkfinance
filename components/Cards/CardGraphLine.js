import style from "./Card.module.scss";
import { Line } from "react-chartjs-2";

export default function CardGraphLine(props) {
    const data = {
        labels: props.items,
        datasets: [
            {
                label: "Performance mensal",
                data: props.values,
                backgroundColor: [
                    "rgba(255, 99, 132, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(153, 102, 255, 1)",
                    "rgba(255, 159, 64, 1)",
                ],
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
