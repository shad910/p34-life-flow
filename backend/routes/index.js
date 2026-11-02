import { Router } from "express";
import { endpointNotFound, getServerStatus } from "../controllers/server.controller.js";

const router = Router();

router.get("/", getServerStatus);
router.use(endpointNotFound);

export default router;
