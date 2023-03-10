import { db } from "../config/database.connection.js";

export async function findPosts(id) {
  return db.query(
    `SELECT username, picture, comment
        FROM users 
        JOIN posts ON users.id = posts.user_id
        WHERE users.id = $1`,
    [id]
  );
}

export async function findUser(id) {
  return db.query(`SELECT * FROM users WHERE id = $1`, [id]);
}

export async function finderUsers(name) {
  return db.query(`SELECT * FROM users WHERE name LIKE $1%`, [name]);
}
