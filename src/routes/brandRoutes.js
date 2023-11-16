import express from "express";
import brandController from "../controller/brandController.js";

const routes = express.Router();

routes.get("/brands", brandController.listbrand);
routes.get("/brands/:id", brandController.listbrandById);
routes.post("/brands", brandController.createbrand);
routes.patch("/brands/:id", brandController.updatebrand);
routes.delete("/brands/:id", brandController.deletebrand);

export default routes;