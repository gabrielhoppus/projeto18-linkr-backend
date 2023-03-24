import { db } from "../config/database.connection.js";

export async function insertLike(user_id, post_id){
    return db.query(`INSERT INTO likes (user_id, post_id) VALUES ($1, $2) RETURNING *`, [user_id, post_id]);
}

export async function deleteLike(user_id, post_id){
    return db.query(`DELETE FROM likes WHERE user_id = $1 AND post_id = $2`, [user_id, post_id])
}

export async function listLikes(user_id, post_id){
    return db.query(`SELECT * FROM likes WHERE user_id = $1 AND post_id = $2`, [user_id, post_id])
}

export async function fetchLikes(user_id){
    return db.query(`SELECT ARRAY_AGG(post_id) FROM likes WHERE user_id = $1;`, [user_id])
}

export async function postLikes(post_id){
    return db.query(`SELECT ARRAY_AGG(u.username) FROM users u JOIN likes l ON l.user_id = u.id WHERE post_id = $1;`, [post_id])
}