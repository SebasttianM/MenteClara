import express from 'express';
import morgan from 'morgan'
import { encryptPassword } from './libs/encrypt';


//Importando rutas
import userRoute from './routes/user.routes';
import authRoute from './routes/auth.routes';

const app = express();
const port = 3000;

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.get('/', async (req, res) => {
     var x = await encryptPassword("Yomando23");
    res.json(x);
});

app.listen(port, () => {
    return console.log(`Server is working on ${port}`);
});


app.use('/api/users',userRoute);
app.use('/login',authRoute)
