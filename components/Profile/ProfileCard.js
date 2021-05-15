import style from "./ProfileCard.module.scss";

export default function ProfileCard() {
    return (
        <div className={style.profile__card}>
            <div
                className={style.profile__card_inner + ` flex-center f-column`}
            >
                <div
                    className={
                        style.profile__card_header + ` flex-center f-column`
                    }
                >
                    <div className={style.profile__card_header_bg}></div>
                    <div className={style.profile__card_header_img}>
                        <img
                            src="/images/profile-card-img.jpg"
                            alt="Imagem de Perfil"
                            className="circle-img"
                        />
                    </div>
                </div>
                <div className={style.profile__card_body}>
                    <span>Diego Koscky</span>
                    <div
                        className={
                            style.profile__card_body_info + ` flex-around`
                        }
                    >
                        <div>
                            <span>10</span>
                            <span>Ações</span>
                        </div>
                        <div>
                            <span>5</span>
                            <span>FIIs</span>
                        </div>
                        <div>
                            <span>30%</span>
                            <span>Lucro</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
