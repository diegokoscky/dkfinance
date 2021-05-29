import { MongoClient, Db } from "mongodb";
import url from "url";

// Salva a conexão em cache
let cachedDb: Db = null;

// Conecta no banco de dados
export default async function connectToDatabase() {
    if (cachedDb) {
        return cachedDb;
    }

    const uri = process.env.MONGODB_URI;

    const client = await MongoClient.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    // Pega o nome do banco de dados
    const dbName = url.parse(uri).pathname.substr(1);

    const db = client.db(dbName);

    cachedDb = db;

    return db;
}
