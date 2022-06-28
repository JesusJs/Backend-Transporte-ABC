import sql from 'mssql'

const dbSettings = {
user: "ABC",
password: "abc123",
server: "SNK-\\LOCALHOST",
database: "ABC",
options:{
    encrypt: true,
    trustServerCertificate:true
},

};

export async function getConnection (){
    try {
        const pool = await sql.connect(dbSettings);
        return pool;
    } catch (error) {
        console.error( error)
    }
}

export {sql}