const validaCadastro = (nome, email, senha) => {
    if(!nome || !email || !senha) {
        return 'Por favor, preencha todos os campos.'
    }

    if(senha.length < 6) {
        return  'A senha deve conter pelo menos 6 caracteres.'
    }
}

export default validaCadastro