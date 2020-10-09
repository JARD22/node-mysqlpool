const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.use('/api',require('../routes/usuarios'))



app.listen(3000,()=>{
    console.log('Servidor en el puerto 3000')
});