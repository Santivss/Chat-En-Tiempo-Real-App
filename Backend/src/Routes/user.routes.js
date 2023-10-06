import express from "express";
import axios from "axios";
import dotenv from "dotenv";

const router = express();

dotenv.config();

const PRIVATE_KEY = process.env.PRIVATE_KEY;

console.log(PRIVATE_KEY);

router.post("/authenticate", async (req, res, next) => {
  const { username } = req.body;
  try {
    const r = await axios.put(
      `https://api.chatengine.io/users/`,
      {
        username: username,
        secret: username,
        first_name: username,
      },
      { headers: { "private-key": PRIVATE_KEY } }
    );

    res.status(r.status).json(r.data);
  } catch (err) {
    res.status(err.response.status).json(err.response.data);

    next(err);
  }
});

export default router;
