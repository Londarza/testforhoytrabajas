import { getAllProdService } from "../services/products.service.js"

export const getAllProdsController = async (req, res) =>{
    const allProducts = await getAllProdService()

    res.json(allProducts)
}