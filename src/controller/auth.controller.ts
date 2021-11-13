import pool from '../database';
import { encryptPassword, matchPassword } from '../libs/encrypt'
import jwt from 'jsonwebtoken'


export async function iniciarSesion(req, res) {
    const { email, password } = req.body;
    const datosConsulta = await pool.query('SELECT * FROM Person WHERE email = ?', [email.toLowerCase()]);
    if (datosConsulta.length > 0) {
        const user = datosConsulta[0];
        const validPassword = await matchPassword(password, user.password)
        if (validPassword) {
            const token = jwt.sign({ email: email, password: password }, "secret");
            return res.status(200).json({ token });
        } else {
            return res.status(404).json({ message: "Password incorrecto" });
        }
    }
    res.status(404).json({ message: "El email no esta registrado" })
}

export async function registrarse(req, res) {
    const {
        identification,
        firstname,
        lastname,
        email,
        user,
        password,
        phone,
    } = req.body;
    const comprabandoIdentification = await pool.query('SELECT * FROM Person WHERE identification = ?', [identification]);
    const comprabandoEmail = await pool.query('SELECT * FROM Person WHERE email = ?', [email.toLowerCase()]);
    const comprabandoUser = await pool.query('SELECT * FROM Person WHERE user = ?', [user.toLowerCase()]);
    const comprabandoPhone = await pool.query('SELECT * FROM Person WHERE phone = ?', [phone]);


    if (comprabandoIdentification.length > 0) {
        return res.json({ message: "La cedula ya esta registrado" });
    }

    if (comprabandoEmail.length > 0) {
        return res.json({ message: "El email ya esta en uso" });
    }

    if (comprabandoUser.length > 0) {
        return res.json({ message: "El usuario ya esta registrado" });
    }

    if (comprabandoPhone.length > 0) {
        return res.json({ message: "El numero de telefono ya esta registrado" });
    }


    const passwordEncrypt = await encryptPassword(password)
    const newPerson = {
        identification,
        firstname,
        lastname,
        user: user.toLowerCase(),
        phone,
        type: 'U',
        email: email.toLowerCase(),
        password: passwordEncrypt,
    }
    const token = jwt.sign({ email: newPerson.email, password: passwordEncrypt }, "secret")
    await pool.query('INSERT INTO Person set ?', newPerson)
    res.json({ token })
}

