const jwt=require("jsonwebtoken");
const sign=user=>jwt.sign({id:String(user._id),name:user.name,email:user.email,role:user.role},process.env.JWT_SECRET,{expiresIn:"1h"});
const verify=token=>jwt.verify(token,process.env.JWT_SECRET);
function auth(req,res,next){try{const t=(req.headers.authorization||"").replace(/^Bearer\s+/i,"");if(!t)return res.status(401).json({message:"Authentication required"});req.user=verify(t);next()}catch{return res.status(401).json({message:"Invalid or expired token"})}}
const allow=(...roles)=>(req,res,next)=>roles.includes(req.user.role)?next():res.status(403).json({message:"Insufficient role"});
module.exports={sign,verify,auth,allow};
