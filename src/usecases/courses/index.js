const Courses = require('../../models/courses').model


async function get() {
    const allCourses = await Courses.find({}).exec()
    return allCourses
    
}

async function create(coursesData) {
    
    const existingCourses = await Course.find({...coursesData})

    const courseExist = existingCourses.length>0

    if(courseExist) throw new Error(' El curso ya existe')
    //nuevo model       //constructor
    const course = new Course(coursesData)

        //forzaremos una promesa
    const courseCreate = await course.save()
    return courseCreate
}

    //Eliminar curso

    async function del(id){
        return Course.findByIdAndDelete(id).exec()
    }

    function getById(id){
        return Course.findById(id).exec()
    }

    const updateCourse = (MentorData) =>{
        return Course.findByIdAndUpdate(CourseData._id,dataCourse).exec();
    }


    module.exports={
        get,
        create,
        del,
        getById,
        updateCourse
    }