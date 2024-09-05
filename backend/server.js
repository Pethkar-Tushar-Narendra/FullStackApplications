import express from "express";
import path from "path";
import productRouter from "./routes/productRouter.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// const __dirname = path.resolve();
// app.use(express.static(path.join(__dirname, "/frontend/dist")));
// app.get("*", (req, res) =>
//   res.sendFile(path.join(__dirname, "/frontend/dist/index.html"))
// );

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

app.use("/api/products", productRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});
