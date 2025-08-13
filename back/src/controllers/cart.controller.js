import { addToCartService, getCartService } from "../services/cart.service.js"


export const getCartController = (req,res)=>{
    const cart = getCartService()
    res.json(cart)
}

export const addToCartController = (req,res) =>{
    try {
        const {id} = req.body
        const product = addToCartService(id)
        res.status(201).json({
            message:'Producto Agregado al carrito',
            product
        })
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}