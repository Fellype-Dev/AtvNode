const fs = require("fs");
const http = require("http");
const path = require("path");

const { numAleatorio } = require("./utils.js");

http.createServer(function(req, res){

    if(req.url === "/sobre"){
        fs.readFile("sobre.html", function(err, data){
            res.writeHead(200, {"Content-Type": "text/html"});
            res.end(data);
        });
    }

    if(req.url === "/"){
        fs.readFile("index.html", function(err, data){
            res.writeHead(200, {"Content-Type": "text/html"});
            res.end(data);
        });
    }

    if(req.url === "/contato"){
        fs.readFile("contato.html", function(err, data){
            res.writeHead(200, {"Content-Type": "text/html"});
            res.end(data);
        });
    }

        if (req.url === "/numero") {
            const numero = numAleatorio();
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end(`Número aleatório: ${numero}`); 
        }

        else if (req.url.startsWith("/saudacao/") && req.method === "GET") {
            const nome = req.url.split("/")[2];
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write("<h2>Ola, " + nome + "!</h2>");
            res.end();
        }

}
    ).listen(8080);

