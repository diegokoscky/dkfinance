import { useState } from "react";
import Link from "next/link";
import style from "./Cadastro.module.scss";
import { IoFingerPrint, IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { IconContext } from "react-icons/lib";

export default function Cadastro() {
    const [togglePassword, setTogglePassword] = useState(false);
    const toggle = () => {
        setTogglePassword(!togglePassword);
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
                    <form>
                        <div className="form-group">
                            <label htmlFor="nome">Seu nome</label>
                            <input
                                type="text"
                                name="nome"
                                id="nome"
                                placeholder="Digite seu nome"
                                className="form-control"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Seu melhor email</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Digite seu melhor email"
                                className="form-control"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="senha">Sua senha</label>
                            <div className="input-icon">
                                <input
                                    type={togglePassword ? "text" : "password"}
                                    name="senha"
                                    id="senha"
                                    placeholder="Digite sua senha"
                                    className="form-control"
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
                            <Link href="/dashboard">
                                <a
                                    className="btn btn--block btn--primary"
                                    title="Criar Conta"
                                >
                                    Criar Conta
                                </a>
                            </Link>
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
