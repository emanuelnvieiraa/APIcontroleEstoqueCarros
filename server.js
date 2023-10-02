//npm init - y
//no powershell npm install express e npm install nodemon na pasta selecionada
//install mongodb mongoose dotenv

import app from "./src/app.js";

const PORT = 3000;

app.listen(PORT, () => {
    console.log("Servidor rodando na porta 3000")
})