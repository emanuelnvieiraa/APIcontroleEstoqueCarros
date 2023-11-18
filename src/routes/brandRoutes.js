import express from "express";
import brandController from "../controller/brandController.js";

const routes = express.Router();

routes.get("/brands", brandController.listBrands);
routes.get("/brands/:id", brandController.listBrandsById);
routes.post("/brands", brandController.createBrand);
routes.patch("/brands/:id", brandController.updateBrand);
routes.delete("/brands/:id", brandController.deleteBrand);

export default routes;