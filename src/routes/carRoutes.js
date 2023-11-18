import express from "express";
import carController from "../controller/carController.js"

const routes = express.Router();

routes.get("/cars", carController.listCars);
routes.get("/cars/:id", carController.listCarsById);
routes.post("/cars", carController.createCar);
routes.patch("/cars/:id", carController.updateCar);
routes.delete("/cars/:id", carController.deleteCar);

export default routes;