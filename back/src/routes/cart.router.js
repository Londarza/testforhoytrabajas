import { Router } from "express";
import { addToCartController, getCartController } from "../controllers/cart.controller.js";

const router = Router()

router.get('/', getCartController)
router.post('/', addToCartController)

export default router