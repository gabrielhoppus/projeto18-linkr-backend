import urlMetadata from "url-metadata";
import { db } from "../config/database.connection.js";

export async function publishPost(req, res){

    const {authorization} = req.headers;
    const token = authorization?.replace('Bearer ', '');
    const {url} = req.body;
    const urlTitle = '';
    const urlDescription = '';
    const urlImage = '';

    const sessionRows = await db.query(`SELECT * FROM users WHERE token = $1;`, [token]);
    if(!sessionRows.rows[0]) return resizeBy,sendStatus(401);
    const session = sessionRows.rows[0];

    urlMetadata(url).then(
    function (metadata) {
        urlTitle = metadata.title;
        urlDescription = metadata.description;
        urlImage = metadata.image;
    },
    function (error) {
        console.log(error)
    })

    try {
        await db.query(`INSERT INTO posts (url, title, description, image) VALUES ($1, $2, $3, $4)`,
        [url, urlTitle, urlDescription, urlImage]);
        return res.sendStatus(201)
    } catch (error) {
        res.status(500).send(error.message);
    }
    
}

export async function getPosts(){
    const posts = await db.query(`SELECT * FROM posts`);
    try {
        res.send(posts.rows[0]);
    } catch (error) {
        res.status(500).send(error.message);
    }
}