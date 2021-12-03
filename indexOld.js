const http = require('http');

//Creamos el servidor,recibe una funcion callback que recibe las peticiones que entran al servidor(request) y sus respuestas(response)
//con el listen especificamos en que puerto va a escuchar la app, en node en gral 3000

http.createServer((request,response) => {
    
    console.log(request);
    response.writeHead(200,{'Content-Type':'application/json'}); //avisamos desde el servidor que esta todo ok y avisamos que enviamos como contenido un json
    
    const user = {id:123, name:'Matias'}; //creamos un objeto para enviar

    response.write(JSON.stringify(user)); //la respuesta vamos a publicarla en el navegador
    response.end(); //para que no quede esperando


}).listen(3000);


