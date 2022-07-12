const jwt = require("jsonwebtoken");

module.exports.requireAuth = async (req,res,next) => {
    const token = await req.headers.authorization
    if(token){
        jwt.verify(token,process.env.JWT_SECRET_KEY,(err,decoded)=> {
            if(err){
                console.log(err.message);
                res.redirect('/')
            }else {
                console.log(decoded);
                req.body._id = decoded.id
                next();
            }
        })
    }else {
        res.redirect('/');
    }
    
}




module.exports.restrectTo = (...role) => {
    return (req,res,next) => {
        if(role.inclouds(req.user.role)){
            return res.status(403).send('Worning !! your not alowed to access this. ')
        }
        next();
    }
}