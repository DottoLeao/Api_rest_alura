import mongoose from "mongoose";

async function conectaNaDatabase() {
  try {
    await mongoose.connect(process.env.DB_CONECTION_STRING);
    console.log("Conexão com o banco de dados estabelecida com sucesso!");
    return mongoose.connection;
  } catch (error) {
    console.error("Erro ao conectar-se ao banco de dados:", error);
    throw error;
  }
}

export default conectaNaDatabase;
