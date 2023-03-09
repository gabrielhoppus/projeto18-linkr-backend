import { db } from "../config/database.connection.js";

export async function savePost (user, comment,url, urlTitle, urlDescription, urlImage) {
    return db.query(`INSERT INTO posts (user_id, url, comment, title, description, image) VALUES ($1, $2, $3, $4, $5, $6);`,
    [user, comment, url, urlTitle, urlDescription, urlImage]);
}

export async function sendPosts () {
    return db.query(`SELECT * FROM posts;`);
}

export async function getToken(token){
    return db.query(`SELECT * FROM users WHERE token = $1;`, [token])
}
