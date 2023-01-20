import { Router } from "express";
import { getHumors, postHumor, putHumor, deleteHumor } from "../controllers/humor-controller.js";

const router = Router();

router.get("/humors", getHumors);
router.post("/humor", postHumor);
router.put("/humor/:id", putHumor);
router.delete("/humor/:id", deleteHumor);

export default router;