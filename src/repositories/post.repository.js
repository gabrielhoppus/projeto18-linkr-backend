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
    `INSERT INTO posts (user_id, url, comment, title, description, image) VALUES ($1, $2, $3, $4, $5, $6);`,
    [user, comment, url, urlTitle, urlDescription, urlImage]
  );
}

export async function sendPosts() {
  return db.query(`SELECT * FROM posts;`);
}

export async function getToken(token) {
  return db.query(`SELECT * FROM users WHERE token = $1;`, [token]);
}
export async function deletePost(id) {
  return db.query(`DELETE * FROM posts WHERE id = $1;`, [id]);
}
export async function deleteHashtags(id) {
  return db.query(`DELETE * FROM hashtag_posts WHERE post_id = $1;`, [id]);
}
export async function patchPost(title, comment, id) {
  return db.query(`PATCH posts SET title = $1, comment = $2 WHERE id = $3`, [
    title,
    comment,
    id,
  ]);
}
