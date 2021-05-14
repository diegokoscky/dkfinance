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
                                    {content.headers.map((header) => (
                                        <th key={header}>{header}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {content.rows.map((row) => (
                                    <tr key={row.id}>
                                        <td>{row.acao}</td>
                                        <td>
                                            <NumberFormat
                                                value={row.investido}
                                                displayType={"text"}
                                                thousandSeparator={"."}
                                                decimalSeparator={","}
                                                prefix={"R$ "}
                                            />
                                        </td>
                                        <td>
                                            <NumberFormat
                                                value={row.total}
                                                displayType={"text"}
                                                thousandSeparator={"."}
                                                decimalSeparator={","}
                                                prefix={"R$ "}
                                            />
                                        </td>
                                        <td>
                                            <NumberFormat
                                                value={row.lucro}
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
