//  bom o que eu sei ?:
//  preciso comparar se o valor do usuario cadastrado, é exatamente igual ao valor da tabela de escala, 
//  preciso que 2 usuarios sejam escalados dentro do mesmo turno entao a tabela tem que ter: usuario 1 e usuario 2
//  vão ter varios usuarios então o sistema pegara 2 que estiverem com os mesmos dados cadastrados e colocara com outro num mesmo dia    
//  entao a tabela no campo daysOfTheWeek vai conter os valores dias da semana: "segunda","terça","quarta" 
// o usuario que no tiver o valor no campo do atributo de:"segunda" vai pra lá.

import { ShiftSchedule } from "../model/shiftSchedule.js"
import { VoluntersToCart } from "../model/voluntersToCart.js"

const assingmentController = async (req,res) => {
    try {
        const getValuesShiftSchedule = await ShiftSchedule.findByPk(req.params.id)       
        const getValueVoluntersToCart = await VoluntersToCart.findByPk(req.params.id)    
        
        if(getValuesShiftSchedule === getValueVoluntersToCart){
           res.status(200).send(console.log("user atribued!"))   
        }
    } catch (error) {
        res.status(500).send(error, "error in require")
    }
}

export {assingmentController}
