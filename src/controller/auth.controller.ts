import pool from '../database';
import { encryptPassword, matchPassword } from '../libs/encrypt'
import jwt from 'jsonwebtoken'



export async function iniciarSesion(req,res) {
    const { email, password } = req.body;
    const datosConsulta = await pool.query('SELECT * FROM Person WHERE email = ?',[email.toLowerCase()]);
    if(datosConsulta.length > 0){
        const user = datosConsulta[0];
        const validPassword = await matchPassword(password,user.password)
        if(validPassword){
            const token = jwt.sign({email:email, password:password},"secret");
            return res.status(200).json({token});
        }else{
            return res.status(404).json({message:"Password incorrecto"});
        }
    }
    res.status(404).json({message:"El email no esta registrado"})
}

export async function registrarse(req,res) {
    const {
        firstname,
        lastname,  
        email,
        user,
        password,
        phone,
    } = req.body;
    const comprabando = await pool.query('SELECT * FROM Person WHERE email = ?',[email.toLowerCase()])
    if(comprabando.length > 0 ){
        if(comprabando[0].email === email.toLowerCase()){
            return res.json({message:"El email ya esta en uso"})
        }
    }
    const passwordEncrypt = await encryptPassword(password)
    const newPerson ={
        firstname,
        lastname,
        user,
        phone,
        type:'U',
        email:email.toLowerCase(),
        password:passwordEncrypt,
    } 
    const token = jwt.sign({email:newPerson.email, password:passwordEncrypt},"secreto")
    await pool.query('INSERT INTO Person set ?',newPerson)
    res.json({token})
}

