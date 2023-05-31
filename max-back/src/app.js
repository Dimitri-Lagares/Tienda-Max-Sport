import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { pool } from './db.js'
import { PORT } from './config.js';

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/', (request, response) => {
    response.send('App Running')
});

app.get(`/pqr's-list`, async(req, res) => {
    const [result] = await pool.query(`SELECT * FROM pqr's-table`)
    res.json(result);
});
     
// app.post(`/send-pqr`, async(req, res) => {
//     const pqrObj = {
//         nombre: req.body.nombre,
//         correo: req.body.correo,
//         telefono: req.body.telefono,
//         solicitud: req.body.solicitud,
//         comentario: req.body.comentario
//     };
//     await pool.query(`INSERT INTO pqr's-table SET ? `, pqrObj)
//     res.send('pqr registered Successfully');
// });

app.post(`/send-pqr`, async(request, response) => {
    await pool.query(`INSERT INTO pqr's-table SET ?`, request.body,)
        response.send('pqr registered Successfully');
});

app.put(`/update-pqr's-state/:id`, async(request, response) => {
    const id = request.params.id;
    await pool.query(`UPDATE pqr's-table SET ticket's-state = ? WHERE id = ?`, [request.body, id])
    response.send('Updated Successfully')
});
                    
app.delete(`/delete-pqr/:id`,async(req,res) => {
    const id = req.params
    await pool.query(`DELETE FROM pqr's-table WHERE id = ${id.id}`)
        res.send('Pqr deleted Successfully')

});
 app.listen(PORT, ()=> console.log(`Server Running on PORT '${PORT}'`));
