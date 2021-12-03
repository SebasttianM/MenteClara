import pool from "../database";


export async function getUsers(req,res) {
    const users:any[] = await pool.query('SELECT * FROM Person');
    res.json(users);
}
