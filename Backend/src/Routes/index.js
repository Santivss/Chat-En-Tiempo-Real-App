import express from "express";
import userRouter from "./user.routes.js";

const router = express();

router.use("/user", userRouter);

export default router;
