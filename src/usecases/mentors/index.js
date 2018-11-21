const Mentor = require('../../models/mentor').model

async function get() {
    const allMentors = await Mentor.find({}).exec()
    return allMentors
    
}

async function create(mentorData) {
    
    const existingMentors = await Mentor.find({...mentorData})

    const mentorExist = existingMentors.length>0

    if(mentorExist) throw new Error(' El mentor ya existe')
    //nuevo model       //constructor
    const mentor = new Mentor(mentorData)

        //forzaremos una promesa
    const mentorCreate = await mentor.save()
    return mentorCreate
}

    //Eliminar mentor

    async function del(id){
        return Mentor.findByIdAndDelete(id).exec()
    }

    function getById(id){
        return Mentor.findById(id).exec()
    }

    const updateMentor = (MentorData) =>{
        return Mentor.findByIdAndUpdate(MentorData._id,dataMentor).exec();
    }


    module.exports={
        get,
        create,
        del,
        getById,
        updateMentor
    }




