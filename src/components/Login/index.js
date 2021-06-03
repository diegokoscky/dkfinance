import { useState, useContext } from "react";
import Link from "next/link";
import style from "./Login.module.scss";
import { IoFingerPrint, IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { IconContext } from "react-icons/lib";
import { useRouter } from "next/router";
import { AppContext } from "../../providers/AppContext";
import { setCookie } from "nookies";
import Notification from "../Notification/";

export default function Login() {
    // Recebe o estado dos inputs
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    // Recebe o estado do notification do AppProvider
    const { notification } = useContext(AppContext);
    const [notifica, setNotifica] = notification;

    // Cria o state para receber os retornos
    const [retornos, setRetornos] = useState([]);

    // Recebe o estado do Auth do AppProvider
    const { authentication } = useContext(AppContext);
    const [auth, setAuth] = authentication;

    // Mostra ou esconde a senha
    const [togglePassword, setTogglePassword] = useState(false);
    const toggle = () => {
        setTogglePassword(!togglePassword);
    };

    // Inicializa o router para redirect
    const router = useRouter();

    // Gerencia o login no onSubmit do form
    const handleLogin = async (e) => {
        e.preventDefault();

        console.log("Sending...");

        let dataSend = {
            email,
            senha,
        };

        // Envia a requisição para o endpoint da API
        const response = await fetch("/api/users/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(dataSend),
        });

        // Armazena a resposta da requisição e transforma em json
        const data = await response.json();

        // Se o retorno for true, seta o cookie e direciona pra dashboard
        if (data.status) {
            setAuth(true);
            setCookie(null, "AUTH", true, {
                maxAge: 86400,
                path: "/",
            });

            router.push("/dashboard");
        } else {
            // Senão retorna os erros e habilita o notification
            setRetornos(data);
            setNotifica(true);
        }
    };

    return (
        <>
            <main className={style.login__wrapper + ` flex-center`}>
                <div className={style.login__box}>
                    <div className={style.login__header}>
                        <h1>
                            <IoFingerPrint />
                            DKFinance
                        </h1>
                    </div>
                    <div>
                        <form onSubmit={(e) => handleLogin(e)}>
                            <div className="form-group">
                                <label htmlFor="email">Seu email</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Digite seu email"
                                    className="form-control"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="senha">Sua senha</label>
                                <div className="input-icon">
                                    <input
                                        type={
                                            togglePassword ? "text" : "password"
                                        }
                                        name="senha"
                                        id="senha"
                                        placeholder="Digite sua senha"
                                        className="form-control"
                                        value={senha}
                                        onChange={(e) =>
                                            setSenha(e.target.value)
                                        }
                                        required
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
                                    className="btn btn--block btn--primary"
                                    title="Entrar"
                                >
                                    Entrar
                                </button>
                            </div>

                            <div className={style.login__basic_link}>
                                <Link href="/cadastro">
                                    <a
                                        className="basic-link"
                                        title="Criar conta"
                                    >
                                        Criar conta
                                    </a>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </main>

            {notifica ? (
                <Notification
                    title={retornos.titulo}
                    text={retornos.message}
                    tipo={retornos.label}
                />
            ) : (
                ""
            )}
        </>
    );
}
