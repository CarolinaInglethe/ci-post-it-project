import express  from "express";
import { addLembrete, deleteLembrete, getAll } from "../controllers/lembretes.js"

const router = express.Router();

router.get("/", getAll);

router.post("/", addLembrete);

router.delete("/:id", deleteLembrete);

export default router;