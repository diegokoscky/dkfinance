import dbConnect from '../../../utils/dbConnect'
import Cadastro from '../../../models/Cadastro'
import validaCadastro from '../../../utils/validaCadastro'
import bcrypt from 'bcrypt'

dbConnect();

export default async (req, res) => {
    switch(req.method) {
        case 'POST':
            await register(req,res)
            break;
    }
}

const register = async (req, res) => {
    try {
        const { nome, email, senha } = req.body

        const errMsg = validaCadastro(nome, email, senha)

        if(errMsg) {
            return res.status(400).json({ err: errMsg })
        }

        const hashSenha = await bcrypt.hash(senha, 12)

        const novoCadastro = new Cadastros({
            nome, 
            email, 
            senha: hashSenha
        })

        console.log(novoCadastro)
        res.json({ msg: "Cadastro feito com sucesso!" })

    } catch(err) {
        return res.status(500).json({ err: err.message })
    }
}