async function getUserById(req,res){
    try{
        const user=await User.findById(req.params.id);
        if(!user){
            return res.status(404).json({
                message:"User not found"
            });
        }
        return res.status(200).json({
            user:user
        });
    }catch(error){
        return res.status(500).json({
            message:"Internal server error"
        });
    }
}