import { useState, useContext } from "react";
import Link from "next/link";
import style from "./Cadastro.module.scss";
import { IoFingerPrint, IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { IconContext } from "react-icons/lib";
import validaCadastro from "../../utils/validaCadastro";
import { DataContext } from "../../central/GlobalState";

export default function Cadastro() {
    const [togglePassword, setTogglePassword] = useState(false);
    const toggle = () => {
        setTogglePassword(!togglePassword);
    };

    const initialState = { nome: "", email: "", senha: "" };
    const [userData, setUserData] = useState(initialState);
    const { nome, email, senha } = userData;

    const [state, dispatch] = useContext(DataContext);

    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errMsg = validaCadastro(nome, email, senha);

        if (errMsg) {
            return dispatch({
                type: "NOTIFY",
                payload: {
                    error: errMsg,
                },
            });
        }

        dispatch({
            type: "NOTIFY",
            payload: {
                success: "Cadastro feito com sucesso.",
            },
        });
    };

    return (
        <main className={style.login__wrapper + ` flex-center`}>
            <div className={style.login__box}>
                <div className={style.login__header}>
                    <h1>
                        <IoFingerPrint />
                        DKFinance
                    </h1>
                </div>
                <div>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="nome">Seu nome</label>
                            <input
                                type="text"
                                name="nome"
                                id="nome"
                                value={nome}
                                onChange={handleChangeInput}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Seu melhor email</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={email}
                                onChange={handleChangeInput}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="senha">Sua senha</label>
                            <div className="input-icon">
                                <input
                                    type={togglePassword ? "text" : "password"}
                                    name="senha"
                                    id="senha"
                                    value={senha}
                                    onChange={handleChangeInput}
                                />
                                <IconContext.Provider
                                    value={{
                                        color: "#9c71c3",
                                        size: "1.3rem",
                                    }}
                                >
                                    {togglePassword ? (
                                        <IoEyeOffOutline
                                            onClick={toggle}
                                            title="Esconder senha"
                                        />
                                    ) : (
                                        <IoEyeOutline
                                            onClick={toggle}
                                            title="Ver senha"
                                        />
                                    )}
                                </IconContext.Provider>
                            </div>
                        </div>

                        <div className="form-group">
                            <button
                                type="submit"
                                className="btn--default btn--block btn--primary"
                                title="Criar Conta"
                            >
                                Criar Conta
                            </button>
                        </div>

                        <div className={style.login__basic_link}>
                            <Link href="/">
                                <a
                                    className="basic-link"
                                    title="Já tenho conta"
                                >
                                    Já tenho conta
                                </a>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
}
