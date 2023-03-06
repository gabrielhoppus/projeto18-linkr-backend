import { connectionDB } from "../database/database.js";

function findUser(email) {
    return connectionDB.query(`SELECT * FROM users 
    WHERE email=$1;`, [email]);

}

function insertUser({username, email, password, picture}) {
    return connectionDB.query(`INSERT INTO users 
    (email, username, password, picture)
    VALUES ($1, $2, $3, $4);`, [username, email, password, picture]);
}

export const loginRepository = {
    findUser,
    insertUser
}