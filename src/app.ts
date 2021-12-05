import express from 'express';
import morgan from 'morgan'
import { encryptPassword } from './libs/encrypt';
import cors from 'cors';



//Importando rutas
import userRoute from './routes/user.routes';
import authRoute from './routes/auth.routes';
import articleRoute from './routes/articles.routes'

const app = express();
const port = 3000;


app.use(cors())
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));



app.get('/', async (req, res) => {
    res.json("API REST MISIONTIC");
});

app.listen(port, () => {
    return console.log(`Server is working on ${port}`);
});


app.use('/api/users',userRoute);
app.use('/login',authRoute)
app.use('/api/',articleRoute)
