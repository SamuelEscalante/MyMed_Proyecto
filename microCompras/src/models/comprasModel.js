const mysql = require('mysql2/promise');
const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'inventariomymed'
});
async function crearCompra(compra) {
    const user = compra.user;
    const totalCuenta = compra.totalCuenta;
    const FechaCompra = compra.FechaCompra
    const result = await connection.query('INSERT INTO compras VALUES (null, ?, ?, Now())', [user, totalCuenta, FechaCompra]);
    return result;
}
async function traerCompra(id) {
    const user = await connection.query('SELECT nombre FROM usuarios WHERE usuario = ?', id);
    const result = await connection.query('SELECT totalCuenta, DATE_FORMAT(FechaCompra, "%M %e %Y") as FechaCompra, id  FROM compras WHERE nombreCliente = ? ', user[0][0].nombre);
    return result[0];
}

async function traerCompraCliente(nombre) {
    const result = await connection.query('SELECT * FROM compras WHERE nombreCliente = ?', nombre);
    return result[0];
}


async function traerCompras() {
    const result = await connection.query('SELECT * FROM compras');
    return result[0];
}
    module.exports = {
    crearCompra,
    traerCompra,
    traerCompras,
    traerCompraCliente
};
