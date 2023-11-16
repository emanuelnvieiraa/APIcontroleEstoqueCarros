import express from "express";
import cars from "./carRoutes.js";
import brands from "./brandRoutes.js";

const routes = (app) => {
  app.route("/").get((req, res) => res.status(200).send("Car Stock API"));

  app.use(express.json(), cars);
  app.use(express.json(), cars, brand);
};

export default routes;