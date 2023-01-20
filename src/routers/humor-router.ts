import { Router } from "express";
import { getHumors, postHumor, putHumor, deleteHumor } from "../controllers/humor-controller.js";
import { postSchemaValidation, humorExistenceValidation } from "../middlewares/humor-middleware.js";

const router = Router();

router.get("/humors", getHumors);
router.post("/humor", postSchemaValidation, postHumor);
router.put("/humor/:id", humorExistenceValidation, putHumor);
router.delete("/humor/:id", humorExistenceValidation, deleteHumor);

export default router;