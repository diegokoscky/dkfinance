import mongoose from 'mongoose'

const CadastroSchema = new mongoose.Schema({

    nome: {
        type: String,
        required: [true, 'Digite seu nome'],
        maxlength: [50, 'Nome com no máximo com 50 caracteres']
    },
    email: {
        type: String,
        required: [true, 'Digite o email'],
        unique: true,
        trim: true,
        maxlength: [50, 'Email com no máximo com 50 caracteres']
    },
    senha: {
        type: String,
        required: [true, 'Digite a senha'],
        trim: true,
        maxlength: [15, 'Senha com no máximo 15 caracteres']
    }
})

let Dataset = mongoose.models.Cadastro || mongoose.model('Cadastro', CadastroSchema)

export default Dataset;