import { useState, useContext } from "react";
import Link from "next/link";
import style from "./Cadastro.module.scss";
import { IoFingerPrint, IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { IconContext } from "react-icons/lib";
import { AppContext } from "../../providers/AppContext";
import Notification from "../Notification/";
import Button from "../Button";

export default function Cadastro() {
    // Recebe o estado dos inputs
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    // Recebe o estado do notification do AppProvider
    const { notification } = useContext(AppContext);
    const [notifica, setNotifica] = notification;

    // Recebe o estado do loading do AppProvider
    const { loadingButton } = useContext(AppContext);
    const [loading, setLoading] = loadingButton;

    // Cria o state para receber os retornos
    const [retornos, setRetornos] = useState([]);

    // Mostra ou esconde a senha
    const [togglePassword, setTogglePassword] = useState(false);
    const toggle = () => {
        setTogglePassword(!togglePassword);
    };

    // Gerencia o cadastro no onSubmit do form
    const handleCadastro = async (e) => {
        e.preventDefault();

        // Ativa o loading do botão
        setLoading(true);

        let dataSend = {
            nome,
            email,
            senha,
        };

        // Envia a requisição para o endpoint da API
        const response = await fetch("/api/users/cadastro", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(dataSend),
        });

        // Armazena a resposta da requisição e transforma em json
        const data = await response.json();

        // Retorna a mensagem de sucesso ou de erro
        setRetornos(data);
        setNotifica(true);

        // Desativa o loading do botão
        setLoading(false);
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
                        <form onSubmit={(e) => handleCadastro(e)}>
                            <div className="form-group">
                                <label htmlFor="nome">Seu nome</label>
                                <input
                                    type="text"
                                    name="nome"
                                    id="nome"
                                    placeholder="Digite seu nome"
                                    className="form-control"
                                    value={nome}
                                    onChange={(e) => setNome(e.target.value)}
                                    required
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
                                <Button
                                    type="submit"
                                    appear="btn btn--primary btn--block"
                                    text="Criar Conta"
                                    loading={true}
                                />
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
