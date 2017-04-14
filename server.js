import express from 'express';
import path from 'path';

const app = express()

app.use('/img', express.static(path.join(__dirname, './src/resources/images')));

app.use('/css', express.static(path.join(__dirname, './src/resources/styles')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, './src/main.html'));
});

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
});
