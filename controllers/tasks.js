const Task=require('../models/Task')

const getAllTasks= async (req,res)=>{
   try {
    const task = await Task.find({})
    res.status(200).json({task})
   } catch (error) {
  
   }
}
const creatTask= async (req,res)=>{
try {
    const task =await Task.create(req.body)
    res.status(201).json({task})
} catch (error) {
    res.status(500).json({msg:error})
    
}
}
//get single task
const getTask=async (req,res)=>{
    try{
        const {id:taskID} =req.params
        const task=await Task.findOne({_id:taskID});
        if(!task){
            return res.status(404).json({msg:`No task with id : ${taskID}`})
        }

    res.status(200).json({task})
}catch(error){

    res.status(500).json({msg:error})
}
}

//delete specified task
const deleteTask=async (req,res)=>{
    try {
        const { id:taskID } =req.params
        const task= await Task.findOneAndDelete({ _id:taskID });
        if(!task){
            return res.status(404).json({msg:`No task with id : ${taskID}`})
        }
        res.status(200).json({task})
    } catch (error) {
        res.status(500).json({msg:error})
    }

    res.send('delete task')
}

const updateTask=async (req,res)=>{
    try {
        const {id:taskID} =req.params

        const task = await Task.findOneAndUpdate({_id:taskID}, req.body, {
            new:true,
            runValidators:true
        })

        if(!task){
            return res.status(404).json({msg:`No task with id : ${taskID}`})
        }

        res.status(200).json({task})
    } catch (error) {
        res.status(500).json({msg:error})
    }

}

module.exports={
    getAllTasks,
    creatTask,
    getTask,
    updateTask,
    deleteTask
}