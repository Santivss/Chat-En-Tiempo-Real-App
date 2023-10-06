import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import routes from "./Routes/index.js";
import errorHandler from "./Middlewares/errorMiddleware.js";

const app = express();

dotenv.config();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors({ origin: true }));

app.use(routes);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
