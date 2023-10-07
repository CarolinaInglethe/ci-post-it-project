import express  from "express";
import { getAll } from "../controllers/lembretes"

const router = express.Router();

router.get("/", getAll);

export default router;