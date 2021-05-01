import React, {useState} from 'react'
import style from './Login.module.scss'
import {IoFingerPrint, IoEyeOutline, IoEyeOffOutline} from 'react-icons/io5'
import {IconContext} from 'react-icons/lib'

export default function Login() {

    const [togglePassword, setTogglePassword] = useState(false);

    const toggle = () => {
        setTogglePassword(!togglePassword);
    }

    return (
        <main className={
            style.login__wrapper + ` flex-center`
        }>
            <div className={
                style.login__box
            }>
                <div className={
                    style.login__header
                }>
                    <h1>
                        <IoFingerPrint/> DKFinance
                    </h1>
                </div>
                <div className={
                    style.login__content
                }>
                    <form>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="senha">Senha</label>
                            <div className="input-icon">
                                <input type={
                                    togglePassword ? 'text' : 'password'
                                } name="senha" id="senha"/>
                                <IconContext.Provider value={
                                    {
                                        color: "#9c71c3",
                                        size: "1.2rem"
                                    }
                                }>
                                    {
                                        togglePassword ? <IoEyeOffOutline onClick={toggle}/> : <IoEyeOutline onClick={toggle}/>
                                    } 
                                </IconContext.Provider>
                            </div>
                        </div>
                        <div className="form-group">
                            <button className="btn btn--block btn--primary">Entrar</button>
                        </div>
                        <div className="form-check">
                            <input type="checkbox" name="manter" id="manter" value="1"/>
                            <label htmlFor="manter">Manter conectado</label>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    )
}
