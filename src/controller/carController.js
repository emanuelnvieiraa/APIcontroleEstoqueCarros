import car from "../models/Car.js";

class carController {
  static async listCars(req, res) {
    try {
      /* Utiliza o modelo "book" para buscar todos os livros na coleção do banco de dados.
      A função "find" do mongoose é usada com um objeto vazio como argumento,
       o que significa que ela retornará todos os documentos da coleção.*/
      const carList = await car.find({});

      // Envia uma resposta com o status HTTP 200 (OK) e o corpo da resposta contendo a lista de livros no formato JSON.
      res.status(200).send(carList);
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - falha ao listar carros` });
    }
  }
}

export default carController;
