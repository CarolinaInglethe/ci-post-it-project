import express  from "express";

const router = express.Router();

router.get("/", getLembretes);

export default router;