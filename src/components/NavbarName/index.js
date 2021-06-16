import style from "./NavbarName.module.scss";

export default function NavbarName() {
    return (
        <>
            <img
                src="/images/profile-img.jpg"
                alt="Imagem de Perfil"
                className={style.profile__img + ` circle-img`}
            />
            <span className={style.navbar__nome_perfil}>Diego Koscky</span>
        </>
    );
}
