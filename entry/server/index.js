import express from 'express';
import getTemplate from './template';

const app = express()
app.use(express.static('public'));


app.get('*', (req, res) => res.send(
    getTemplate(req)
))

app.listen(3000, () => console.log('Example app listening on port 3000!'))