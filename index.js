import express from "express";
import books from "./carRoutes.js";

const routes = (app) => {
  app.route("/").get((req, res) => res.status(200).send("Car Stock API"));

  app.use(express.json(), cars);
};

export default routes;