import { db } from "../config/database.connection.js";

export async function savePost(
  user,
  comment,
  url,
  urlTitle,
  urlDescription,
  urlImage
) {
  return db.query(
    `INSERT INTO posts (user_id, comment, url, title, description, image) VALUES ($1, $2, $3, $4, $5, $6);`,
    [user, comment, url, urlTitle, urlDescription, urlImage]
  );
}

export async function sendPosts() {
  return db.query(`SELECT * FROM posts;`);
}

export async function getToken(token) {
  return db.query(`SELECT * FROM users WHERE token = $1;`, [token]);
}
export async function deletePost(user_id, id) {
  return db.query(`DELETE FROM posts WHERE user_id = $1 AND id= $2;`, [
    user_id,
    id,
  ]);
}
export async function deleteHashtags(user_id, id) {
  return db.query(`DELETE FROM hashtag_posts WHERE post_id= $1 ;`, [id]);
}

export async function patchPost(comment, id, user_id) {
  return db.query(
    `UPDATE posts SET comment = $1 WHERE id = $2 AND user_id = $3`,
    [comment, id, user_id]
  );
}
export async function postrepositoryFindPost(id) {
  return db.query(`SELECT * FROM posts WHERE id = $1`, [id]);
}
