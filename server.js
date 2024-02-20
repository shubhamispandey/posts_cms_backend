import express from "express";
import routes from "./routes/index.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

routes.forEach(({ method, path, handler }) => {
  app[method](`/api/${path}`, handler);
});

const PORT = 8080;
app.listen(PORT, () => console.log("Server is running on port 8080"));
