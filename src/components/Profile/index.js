import style from "./ProfileCard.module.scss";
import { useContext, useState } from "react";
import ProfileCard from "./ProfileCard";
import Modal from "../Modal";
import { AppContext } from "../../providers/AppContext";

export default function Profile() {
    // Recebe o estado do modal do AppProvider
    const { modal } = useContext(AppContext);
    const [showModal, setShowModal] = modal;

    const toggleModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <>
            <main className="main-content">
                <div className="container">
                    <div className="main-content-wrapper">
                        <div className="row">
                            <div className="col-8">
                                <div className="box">
                                    <div className="box-inner">
                                        <div className="box-header">
                                            <h2>Meus Dados</h2>
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
                                                            Endere??o
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
                                                            Pa??s
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="pais"
                                                            placeholder="Pa??s"
                                                            className="form-control"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div className="form-group col">
                                                        <button
                                                            type="button"
                                                            className="btn btn--primary"
                                                            onClick={
                                                                toggleModal
                                                            }
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

            {showModal ? (
                <Modal
                    title="Meus Dados"
                    image=""
                    icon="error.svg"
                    titleText="Dados Pessoais"
                    text="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."
                    button="Entendi"
                />
            ) : (
                ""
            )}
        </>
    );
}
