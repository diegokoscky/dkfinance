import crypto from "crypto";

export default function Descriptografar(phrase) {
    const DADOS_DESCRIPTOGRAFAR = {
        algorithm: "aes256",
        codificacao: "utf8",
        secret: "ilegibilidade",
        type: "hex",
    };

    const decipher = crypto.createDecipher(
        DADOS_DESCRIPTOGRAFAR.algorithm,
        DADOS_DESCRIPTOGRAFAR.secret
    );
    decipher.update(phrase, DADOS_DESCRIPTOGRAFAR.tipo);

    return decipher.final();
}
