import express from 'express';

const app = express();
const port = 3000;
app.get('/', (req, res) => {
    res.send('Server Test..');
});

app.listen(port, () => {
    return console.log(`Server is working on ${port}`);
});
