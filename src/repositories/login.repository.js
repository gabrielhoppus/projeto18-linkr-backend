import { db } from "../config/database.connection.js";

function findUser(email) {
    return db.query(`SELECT * FROM users 
    WHERE email=$1;`, [email]);

}

function insertUser({username, email, password, picture}) {
    return db.query(`INSERT INTO users 
    (username, email, password, picture)
    VALUES ($1, $2, $3, $4);`, [username, email, password, picture]);
}

function updateUserToken(user, token) {
    return db.query(`UPDATE users SET token=$1 WHERE id=$2;`,
        [token, user.id]);
}

export const loginRepository = {
    findUser,
    insertUser,
    updateUserToken
}