import express from 'express';

const app = express();
app.use(express.json());

app.get('/',(request,response)=>{
    
    return response.json({message: 'Hello'});
    //console.log('Acessou a rota')
});

app.listen(3333);