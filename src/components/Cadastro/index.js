import { useState } from "react";
import Link from "next/link";
import style from "./Cadastro.module.scss";
import { IoFingerPrint, IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { IconContext } from "react-icons/lib";

export default function Cadastro() {
    // Recebe o estado dos inputs
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    // Mostra ou esconde a senha
    const [togglePassword, setTogglePassword] = useState(false);
    const toggle = () => {
        setTogglePassword(!togglePassword);
    };

    // Gerencia o cadastro no onSubmit do form
    const handleCadastro = async (meuNome, meuEmail, minhaSenha) => {
        event.preventDefault();

        // Envia a requisição para o endpoint da API
        const response = await fetch("/api/users/cadastro", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                userName: meuNome,
                userEmail: meuEmail,
                userPassword: minhaSenha,
            }),
        });

        // Armazena a resposta da requisição e transforma em json
        const data = await response.json();

        // Se o retorno for true,
        if (data.status) {
            //
        } else {
            //
        }
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
                    <form onSubmit={(e) => handleCadastro(nome, email, senha)}>
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
                                    type={togglePassword ? "text" : "password"}
                                    name="senha"
                                    id="senha"
                                    placeholder="Digite sua senha"
                                    className="form-control"
                                    value={senha}
                                    onChange={(e) => setSenha(e.target.value)}
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
