import products from "../models/index.js"

const cart = []

export const getCartService = ()=>{ return cart}

export const addToCartService = (id) =>{
    const idProduct = products.find((p)=>p.id === id)

    if (!idProduct) {
        throw new Error('No se encontró el producto.')
    }
    cart.push(idProduct)

    return idProduct
}