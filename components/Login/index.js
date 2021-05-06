import { useState } from "react";
import Link from "next/link";
import style from "./Login.module.scss";
import { IoFingerPrint, IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { IconContext } from "react-icons/lib";

export default function Login() {
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
                            <label htmlFor="email">Seu email</label>
                            <input type="email" name="email" id="email" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="senha">Sua senha</label>
                            <div className="input-icon">
                                <input
                                    type={togglePassword ? "text" : "password"}
                                    name="senha"
                                    id="senha"
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
                                    className="btn--default btn--block btn--primary"
                                    title="Entrar"
                                >
                                    Entrar
                                </a>
                            </Link>
                        </div>

                        <div className={style.login__basic_link}>
                            <Link href="/cadastro">
                                <a className="basic-link" title="Criar conta">
                                    Criar conta
                                </a>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
}
