import style from "./Card.module.scss";
import { useState, useEffect } from "react";
import NumberFormat from "react-number-format";

export default function Card(props) {
    const content = props.content;

    // Tipos de conteúdo
    const [table, setTable] = useState(false);
    const [text, setText] = useState(false);

    useEffect(() => {
        switch (props.type) {
            case "table":
                setTable(true);
                break;

            case "text":
                setText(true);
                break;

            default:
                break;
        }
    }, []);

    return (
        <div className={style.card}>
            <div className={style.card__header}>
                <h2>{props.title}</h2>
            </div>
            <div className={style.card__body}>
                {table ? (
                    <div className="table-responsive">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>Ação</th>
                                    <th>Investido</th>
                                    <th>Total Hoje</th>
                                    <th>Lucro</th>
                                </tr>
                            </thead>
                            <tbody>
                                {content.map((item) => (
                                    <tr key={item.id}>
                                        <td>{item.acao}</td>
                                        <td>
                                            <NumberFormat
                                                value={item.investido}
                                                displayType={"text"}
                                                thousandSeparator={"."}
                                                decimalSeparator={","}
                                                prefix={"R$ "}
                                            />
                                        </td>
                                        <td>
                                            <NumberFormat
                                                value={item.total}
                                                displayType={"text"}
                                                thousandSeparator={"."}
                                                decimalSeparator={","}
                                                prefix={"R$ "}
                                            />
                                        </td>
                                        <td>
                                            <NumberFormat
                                                value={item.lucro}
                                                displayType={"text"}
                                                decimalSeparator={","}
                                                suffix={"%"}
                                            />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    ""
                )}

                {text ? <p>{content}</p> : ""}
            </div>
        </div>
    );
}
