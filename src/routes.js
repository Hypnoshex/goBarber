import { Router } from "express";

const routes = new Router();

routes.get("/", (req, res) => {
  return res.json({
    meuPenis: "30cm"
  });
});

export default routes;
