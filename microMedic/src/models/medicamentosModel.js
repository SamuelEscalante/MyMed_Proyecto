const mysql = require('mysql2/promise');
const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'inventariomymed'
});
async function traermedicamentos() {
    const result = await connection.query('select * from medicamentos;');
    return result
}
async function traermedicamento(ID_MEDICAMENTO) {
    const result = await connection.query('SELECT * FROM medicamentos WHERE ID_MEDICAMENTO = ? ', [ID_MEDICAMENTO]);
    return result;
}
async function actualizarmedicamento(ID_MEDICAMENTO, INVENTARIO) {
    const result = await connection.query('UPDATE medicamentos SET INVENTARIO = ? WHERE ID_MEDICAMENTO = ? ', [INVENTARIO, ID_MEDICAMENTO]);
    return result;
}
async function crearmedicamento(DESCRIPCION, PRECIO_UNITARIO, INVENTARIO) {
    const result = await connection.query('INSERT INTO medicamentos VALUES(null,?,?,?)', [DESCRIPCION, PRECIO_UNITARIO, INVENTARIO]);
    return result;
}
module.exports = {
    traermedicamentos, traermedicamento, actualizarmedicamento, crearmedicamento
};