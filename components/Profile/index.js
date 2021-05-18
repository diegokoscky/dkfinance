import style from "./ProfileCard.module.scss";
import ProfileCard from "./ProfileCard";

export default function Profile() {
    return (
        <main className="main-content">
            <div className="container">
                <div className="main-content-wrapper">
                    <div className="row">
                        <div className="col-8">
                            <div className="box">
                                <div className="box-inner">
                                    <div className="box-header">
                                        <h2>Seus Dados</h2>
                                    </div>
                                    <div className="box-content">
                                        <form>
                                            <div className="row">
                                                <div className="col">
                                                    <h3
                                                        className={
                                                            style.profile__box_subtitle
                                                        }
                                                    >
                                                        Dados pessoais
                                                    </h3>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="form-group col-6">
                                                    <label htmlFor="nome">
                                                        Nome
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="nome"
                                                        placeholder="Seu nome"
                                                        className="form-control"
                                                    />
                                                </div>
                                                <div className="form-group col-6">
                                                    <label htmlFor="email">
                                                        Email
                                                    </label>
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        placeholder="Seu email"
                                                        className="form-control"
                                                    />
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="form-group col-4">
                                                    <label htmlFor="cpf">
                                                        CPF
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="cpf"
                                                        placeholder="Seu CPF"
                                                        className="form-control"
                                                    />
                                                </div>
                                                <div className="form-group col-4">
                                                    <label htmlFor="nascimento">
                                                        Nascimento
                                                    </label>
                                                    <input
                                                        type="date"
                                                        name="nascimento"
                                                        placeholder="Data de nascimento"
                                                        className="form-control"
                                                    />
                                                </div>
                                                <div className="form-group col-4">
                                                    <label htmlFor="tel">
                                                        Telefone
                                                    </label>
                                                    <input
                                                        type="tel"
                                                        name="tel"
                                                        placeholder="Seu telefone"
                                                        className="form-control"
                                                    />
                                                </div>
                                            </div>

                                            <hr />

                                            <div className="row">
                                                <div className="col">
                                                    <h3
                                                        className={
                                                            style.profile__box_subtitle
                                                        }
                                                    >
                                                        Endereço
                                                    </h3>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="form-group col-12">
                                                    <label htmlFor="logradouro">
                                                        Logradouro
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="logradouro"
                                                        placeholder="Logradouro"
                                                        className="form-control"
                                                    />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="form-group col-4">
                                                    <label htmlFor="cidade">
                                                        Cidade
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="cidade"
                                                        placeholder="Sua cidade"
                                                        className="form-control"
                                                    />
                                                </div>
                                                <div className="form-group col-4">
                                                    <label htmlFor="uf">
                                                        Estado
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="uf"
                                                        placeholder="Estado"
                                                        className="form-control"
                                                    />
                                                </div>
                                                <div className="form-group col-4">
                                                    <label htmlFor="pais">
                                                        País
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="pais"
                                                        placeholder="País"
                                                        className="form-control"
                                                    />
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="form-group col">
                                                    <button
                                                        type="submit"
                                                        className="btn btn--primary"
                                                    >
                                                        Salvar
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-4">
                            <ProfileCard />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
