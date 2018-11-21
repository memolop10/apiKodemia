const express = require('express')
const router = express.Router()
const course = require('../usecases/courses')


router.get('/',async(req,res) =>{
    try{
        const allCourses = await course.get()

        res.json({
            success:true,
            message:"Nuestros cursos",
           payload:{
               allCourses
           } 
        })
    }catch(error){
        res.status(404)
        res.json({
            success:false,
            message:'No se encontraron cursos',
            error:[
                error
            ]
        })
    }
})

router.post('/', async(req,res) =>{
    try{
        const courseData = req.body
        const newCourse = await course.create(courseData)

        res.json({
            success:true,
            message:'Curso creado',
            payload:{
                newCourse
            }
        })
    }catch(error){
        res.status(404)
        res.json({
            success:false,
            message:"No se creo el curso",
            error:[
                error
            ]
        })
    }
})

router.delete('/:id', async(req,res) =>{
    try{
        const { id } = req.params
        const deleteCourse = await course.del(id)

        res.json({
            success:true,
            message:'Curso borrado',
            payload:{
                course:deleteCourse
            }
        })
    }catch(error){
        res.status(404)
        res.json({
            success:false,
            message:'Curso no fue borrado',
            error:[
                error
            ]

            
        })
    }
})


router.put('/',async(req,res) =>{
    try{
        const putCourse = req.body
        const coursePut = await course.updateCourse(putCourse)

        res.json({
            success:true,
            message:'Curso actualizado',
            payload:{
                course: coursePut
            }
        })
    }catch(error){
        res.status(404)
        res.json({
            success:false,
            message:'Curso no fue actualizado',
            error:[
                error
            ]
        })
    }
})



module.exports = router