const {Client} = require('pg');
const conString = "pg://postgres:332752@localhost:5432/tt"
const client = new Client(conString)


client.connect()
.then(() => console.log("okey"))
.then(() => client.query("select * from arr_Items"))
.then(result => console.table(result.rows))
.catch(e => console.log(e))
.finally(() => client.end())










// const {Client} = require('pg');
// const client = new Client({
//     user:"Fugerson",
//     pasword: "332752",
//     host: "гыук",
//     port: 5432,
//     database: "tt",
//     ssl: true
// })

// const client = new Client({
//     connectionString: connectionString
// })

// client.query('SELECT * from arr_Items', (err,res)=>{
// console.log(err, res)
// client.end()
//     }
// )