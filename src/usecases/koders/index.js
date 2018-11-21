const Koder = require('../../models/koder').model

async function get() {
    const allKoders = await Koder.find({}).exec()
    return allKoders
    
}

async function create(koderData) {
    
    const existingKoders = await Koder.find({...koderData}).exec()

    const koderExist = existingKoders.length > 0

    if(koderExist) throw new Error(' El koder ya existe')
    //nuevo model       //constructor
    const koder = new Koder(koderData)

        //forzaremos una promesa
    const koderCreate = await koder.save()
    return koderCreate
}

    //Eliminar koder

    async function del(id){
        return Koder.findByIdAndDelete(id).exec()
    }

    const updateKoder = (KoderData) =>{
        return Koder.findByIdAndUpdate(KoderData._id,dataKoder).exec();
    }

    

    module.exports={
        get,
        create,
        del,
        updateKoder
    }




