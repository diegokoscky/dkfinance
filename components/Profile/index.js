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
                                        <h2>Dados Pessoais</h2>
                                    </div>
                                    <div className="box-content">
                                        <form>
                                            <div className="row">
                                                <div className="form-group col-6">
                                                    <label htmlFor="nome">
                                                        Nome
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="nome"
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
                                                        className="form-control"
                                                    />
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>

                            <div className="box">
                                <div className="box-inner">
                                    <div className="box-header">
                                        <h2>Endereço</h2>
                                    </div>
                                    <div className="box-content">
                                        <form>
                                            <div className="row">
                                                <div className="form-group col-12">
                                                    <label htmlFor="endereco">
                                                        Endereço
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="endereco"
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
                                                        className="form-control"
                                                    />
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
