const Pool = require('pg').Pool;

const conopts = {
    user: 'postgres',
    password: 'karrikoira',
    host: 'localhost',
    database: 'world'
};

const pool = new Pool(conopts);

function countries() {
    return pool.connect()
        .then(client => {
            let sql = "SELECT name, continent, population FROM country ORDER BY name";
            return client.query(sql)
                .then(res => {
                    client.release();
                    return res.rows;
                })
                .catch(err => {
                    client.release();
                    throw err;
                });
        });
};

function allafrica() {
    return pool.connect() 
        .then(client => {
            let sql="SELECT name, population FROM country WHERE continent='Africa' ";
            return client.query(sql)
                .then(res => {
                    client.release();
                    console.log(res.rows);
                    return res.rows;
                })
                .catch(err => {
                    client.release();
                    throw err;
                });
        });
};

function allasia() {
    return pool.connect() 
        .then(client => {
            let sql="SELECT name, population FROM country WHERE continent='Asia' ";
            return client.query(sql)
                .then(res => {
                    client.release();
                    console.log(res.rows);
                    return res.rows;
                })
                .catch(err => {
                    client.release();
                    throw err;
                });
        });
};

function allantarctica() {
    return pool.connect() 
        .then(client => {
            let sql="SELECT name, population FROM country WHERE continent='Antarctica' ";
            return client.query(sql)
                .then(res => {
                    client.release();
                    console.log(res.rows);
                    return res.rows;
                })
                .catch(err => {
                    client.release();
                    throw err;
                });
        });
};

function alleurope() {
    return pool.connect() 
        .then(client => {
            let sql="SELECT name, population FROM country WHERE continent='Europe' ";
            return client.query(sql)
                .then(res => {
                    client.release();
                    console.log(res.rows);
                    return res.rows;
                })
                .catch(err => {
                    client.release();
                    throw err;
                });
        });
};

function alloceania() {
    return pool.connect() 
        .then(client => {
            let sql="SELECT name, population FROM country WHERE continent='Oceania' ";
            return client.query(sql)
                .then(res => {
                    client.release();
                    console.log(res.rows);
                    return res.rows;
                })
                .catch(err => {
                    client.release();
                    throw err;
                });
        });
};

function allnorthamerica() {
    return pool.connect() 
        .then(client => {
            let sql="SELECT name, population FROM country WHERE continent='North America' ";
            return client.query(sql)
                .then(res => {
                    client.release();
                    console.log(res.rows);
                    return res.rows;
                })
                .catch(err => {
                    client.release();
                    throw err;
                });
        });
};

function allsouthamerica() {
    return pool.connect() 
        .then(client => {
            let sql="SELECT name, population FROM country WHERE continent='South America' ";
            return client.query(sql)
                .then(res => {
                    client.release();
                    console.log(res.rows);
                    return res.rows;
                })
                .catch(err => {
                    client.release();
                    throw err;
                });
        });
};

function capitals() {
    return pool.connect() 
        .then(client => {
            let sql="SELECT name FROM city";
            return client.query(sql)
                .then(res => {
                    client.release();
                    console.log(res.rows);
                    return res.rows;
                })
                .catch(err => {
                    client.release();
                    throw err;
                });
        });
};
    
module.exports = { countries, allafrica, allasia, allantarctica, alleurope, allnorthamerica, alloceania, allsouthamerica, capitals };