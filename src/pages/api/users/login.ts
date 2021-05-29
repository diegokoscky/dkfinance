import { NextApiRequest, NextApiResponse } from "next";
import connectToDatabase from "../../../utils/mongodb";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        // Recebe o conteúdo da requisição
        const { method } = req;
        const { userEmail } = req.body;
        const { userPassword } = req.body;

        switch (method) {
            case "POST":
                const query = { email: userEmail, senha: userPassword };
                const db = await connectToDatabase();

                const data = await db.collection("users").findOne(query);

                if (data) {
                    res.status(200).json({
                        user: true,
                        message: "Usuário encontrado",
                    });
                } else {
                    res.status(200).json({
                        user: false,
                        message: "Usuário não encontrado",
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
