import style from "./Card.module.scss";
import { Pie } from "react-chartjs-2";

export default function CardGraphPie(props) {
    const data = {
        labels: props.items,
        datasets: [
            {
                data: props.values,
                backgroundColor: [
                    "#F5365C",
                    "#FB6340",
                    "#2DCE89",
                    "#5E72E4",
                    "#11CDEF",
                    "#FFCA20",
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
                <Pie data={data} />
            </div>
        </div>
    );
}
