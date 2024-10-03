const express = require('express');
const fs = require("fs");
const path = require("path");
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    const filePath = path.join(__dirname, 'index.html');
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Erro ao ler o arquivo.');
        } else {
            res.send(data);
        }
    });
});


app.get('/api/data', (req, res) => {
    const bdPath = path.join(__dirname, 'db.json');
    fs.readFile(bdPath, 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Erro ao ler o arquivo JSON.');
        } else {
            try {
                const jsonData = JSON.parse(data);
                res.json(jsonData);
            } catch (parseErr) {
                res.status(500).send('Erro ao processar o JSON.');
            }
        }
    });
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
