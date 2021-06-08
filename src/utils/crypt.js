import crypto from "crypto";

export default function Criptografar(phrase) {
    const DADOS_CRIPTOGRAFAR = {
        algorithm: "aes256",
        secret: "ilegibilidade",
        type: "hex",
    };

    const cipher = crypto.createCipher(
        DADOS_CRIPTOGRAFAR.algorithm,
        DADOS_CRIPTOGRAFAR.secret
    );
    cipher.update(phrase);

    return cipher.final(DADOS_CRIPTOGRAFAR.type);
}
