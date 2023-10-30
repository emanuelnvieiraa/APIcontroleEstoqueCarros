import express from "express";
import carController from "./controller/carController.js"
const routes = express.Router();
routes.get("/cars", carController.ListCars);

export default routes;