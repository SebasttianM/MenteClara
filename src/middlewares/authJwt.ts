import jwt from 'jsonwebtoken'
import pool from '../database';



//Verificando el token de acceso
export const verifyToken = async (req,res,next) =>{
    const token = req.headers["x-access-token"];
    if(!token) return res.status(403).json({message:"No hay token no pasas :)"});
    try{
        const pase = jwt.verify(token,"secret") // A definer despues
        req.user = pase.email
        const datos = await pool.query('SELECT * FROM Person WHERE email= ? AND password = ?',[pase.email,pase.password])
        if(datos.length < 0 ) return res.json('Usuario no existe')

    }catch(e){
        return res.status(403).json({message:"Este token es invalido"})
    }
  
    next();
}

//Verificando Rol del usuario
export const verifyRol = async(req,res,next) => {
    const row =  await pool.query('SELECT * FROM Person WHERE email = ?',[req.user])
    if(row.length > 0 ){
        if(row[0].type === 'U'){
            return res.status(403).json({message:"Prohibido"})
        }
    }
    next();
}