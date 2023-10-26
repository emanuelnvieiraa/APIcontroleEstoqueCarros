//npm instal nodemon
//npm install express
// para rodar npm run dev no terminal


import express from "express";
import connectDataBase from "./config/dbConnect.js";
const connection = await connectDataBase();

import car from "./models/Car.js";


connection.on("error", (erro) =>{
    console.log("ERRO NA CONEXAO COM O DB");
    console.log(erro)
})
connection.once("open", () =>{
    console.log("CONECTADO COM SUCESSO AO DB");
})
const app = express();
app.use(express.json());
const cars = [
    {
       id: 1,
       model: "Onix LTZ",
       brand: "Chevrolet",
       year:  "2014"
        
    },
];

//função para buscar o livro pelo ID

function searchCar(id) {
    return cars.findIndex((car) => car.id === id);
}

app.get("/", (req, res) => {
    res.status(200).send("Hello World!!!");
});

app.get("/cars", (req, res) => {
    res.status(200).json(cars);
});

app.post("/cars", (req, res) => {
   cars.push(req.body);
   //res status(201).json(cars);
   res.status(201).json("Veículo cadastrado com sucesso!")
});

app.get("/cars/:id", (req, res) => {
    const index = searchCar(Number(req.params.id));

    if(index === -1) {
        res.status(404).json("Veículo não encontrado!")
    } else{
        res.status(200).json(cars[index]);
    }
});
app.patch("/cars/id" , (req, res) => {
    const index = searchCar(Number(req.params.id));
    if(index === 1){
        res.status(404).json("Veículo não encontrado!");
    } else{
        cars[index].title = req.body.title
        res.status(200).json(cars);
    }
});

app.delete("/cars/id", (req, res) => {
    const index = searchCar(Number(req.params.id));
    if(index === -1){
        res.status(404).json("Veículo não encontrado");
    } else{
        cars.splice(index, 1);
        //res.status(2000).json(cars);
        res.status(200).json("Veículo removido com sucesso!")
    }
})

app.delete("/cars/:id", (req, res) => {
    const index = searchCar(Number(req.params.id));
    if(index === -1){
        res.status(404).json("Veículo não encontrado");
    } else {
        cars.splice(index, 1);
        //res.status(200).json("livro removido com sucesso")
        res.status(200).json("Veículo removido com sucesso")
    }
});

export default app;





