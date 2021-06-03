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
        const { email } = req.body;
        const { senha } = req.body;

        switch (method) {
            case "POST":
                // Criptografa a senha
                const hashPassword = criptografar(senha);

                // Monta os parâmetros da query
                const query = { email: email, senha: hashPassword };

                // Conecta no banco de dados
                const db = await connectToDatabase();

                // Realiza a query no banco
                const data = await db.collection("users").findOne(query);

                // Retornos
                if (data) {
                    res.status(200).json({
                        status: true,
                        message: "Usuário encontrado.",
                    });
                } else {
                    res.status(200).json({
                        status: false,
                        titulo: "Erro",
                        message: "Email ou senha incorretos.",
                        label: "danger",
                    });
                }

                break;

            default:
                res.setHeader("Allow", ["POST"]);
                res.status(405).end("Forbidden");
        }
    } catch (err) {
        res.status(500).json({
            status: false,
            titulo: "Erro",
            message: err.message,
            label: "danger",
        });
    }
}
