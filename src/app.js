//npm instal nodemon
//npm install express
// para rodar npm run dev no terminal

//alterar de onde puxa as informações do codigo ao inves de puxar do proprio codigo puxaro do DB!


import express from "express";
import connectDataBase from "./config/dbConnect.js";
const connection = await connectDataBase();

//importa o modelo da entidade carro para que seja possivel realizar a interação com o mongoDB
import car from "./models/Car.js";
import routes from "./routes/index.js";


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

app.post("/cars", async (req, res) => {
    try {
      const newCar = await car.create(req.body);
      res.status(201).json({ message: "criado com sucesso", car: newCar });
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha ao cadastrar livro` });
    }
  });

  app.get("/cars/:id", (req, res) => {
    const index = searchCar(Number(req.params.id));
  
    if (index === -1) {
      res.status(404).json("Carro não encontrado");
    } else {
      res.status(200).json(books[index]);
    }
  });
  app.patch("/cars/:id", (req, res) => {
    const index = searchCar(Number(req.params.id));
    if (index === -1) {
      res.status(404).json("Carro não encontrado");
    } else {
      books[index].title = req.body.title;
      res.status(200).json(cars);
    }
  });
  

app.delete("/cars/:id", (req, res) => {
    const index = searchCar(Number(req.params.id));
    if (index === -1) {
      res.status(404).json("Carro não encontrado");
    } else {
      books.splice(index, 1);
      //res.status(200).json(books);
      res.status(200).json("Carro removido com sucesso!!!");
    }
  });


export default app;





