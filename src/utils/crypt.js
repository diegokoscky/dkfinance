import crypto from "crypto";

export default function Criptografar(senha) {
    const DADOS_CRIPTOGRAFAR = {
        algorithm: "aes256",
        secret: "ilegibilidade",
        type: "hex",
    };

    const cipher = crypto.createCipher(
        DADOS_CRIPTOGRAFAR.algorithm,
        DADOS_CRIPTOGRAFAR.secret
    );
    cipher.update(senha);

    return cipher.final(DADOS_CRIPTOGRAFAR.type);
}
