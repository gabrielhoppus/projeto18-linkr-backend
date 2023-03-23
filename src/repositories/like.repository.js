import { db } from "../config/database.connection.js";

export async function insertLike(user_id, post_id){
    return db.query(`INSERT INTO likes (user_id, post_id) VALUES ($1, $2) RETURNING *`, [user_id, post_id]);
}

export async function deleteLike(user_id, post_id){
    return db.query(`DELETE FROM likes WHERE user_id = $1 AND post_id = $2 RETURNING *`, [user_id, post_id])
}

export async function listLikes(){
    return db.query(`SELECT post_id, COUNT(post_id) AS like_count FROM likes GROUP BY post_id;`)
}