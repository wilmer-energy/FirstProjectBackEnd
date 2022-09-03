const {employee}=require('../models/registrations.model')

//verificar que el usuario existe recibiento el id
async function ValidateUser(req,res,next){
    try{
        const {id}=req.params
        const dayFiltered=await employee.findOne({where: {id}})
        if(dayFiltered!==null){
            req.dayFiltered=dayFiltered
            next()
        }else{
            console.log('user does not exist');
            res.status(404).json({
                status: 'user does not exist'
            })
            res.end();
        }
        
        
    }catch{console.log('Unable to find the user');}
}

module.exports={ValidateUser}