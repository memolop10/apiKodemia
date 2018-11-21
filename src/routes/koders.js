const express = require('express')

const router = express.Router()

const koder = require('../usecases/koders')

router.get('/', async(req,res) =>{
    const koders = await koder.get()

    res.json({
        success:true,
        massage:'Done',
        payload:{
            koders
        }
    })
})

router.post('/', async(req,res) =>{
    try {
        const koderData = req.body
        const newKoder = await koder.create(koderData)

        res.json({
            success:true,
            message:'Nuevo koder Creado',
            // nuevo koder como json
            payload:{ koder: newKoder}
        })
    } catch(error){
        res.status(400)
        res.json({
            success:false,
            message:'Koder no fue creado',
            error:[
                error
            ]
        })
    }
})

//borrar koder

router.delete('/:id', async(req,res) =>{
    try{
        const {id} = req.params
        const koderDelete = koder.del(id)

        res.json({
            success: true,
            message:'Koder Borrado',
            payload:{koder:koderDelete}
        })
    }catch(error){
        res.status(400)
        res.json({
            succes:false,
            message:'koder no pudo ser borrado',
            error:[
                error
            ]
        })
    }
})
//actualizar koder
router.put('/', async(req,res) => {

    try{
    const putKoder = req.body;
    const koderUpdate = await koder.updatekoder(putKoder)

    res.json({
        success:true,
        message:'koder actualizado',
        payload:{
             koderUpdate
        }
    });
    }catch(error){
        res.status(404);
        res.json({
            success:false,
            message:"koder no actualizado",
            error:[
                error
            ]
        });
    }
});



module.exports = router