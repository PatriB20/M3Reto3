const http = require ("http")
const server = http.createServer(function(request, response){
    console.log("Peticion recibida por el cliente");
    console.log("Method: " +request.method);
    console.log("Url: " +request.url);
    console.log("Response Status code: " + response.statusCode);
    response.writeHead(200,{"Content-length":120,
                            "User-Agent": "<Producto> / <Versión del producto> <Comentarios></Comentarios>",
                            "Content-Type":"application/json"})

    let text = {ok:true,message: "Recibido"};
        text= JSON.stringify(text);
        response.write(text);
  
    if (request.url=="/bye"){
        response.writeHead(200,{"Content-length":120,
                                "user-agent": "<Producto> / <Versión del producto> <Comentarios></Comentarios>",
                                "Content-Type":"application/json"})
                                
        let text = {ok:true, message: "Adios!"};
        text= JSON.stringify(text);
        response.write(text);
    }
    response.end();
});

server.listen(3000);