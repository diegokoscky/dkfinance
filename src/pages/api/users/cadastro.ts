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
        const { userName } = req.body;
        const { userEmail } = req.body;
        const { userPassword } = req.body;

        switch (method) {
            case "POST":
                // Criptografa a senha
                const hashPassword = criptografar(userPassword);

                const query = {
                    nome: userName,
                    email: userEmail,
                    senha: hashPassword,
                };
                const db = await connectToDatabase();

                const data = await db.collection("users").insertOne(query);

                if (data) {
                    res.status(201).json({
                        status: true,
                        message: "Cadastro realizado",
                    });
                } else {
                    res.status(200).json({
                        status: false,
                        message: "Cadastro não realizado",
                    });
                }

                break;

            default:
                res.setHeader("Allow", ["POST"]);
                res.status(405).end("Forbidden");
        }
    } catch (err) {
        res.status(500).json({ statusCode: 500, message: err.message });
    }
}
