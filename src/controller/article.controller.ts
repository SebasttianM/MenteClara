import pool from '../database'


 export async function getArticulos (req,res){
    const articulos:any[] = await pool.query("SELECT * FROM articulos");
    res.json(articulos);
}


export async function addArticulos (req,res){
    const { id } = req.params;
    const articulos:any[] = await pool.query("SELECT * FROM articulos WHERE id = ?",id);
    res.json(articulos)
}


export async function getArticuloById (req,res){
    const { titulo, categoria, descripcion, autor } = req.body;
    const articulo = {
        titulo,
        categoria,
        descripcion,
        autor
    }

    await pool.query("INSERT INTO articulos set ?",articulo)
    res.json({message:'articulo agregado correctamente'})
}


export async function editArticulos(req,res){
    const { id } = req.params;
    const { titulo, categoria, descripcion, autor } = req.body;
    
    const articulo = {
        titulo,
        categoria,
        descripcion,
        autor
    }

    await pool.query("UPDATE articulos set ?  WHERE id =  ?",[articulo,id])
}

export async function deleteArticulo (req,res){
    const { id } = req.params;
    await pool.query("DELETE FROM articulos WHERE id = ?",[id])
    res.status(204).json()
}