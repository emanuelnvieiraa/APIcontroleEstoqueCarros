//npm instal nodemon
//npm install express
//para rodar npm run dev no terminal
//alterar de onde puxa as informações do codigo ao inves de puxar do proprio codigo puxaro do DB!
import express from "express";
import connectDataBase from "./config/dbConnect.js";
import routes from "./routes/index.js";
const connection = await connectDataBase();

connection.on("error", (erro) => {
  console.log("ERRO NA CONEXAO COM O DB");
  console.log(erro)
})
connection.once("open", () => {
  console.log("CONECTADO COM SUCESSO AO DB");
})
const app = express();
routes(app);
export default app;






