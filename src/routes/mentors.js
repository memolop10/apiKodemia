const express = require('express')

const router = express.Router()

const mentor = require('../usecases/mentors')

router.get('/', async(req,res) =>{
    const mentors = await mentor.get()

    res.json({
        success:true,
        massage:'Done',
        payload:{
            mentors
        }
    })
})

router.post('/', async(req,res) =>{
    try {
        const mentorData = req.body
        const newMentor = await mentor.create(mentorData)

        res.json({
            success:true,
            message:'Nuevo mentor Creado',
            // nuevo mentor como json
            payload:{ mentor: newMentor}
        })
    } catch(error){
        res.status(400)
        res.json({
            success:false,
            message:'Mentor no fue creado',
            error:[
                error
            ]
        })
    }
})

//borrar mentor

router.delete('/:id', async(req,res) =>{
    try{
        const {id} = req.params
        const mentorDelete = mentor.del(id)

        res.json({
            success: true,
            message:'Mentor Borrado',
            payload:{mentor:mentorDelete}
        })
    }catch(error){
        res.status(400)
        res.json({
            succes:false,
            message:'mentor no pudo ser borrado',
            error:[
                error
            ]
        })
    }
})
//actualizar mentor
router.put('/', async(req,res) => {

    try{
    const putMentor = req.body;
    const mentorUpdate = await mentor.updatementor(putMentor)

    res.json({
        success:true,
        message:'mentor actualizado',
        payload:{
             mentorUpdate
        }
    });
    }catch(error){
        res.status(404);
        res.json({
            success:false,
            message:"mentor no actualizado",
            error:[
                error
            ]
        });
    }
});



module.exports = router