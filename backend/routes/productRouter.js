import express from "express";

const productRouter = express.Router();

productRouter.get("/", async (req, res) => {
  res.send({
    products: "something good",
  });
});

export default productRouter;
