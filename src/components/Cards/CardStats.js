import style from "./CardStats.module.scss";
import { useState, useEffect } from "react";
import NumberFormat from "react-number-format";
import { BsArrowDown, BsArrowUp } from "react-icons/bs";

export default function CardStats(props) {
    const [myProfit, setMyProfit] = useState(false);

    useEffect(() => {
        if (props.profit >= 0) {
            setMyProfit(true);
        }
    }, []);

    return (
        <div className={style.card + ` ` + style.card__stats}>
            <div className={style.card__header}>
                <div>
                    <h2>{props.title}</h2>
                    <NumberFormat
                        value={props.value}
                        displayType={"text"}
                        thousandSeparator={"."}
                        decimalSeparator={","}
                        prefix={"R$ "}
                    />
                </div>
                <div>
                    <img src={props.image} alt="Logo Empresa" />
                </div>
            </div>
            <div className={style.card__body}>
                <p>
                    <span className={myProfit ? `text-green` : `text-red`}>
                        {myProfit ? <BsArrowUp /> : <BsArrowDown />}
                        <NumberFormat
                            value={props.profit}
                            displayType={"text"}
                            decimalSeparator={","}
                            suffix={"%"}
                            className={myProfit ? `text-green` : `text-red`}
                        />
                    </span>
                </p>
            </div>
        </div>
    );
}
