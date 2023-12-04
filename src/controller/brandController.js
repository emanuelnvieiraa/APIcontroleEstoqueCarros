// Quando temos mais de um export no arquivo, precisamos usar a sintaxe abaixo
import { brand } from "../models/brand.js";
import mongoose from "mongoose";

class brandController {
  static async listBrands(req, res) {
    try {
      /* Utiliza o modelo "brand" para buscar todas as marcas na coleção do banco de dados.
      A função "find" do mongoose é usada com um objeto vazio como argumento,
       o que significa que ela retornará todos os documentos da coleção.*/
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 10;
      const skip = (page - 1) * limit;

      const brandList = await brand.find({}).skip(skip).limit(limit);

      // Envia uma resposta com o status HTTP 200 (OK) e o corpo da resposta contendo a lista de authores no formato JSON.
      res.status(200).send(brandList);
    } catch (erro) {
      res.status(500)
        .json({ message: `${erro.message} - falha ao listar marcas` });
    }
  }

  static async listBrandsById(req, res) {
    try {
      const id = req.params.id;
      const brandFound = await brand.findById(id);

      if (!brandFound) {
        return res.status(404)
          .send({ message: "marca não encontrada" })
      }

      res.status(200).send(brandFound);
    } catch (erro) {
      if (erro instanceof mongoose.CastError) {
        res.status(400)
          .send({ message: "Id no formato inválido" });
      } else {
        res.status(500)
          .json({ message: `${erro.message} - falha ao listar um Autor` });
      }
    }
  }

  static async createBrand(req, res) {
    try {
      const newBrand = await brand.create(req.body);
      res.status(201)
        .json({ message: "marca criada com sucesso", brand: newBrand });
    } catch (erro) {
      res.status(500)
        .json({ message: `${erro.message} - falha ao cadastrar marca` });
    }
  }

  static async updateBrand(req, res) {
    try {
      const id = req.params.id;
      const updatedBrand = await brand.findByIdAndUpdate(id, req.body, { new: true, });

      if (updatedBrand) {
        res.status(200)
          .send({ message: "marca atualizado com sucesso", brand: updatedBrand });
      } else {
        return res.status(404)
          .send({ message: "marca não encontrada" });
      }
    } catch (erro) {
      res.status(500)
        .json({ message: `${erro.message} - falha ao atualizar uma marca` });
    }
  }

  static async deleteBrand(req, res) {
    try {
      const id = req.params.id;
      await brand.findByIdAndDelete(id);
      res.status(200)
        .send({ message: "marca excluida com sucesso" });
    } catch (erro) {
      res.status(500)
        .json({ message: `${erro.message} - falha ao deletar uma marca` });
    }

  }

  
  static async listBrandsBySearch(req, res){
    try{
      const {brandName, country} = req.query;
      const searchList = {};
      if (brandName) searchList.brandName = {$regex: brandName}
      if(country) searchList.country = {$regex: country}
      const brandFound = await brand.find(searchList).populate("Brand");
      res.status(200).send(brandFound);
    }catch(erro){
      res.status(500)
      .json({ message: `${erro.message} - falha ao deletar uma marca` });
    }
  }
}

export default brandController;
