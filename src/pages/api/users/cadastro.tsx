import { NextApiRequest, NextApiResponse } from "next";
import connectToDatabase from "../../../utils/mongodb";
import criptografar from "../../../utils/crypt";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        // Recebe o conteúdo da requisição
        const { method } = req;
        const { nome } = req.body;
        const { email } = req.body;
        const { senha } = req.body;

        switch (method) {
            case "POST":
                // Conecta no banco de dados
                const db = await connectToDatabase();

                // Valida a senha
                if (senha.length < 8) {
                    res.status(200).json({
                        status: false,
                        titulo: "Erro",
                        message: "A senha deve conter pelo menos 8 caracteres.",
                        label: "danger",
                    });

                    break;
                }

                // Valida o email
                const validaEmail = {
                    email: email,
                };
                // Busca o email no banco
                const retornoEmail = await db
                    .collection("users")
                    .findOne(validaEmail);

                if (retornoEmail) {
                    res.status(200).json({
                        status: false,
                        titulo: "Erro",
                        message: "Já existe uma conta com esse email.",
                        label: "danger",
                    });

                    break;
                }

                // Criptografa a senha
                const hashPassword = criptografar(senha);

                // Monta os parâmetros da query
                const query = {
                    nome: nome,
                    email: email,
                    senha: hashPassword,
                };

                // Realiza a query no banco
                const data = await db.collection("users").insertOne(query);

                // Retornos
                if (data) {
                    res.status(201).json({
                        status: true,
                        titulo: "Sucesso",
                        message: "Sua conta foi criada! Faça o login.",
                        label: "success",
                    });
                } else {
                    res.status(200).json({
                        status: false,
                        titulo: "Erro",
                        message:
                            "Sua conta não pôde ser criada. Tente novamente.",
                        label: "danger",
                    });
                }

                break;

            default:
                res.setHeader("Allow", ["POST"]);
                res.status(405).end("Forbidden");

                break;
        }
    } catch (err) {
        res.status(500).json({ statusCode: 500, message: err.message });
    }
}
