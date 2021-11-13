import bcrypt from 'bcryptjs';


//Encriptando el password
export async function encryptPassword (password:string){
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password,salt);
    return hash;
}

//Desencripta y compara el password
export async function matchPassword (password:string,savedPassword:string) {
    try{
        return await bcrypt.compare(password,savedPassword)
    }catch(e){
        console.log(e)
    }
}
