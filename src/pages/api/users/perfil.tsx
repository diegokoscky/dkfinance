import { NextApiRequest, NextApiResponse } from "next";
import connectToDatabase from "../../../utils/mongodb";
import descriptografar from "../../../utils/decrypt";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        // Recebe o conteúdo da requisição
        const { method } = req;
        const { _audkfCookie } = req.body;
        const { _apdkfCookie } = req.body;

        const _audkfCookieDecrypt = descriptografar(_audkfCookie);

        switch (method) {
            case "POST":
                const query = {
                    email: _audkfCookieDecrypt,
                    senha: _apdkfCookie,
                };

                const db = await connectToDatabase();
                const data = await db.collection("users").find(query).toArray();

                if (data) {
                    res.status(200).json(data);
                } else {
                    res.status(200).json({
                        status: false,
                        titulo: "Erro",
                        message:
                            "Não foram encontrados dados com esses parâmetros.",
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
