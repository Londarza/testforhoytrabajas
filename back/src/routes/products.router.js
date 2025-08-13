import { Router } from "express";
import { getAllProdsController } from "../controllers/products.controller.js";

const router = Router()

router.get('/',getAllProdsController )

export default router