import { VoluntersToCart } from "../model/voluntersToCart.js"

const findAllVolunter = (req,res) => {
    try {
        const getAllVolunters = VoluntersToCart.findAll()
        res.status(200).send(getAllVolunters)
    } catch (error) {
        res.status(500).send(error)     
    }
}

export{findAllVolunter}