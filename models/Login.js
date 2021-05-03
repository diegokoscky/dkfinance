import mongoose from 'mongoose'

const LoginSchema = new mongoose.Schema({
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

let Dataset = mongoose.models.Login || mongoose.model('Login', LoginSchema)

export default Dataset;