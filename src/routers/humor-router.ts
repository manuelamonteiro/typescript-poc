import { Router } from "express";

const router = Router();

router.get("/humors");
router.post("/humor");
router.put("/humor/:id");
router.delete("/humor/:id");

export default router;