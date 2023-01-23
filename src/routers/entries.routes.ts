import { Router } from "express";
import {deleteEntry, editEntry, getEntriesList, getEntry, postEntry} from "../controllers/entries.controller.js";

const router = Router();

router.get("/entries", getEntriesList)
router.get("/entries/:id", getEntry)
router.post("/entries", postEntry)
router.put("/entries/:id", editEntry)
router.delete("/entries/:id", deleteEntry)

export default router;
