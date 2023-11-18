// Quando temos mais de um export no arquivo, precisamos usar a sintaxe abaixo
import car from '../models/Car.js';

class carController {
  static async listCars(req, res) {
    try {
      /* Utiliza o modelo "brand" para buscar todas as marcas na coleção do banco de dados.
      A função "find" do mongoose é usada com um objeto vazio como argumento,
       o que significa que ela retornará todos os documentos da coleção.*/
      const carList = await car.find({});

      // Envia uma resposta com o status HTTP 200 (OK) e o corpo da resposta contendo a lista de authores no formato JSON.
      res.status(200).send(carList);
    } catch (erro) {
      res.status(500)
        .json({ message: `${erro.message} - falha ao listar carros` });
    }
  }

  static async listCarsById(req, res) {
    try {
      const id = req.params.id;
      const carFound = await car.findById(id);

      if (!carFound) {
        return res.status(404)
          .send({ message: "autor não encontrado" })
      }

      res.status(200).send(carFound);
    } catch (erro) {
      res.status(500)
        .json({ message: `${erro.message} - falha ao listar uma marca` });
    }
  }

  static async createCar(req, res) {
    try {
      const newCar = await car.create(req.body);
      res.status(201)
        .json({ message: "marca criada com sucesso", car: newCar });
    } catch (erro) {
      res.status(500)
        .json({ message: `${erro.message} - falha ao cadastrar marca` });
    }
  }

  static async updateCar(req, res) {
    try {
      const id = req.params.id;
      const updatedCar = await car.findByIdAndUpdate(id, req.body, { new: true, });

      if (updatedCar) {
        res.status(200)
          .send({ message: "marca atualizado com sucesso", car: updatedCar });
      } else {
        return res.status(404)
          .send({ message: "marca não encontrada" });
      }
    } catch (erro) {
      res.status(500)
        .json({ message: `${erro.message} - falha ao atualizar uma marca` });
    }
  }

  static async deleteCar(req, res) {
    try {
      const id = req.params.id;
      await car.findByIdAndDelete(id);
      res.status(200)
        .send({ message: "marca excluida com sucesso" });
    } catch (erro) {
      res.status(500)
        .json({ message: `${erro.message} - falha ao deletar uma marca` });
    }

  }
  //FUNCAO DE FILTROS

  //static async listBrandsBySearch(req, res){
  //try{
  //const(brandName, country) = req.query;
  //const searchList = {};
  //if (brandName) searchList.brandName = {$regex: brandName, $options}
  //if(country) searchList.country = {$regex: country, $options}
  //const brandFound = await brand.find(searchList).populate("Brand");
  //res.status(200).send(brandFound);
  //}catch(erro){
  //res.status(500)
  //.json({ message: `${erro.message} - falha ao deletar uma marca` });

}
//}
//}

export default carController;
