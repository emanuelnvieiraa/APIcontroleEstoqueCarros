import express from "express";
import AuthorController from "../controllers/authorController.js";

const routes = express.Router();

routes.get("/brands", AuthorController.listbrand);
routes.get("/brands/:id", AuthorController.listbrandById);
routes.post("/brands", AuthorController.createbrand);
routes.patch("/brands/:id", AuthorController.updatebrand);
routes.delete("/brands/:id", AuthorController.deletebrand);

export default routes;