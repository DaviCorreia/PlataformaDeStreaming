import express from 'express';

const app = express();

app.get('/users',(request,response)=>{

    const users = [
        {name:'Davi', age: 27},
        {name:'Davi', age: 27},
        {name:'Davi', age: 27},
        {name:'Davi', age: 27},
    ];
    return response.json(users);
    //console.log('Acessou a rota')
});

app.listen(3333);