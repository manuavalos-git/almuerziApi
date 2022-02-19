const app=require('./api/app')

app.get('*',(require,response)=> {
    response.send("hola mundo")
})